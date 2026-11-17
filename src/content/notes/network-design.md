---
{
  "title": "Network Design: Structure and Architecture",
  "date": "2024-04-21",
  "tags": [
    "systems"
  ],
  "summary": "Notes on what makes a network design efficient and stable, and how structural choices affect reliability under real usage."
}
---

Most of what I know about network design didn't come from a course — it came from watching a system misbehave and having to figure out why. Robot control systems make this especially visible: a bad network topology doesn't just slow things down, it turns into a robot that hesitates or drifts off-course.

## Structure decides more than you'd expect

A network's topology — how devices are connected and how traffic flows between them — determines a lot before a single packet is sent. Centralized structures are easy to reason about but create a single point of failure. Distributed structures are more resilient but harder to debug when something goes wrong.

## Stability isn't just uptime

The network being "up" doesn't mean it's stable for the application running on it. For real-time control, jitter — the variation in latency — often matters more than the average latency itself. A network that's consistently 50ms is far more usable than one that swings between 10ms and 200ms.

## What this meant in practice

Designing for predictability over raw speed: choosing consistent paths for time-sensitive traffic, and treating the network itself as part of the system's reliability — not just plumbing underneath it.
