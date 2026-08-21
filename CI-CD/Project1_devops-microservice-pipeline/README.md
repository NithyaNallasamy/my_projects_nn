# Flask CI/CD & Microservice Pipeline

An automated, end-to-end Continuous Integration and Continuous Delivery (CI/CD) pipeline for a containerized Python Flask microservice using Pytest, Docker, and GitHub Actions.

---

## 📌 Project Overview

This project demonstrates core DevOps practices:
* **Microservice Architecture:** Lightweight Flask REST API with health check endpoints.
* **Continuous Integration (CI):** Automated test discovery and execution on pull requests and pushes using `pytest`.
* **Continuous Delivery (CD):** Layer-cached Docker image builds triggered only when test suites pass on the `main` branch.
* **Pipeline Gating & Traceability:** Docker images tagged dynamically with the Git commit SHA (`${{ github.sha }}`).

---

## 📁 Repository Structure
.
├── .github/
│   └── workflows/
│       └── pipeline.yml       # GitHub Actions CI/CD workflow definition
├── app/
│   ├── __init__.py           # Package initializer
│   └── main.py               # Flask REST API implementation
├── tests/
│   └── test_main.py          # Pytest unit tests
├── .gitignore                # Git untracked patterns
├── Dockerfile                # Multi-stage/cached container build definition
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation


