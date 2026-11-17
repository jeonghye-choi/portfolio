---
{
  "title": "Exploring Latency and Codec Choices for Various Camera Types",
  "date": "2024-07-12",
  "tags": [
    "codecs",
    "hardware"
  ],
  "summary": "Comparing latency across USB, MIPI CSI, network, and GMSL cameras, and how codec choice compounds the difference in real-time systems."
}
---

Building the robot control interface at TeamGRIT meant working with several different camera types at once — not because I chose to, but because the hardware we integrated with simply came that way. Each one had its own latency profile, and I learned quickly that "camera" isn't one thing when you're building for real-time control.

## Why camera type matters as much as codec

- **USB cameras** are the easiest to work with, but latency depends heavily on USB bandwidth and driver overhead. Fine for most applications, less predictable under load.
- **MIPI CSI cameras** connect directly to a processor's image signal pipeline, cutting out a lot of the overhead USB introduces. Lower latency, but tighter hardware coupling.
- **Network cameras** add the most latency by nature — encoding, transmission, decoding all happen over a network stack. Manageable with the right codec, but never as fast as a direct connection.
- **GMSL cameras** are built for exactly this problem: long-distance, low-latency transmission, common in automotive and robotics.

## Where codec choice compounds the problem

The camera type sets a latency floor, but the codec decides how much you add on top of it. A network camera streaming with a heavy software-decoded codec stacks two latency sources on top of each other — which is exactly the kind of stacking that made our gesture-control interface feel sluggish before we started paying attention to it.

## What actually helped

Matching the codec to the hardware we had: GPU-accelerated decoding wherever the device supported it, and being deliberate about which camera type we reached for based on the actual latency budget of the interaction — not just what was available in the drawer.
