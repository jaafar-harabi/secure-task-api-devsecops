# Secure Task API — DevSecOps Project
### Created by **Jaafar Harabi**

A production-style **Task Management REST API** built using:

- **Node.js + TypeScript**
- **PostgreSQL**
- **Docker & Docker Compose**
- **Python automation scripts**
- **DevSecOps best practices**
- **GitHub Actions CI pipeline**

This project demonstrates strong skills in **DevOps, DevSecOps, containerization, API development, and automation using Python**.

---

## 🚀 Project Overview

This API allows users to manage tasks with the following lifecycle:

- `pending`
- `in_progress`
- `done`

The project is built using a **clean architecture**, strong **security practices**, automated workflows, and a **production-ready local development environment**.

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL |
| DevOps Automation | Python (CLI + Security scripts) |
| Containers | Docker + docker-compose |
| CI/CD | GitHub Actions |
| Security | Helmet, CORS, Rate limiting, JWT, gitleaks, trivy, bandit, npm audit |

---

## 🛡️ DevSecOps Features

This project integrates security at every stage (“shift-left”):

### **🔍 Static Analysis & Linting**
- ESLint (TypeScript rules)
- Prettier formatting
- TypeScript strict mode

### **🧪 Testing**
- Jest + Supertest
- Unit tests + integration tests
- Coverage thresholds enforced in CI

### **🛰 Dependency & Code Scanning**
- `npm audit` for JS dependencies
- Python `bandit` for DevOps scripts
- `gitleaks` for secret scanning
- `trivy` for Docker image vulnerability scanning

### **🔐 Runtime Security**
- Helmet (HTTP headers)
- CORS restrictions
- Rate limiting (brute force protection)
- Centralized error handling
- Non-root Docker containers
- Environment-based secrets

---

## 🐳 Docker & Deployment

### Start the entire stack:

```bash
python scripts/manage.py up
