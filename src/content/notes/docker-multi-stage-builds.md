---
title: "Understanding Docker Multi-Stage Builds"
date: "2024-07-12"
tags: ["docker"]
summary: "What multi-stage builds solve, and why leaner Docker images end up mattering more than they seem to at first."
---

The first Docker images I shipped were embarrassingly large — everything from build tools to source files baked into a single image that had no business being in production. Multi-stage builds were the fix, and understanding _why_ they work changed how I think about builds in general.

## The problem with single-stage builds

A typical Dockerfile installs dependencies, builds the project, and ships all of it — including the build tools that were only ever needed to produce the output. That means shipping a compiler to run a binary, or shipping node_modules to serve a bundle that was already compiled.

## What multi-stage builds actually do

A multi-stage build splits the process into separate stages, each with its own base image. One stage does the heavy lifting — installing dependencies, compiling, bundling. A final, separate stage starts from a clean, minimal base image and copies over only the finished artifact.

```dockerfile
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:20-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]
```

## Why the size difference matters more than it seems

A smaller image isn't just about disk space. It means faster deploys, a smaller attack surface, and fewer things that could go wrong at runtime because they were never there to begin with. Once I started treating image size as a real metric instead of an afterthought, a lot of my Dockerfiles got noticeably simpler.
