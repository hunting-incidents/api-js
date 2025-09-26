# Hunting Incident API

[![CI](https://github.com/hunting-incidents/api-js/actions/workflows/ci.yml/badge.svg)](https://github.com/hunting-incidents/api-js/actions/workflows/ci.yml)

[![E2E Tests](https://github.com/hunting-incidents/api-js/actions/workflows/e2e.yml/badge.svg)](https://github.com/hunting-incidents/api-js/actions/workflows/e2e.yml)



This repository contains the backend API for the hunting incident management system. This is a NestJS POC for the service, used as a learning project for myself (@wolf29f) to discover and learn more about NestJS.

The project may or may not stay in NestJS depending on the POC outcome.

## TODO

### Stage 0 — Infra & Skeleton
- [X] Create a `docker-compose.yml` to start API + Postgres + Redis (+ Mailpit, Otel-collector, Prometheus as optional)
- [X] Add configuration handling (`@nestjs/config`)
- [X] Enable JSON structured logs (nestjs-pino)
- [X] Add `/healthz` endpoint for liveness check

### Stage 1 — Data & Listing
- [ ] Connect Postgres with Prisma (migrations, minimal seed)
- [ ] Enable global DTO validation (`ValidationPipe`)
- [ ] List incidents as **GeoJSON** (`GET /incidents.geojson`)
- [ ] List incidents as **event list** (`GET /incidents` with filters/pagination)

### Stage 2 — Details & Creation
- [ ] Fetch single incident by id (`GET /incidents/:id`)
- [ ] Create an incident (`POST /incidents`) with validation
- [ ] Add patch mechanism for partial updates (`PATCH /incidents/:id`)

### Stage 3 — Authentication & Authorization
- [ ] Implement **magic link authentication** → issue JWT in HttpOnly cookie (6h)
- [ ] Restrict incident creation to authenticated users
- [ ] Implement simple **RBAC** (`user`, `moderator`, `admin`)
- [ ] Add minimal User CRUD (protected by `admin` role)

### Stage 4 — Observability
- [ ] Expose Prometheus metrics (`/metrics`) with `prom-client`
- [ ] Add OTEL tracing (HTTP + Prisma/Postgres) via otel-collector
- [ ] Correlate logs ↔ traces (inject `traceId` into pino logs)

### Stage 5 — Finish
- [ ] Joi validation of config