import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  baseVx: number;
  baseVy: number;
  impulseVx: number;
  impulseVy: number;
  radius: number;
}

const STAR_COUNT = 80;
const CONNECT_DISTANCE = 120;
const MOUSE_CONNECT_DISTANCE = 160;
const STAR_SPEED = 0.4;
const DRAG_RADIUS = 150;
const DRAG_STRENGTH = 0.06;
const FRICTION = 0.96;
const MAX_IMPULSE = 4;

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const lastMouseRef = useRef<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const { clientWidth, clientHeight } = canvas!.parentElement!;
      canvas!.width = clientWidth * dpr;
      canvas!.height = clientHeight * dpr;
      canvas!.style.width = `${clientWidth}px`;
      canvas!.style.height = `${clientHeight}px`;
      ctx!.scale(dpr, dpr);
    }

    function initStars() {
      const { clientWidth, clientHeight } = canvas!.parentElement!;
      starsRef.current = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * clientWidth,
        y: Math.random() * clientHeight,
        baseVx: (Math.random() - 0.5) * STAR_SPEED,
        baseVy: (Math.random() - 0.5) * STAR_SPEED,
        impulseVx: 0,
        impulseVy: 0,
        radius: Math.random() * 1.2 + 0.6,
      }));
    }

    resize();
    initStars();

    function getPointerPos(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function handleMouseMove(e: MouseEvent) {
      const pos = getPointerPos(e);
      mouseRef.current = pos;

      if (isDraggingRef.current && lastMouseRef.current) {
        const dx = pos.x - lastMouseRef.current.x;
        const dy = pos.y - lastMouseRef.current.y;

        for (const star of starsRef.current) {
          const distX = star.x - pos.x;
          const distY = star.y - pos.y;
          const dist = Math.sqrt(distX * distX + distY * distY);

          if (dist < DRAG_RADIUS) {
            const falloff = 1 - dist / DRAG_RADIUS;
            star.impulseVx += dx * DRAG_STRENGTH * falloff;
            star.impulseVy += dy * DRAG_STRENGTH * falloff;

            // 속도 폭주 방지
            const impulseMag = Math.sqrt(
              star.impulseVx ** 2 + star.impulseVy ** 2
            );
            if (impulseMag > MAX_IMPULSE) {
              star.impulseVx = (star.impulseVx / impulseMag) * MAX_IMPULSE;
              star.impulseVy = (star.impulseVy / impulseMag) * MAX_IMPULSE;
            }
          }
        }
      }

      lastMouseRef.current = pos;
    }

    function handleMouseDown(e: MouseEvent) {
      isDraggingRef.current = true;
      lastMouseRef.current = getPointerPos(e);
    }

    function handleMouseUp() {
      isDraggingRef.current = false;
    }

    function handleMouseLeave() {
      mouseRef.current = null;
      isDraggingRef.current = false;
    }

    function handleResize() {
      const prevWidth = canvas!.width / dpr;
      const prevHeight = canvas!.height / dpr;

      resize();

      const { clientWidth: newWidth, clientHeight: newHeight } =
        canvas!.parentElement!;

      const scaleX = newWidth / prevWidth;
      const scaleY = newHeight / prevHeight;

      for (const star of starsRef.current) {
        star.x *= scaleX;
        star.y *= scaleY;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    function draw() {
      const { clientWidth: width, clientHeight: height } =
        canvas!.parentElement!;
      ctx!.clearRect(0, 0, width, height);

      const stars = starsRef.current;
      const mouse = mouseRef.current;

      // update positions
      if (!prefersReducedMotion) {
        for (const star of stars) {
          const vx = star.baseVx + star.impulseVx;
          const vy = star.baseVy + star.impulseVy;

          star.x += vx;
          star.y += vy;

          if (star.x <= 0 || star.x >= width) {
            star.baseVx *= -1;
            star.impulseVx *= -1;
          }
          if (star.y <= 0 || star.y >= height) {
            star.baseVy *= -1;
            star.impulseVy *= -1;
          }

          star.x = Math.max(0, Math.min(width, star.x));
          star.y = Math.max(0, Math.min(height, star.y));

          // 임펄스는 서서히 감쇠 (관성이 자연스럽게 잦아듦)
          star.impulseVx *= FRICTION;
          star.impulseVy *= FRICTION;
        }
      }

      // draw connections between stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            const opacity = 1 - dist / CONNECT_DISTANCE;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.25})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(stars[i].x, stars[i].y);
            ctx!.lineTo(stars[j].x, stars[j].y);
            ctx!.stroke();
          }
        }
      }

      // draw connections to mouse
      if (mouse) {
        for (const star of stars) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MOUSE_CONNECT_DISTANCE) {
            const opacity = 1 - dist / MOUSE_CONNECT_DISTANCE;
            ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(star.x, star.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      // draw stars
      for (const star of stars) {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx!.fill();
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
