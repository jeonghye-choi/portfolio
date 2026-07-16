---
title: "Understanding Codecs"
date: "2024-07-12"
tags: ["codecs", "realtime"]
summary: "Notes on how video codecs evolved, and why the choice between software, GPU, and hardware decoding matters more than it seems."
---

I first took codecs seriously while building a real-time interface for camera and sensor data at TeamGRIT. Before that, video just played — I never thought about what was happening underneath. But in a robot control interface, a one-second delay can mean an actual malfunction, and that's when I learned how much a single codec choice can shape the felt quality of the result.

## What a codec actually does

A codec — short for "coder-decoder" — compresses and decompresses video. Raw footage is too large to store or transmit as-is, so codecs shrink it down while trying to preserve as much quality as possible.

## Why codecs aren't interchangeable

Looking at the codecs most common in web and app development today, their history is really a story of trade-offs between compression efficiency and cost or compatibility.

**H.264**, released in 2003, is still the most widely used codec — YouTube, Netflix, video conferencing, almost everywhere. That ubiquity comes with licensing fees for commercial use.

**VP8/VP9** were Google's answer to that licensing problem: open and royalty-free. Browser support is excellent, but hardware acceleration hasn't caught up to H.264 in the same way.

**H.265 (HEVC)** nearly halves file size compared to H.264, which is why it's the default for 4K/8K streaming and video conferencing. The cost: higher licensing fees.

**AV1** aims to beat both H.265 and VP9 without any royalties. Google, Apple, and Microsoft are all backing it — hardware acceleration is still catching up, but it's the codec I'd bet on longer-term.

## Where the decoding happens matters just as much

Even with the same codec, _where_ it gets decoded changes everything.

- **Software codecs** run on the CPU. Flexible and easy to update, but they compete with everything else running on the device — a real constraint on lower-end hardware.
- **GPU-accelerated codecs** offload that work and process video much faster. This is why platforms like NVIDIA Jetson show up in robotics and edge devices doing real-time video analysis.
- **Hardware codecs** run on dedicated chips (VPUs, SoCs). Lowest latency by far — which makes them the practical answer whenever real-time matters: live streaming, interactive media.

## Looking back

At the time, this was just me trying to figure out why a camera feed felt sluggish. In hindsight, it was really the same question I keep running into now, just in a different form: how do you balance real-time responsiveness against the resources you actually have? Rendering point clouds in WebGL, recognizing gestures with MediaPipe — it's the same trade-off, dressed differently each time.
