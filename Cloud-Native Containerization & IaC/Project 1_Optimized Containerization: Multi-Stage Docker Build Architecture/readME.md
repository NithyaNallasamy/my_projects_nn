we will take a web application (like Node.js or Go) and write an optimized Dockerfile to containerize it. we will implement Multi-Stage Builds to separate compilation/build environments from execution environments, drastically shrinking image sizes and eliminating security attack vectors.

┌────────────────────────────────────────────────────────┐
│ STAGE 1: Build Stage (heavy dependencies, compilers)   │
└───────────────────────────┬────────────────────────────┘
                            │ (Copies ONLY runtime artifact)
                            ▼
┌────────────────────────────────────────────────────────┐
│ STAGE 2: Production Stage (minimal image, e.g. Alpine) │
└────────────────────────────────────────────────────────┘

Key Skills:

Writing declarative Dockerfile directives (FROM, WORKDIR, COPY, RUN, CMD).

Managing container image layers to maximize cache reuse.

Reducing image footprints by over 80% using Alpine/Distroless base images and multi-stage builds.

Running, mapping ports, and inspecting isolated Docker containers locally.
