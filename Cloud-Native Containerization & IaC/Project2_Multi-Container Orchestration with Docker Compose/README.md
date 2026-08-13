# 🐳 Multi-Container Microservices Architecture with Docker Compose

A production-ready microservices orchestration setup using **Docker Compose**. This project demonstrates multi-container networking, state persistence with Docker named volumes, health check dependency management, and containerized inter-service communication between a Node.js Express web application and a Redis cache database.

Repository Structure

phase3-project2/
├── docker-compose.yml  # Multi-container orchestration & service specs
├── Dockerfile          # Multi-stage container build instructions for web app
├── package.json        # Application dependencies (Express + Redis)
├── server.js           # Express.js application interacting with Redis DB
└── README.md           # Project architecture documentation

Key DevOps Principles Implemented
Service Discovery: Node.js app connects to Redis using the hostname redis-db resolved automatically by Docker's embedded DNS server.

Container Health Probes: healthcheck executes redis-cli ping every 5 seconds to guarantee Redis is fully accepting connections before starting the web server.

Data Persistence: Persistent volume mapping ensures key-value database storage outlives container lifecycles.

Isolated Bridge Network: Containers communicate over a dedicated user-defined network (app-network), preventing unauthorized traffic exposure.
EOF

