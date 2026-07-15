import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "@/components/Container";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/notes", label: "Notes" },
  { to: "/experiences", label: "Experiences" },
  { to: "/labs", label: "Labs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-text-h" : "text-text hover:text-text-h"
    }`;

  return (
    <header className="bg-header sticky top-0 z-50 h-16 select-none">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-text-h text-base font-medium">
            Jeonghye Choi
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`bg-text-h absolute top-0 left-0 h-0.5 w-5 transition-transform ${
                  isOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`bg-text-h absolute top-1.75 left-0 h-0.5 w-5 transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`bg-text-h absolute bottom-0 left-0 h-0.5 w-5 transition-transform ${
                  isOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-border bg-header border-t backdrop-blur-md md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="text-text hover:text-text-h py-2 text-sm font-medium"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
