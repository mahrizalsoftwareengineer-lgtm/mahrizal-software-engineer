---
name: aws-cloud
description: >-
  Guides AWS Cloud work for app hosting, migration from on-premise, IAM,
  networking, storage, databases, security baseline, cost control, and
  portfolio/CV framing of AWS experience. Use when the user mentions AWS,
  Amazon Web Services, EC2, S3, RDS, VPC, IAM, CloudFront, Route 53,
  migration to cloud, muc.co.id infra, or AWS on a resume/portfolio.
---

# AWS Cloud

## When this skill applies

- Designing or reviewing AWS architecture
- Migrating workloads from on-premise / shared hosting to AWS
- Hardening IAM, network, backups, and monitoring
- Writing portfolio/CV bullets about AWS ownership

## Default principles

1. **Least privilege** — IAM roles/policies scoped to the job; no long-lived root keys
2. **Private by default** — DB/app tiers in private subnets when possible; public only for intended entrypoints
3. **Automate recovery** — backups, multi-AZ when availability matters, documented restore steps
4. **Observe before optimize** — CloudWatch metrics/alarms before premature scale-out
5. **Cost visibility** — tag resources; prefer right-sizing over oversized “just in case”

## Common building blocks

| Need | Prefer |
|---|---|
| Web/app server | EC2 (or ECS/Fargate if containerized) behind ALB |
| Static assets / uploads | S3 (+ CloudFront if public CDN needed) |
| Relational DB | RDS (MySQL/Postgres) with automated backups |
| DNS | Route 53 |
| Secrets | Secrets Manager or SSM Parameter Store (never commit secrets) |
| TLS | ACM certificates on ALB/CloudFront |
| Bastion / admin access | SSM Session Manager over open SSH `0.0.0.0/0` when possible |

## Migration checklist (on-prem → AWS)

1. Inventory: apps, DB, DNS, SSL, cron/jobs, file storage, dependencies
2. Target architecture sketch (VPC, public/private subnets, SG rules)
3. Data migration plan (dump/restore window, cutover, rollback)
4. Security baseline: IAM, SG, encryption at rest/in transit, backup retention
5. Smoke test + monitoring + DNS cutover
6. Post-migrate: remove unused old infra, document runbook

## Security baseline (minimum)

- MFA on root and privileged users
- No public RDS / no world-open DB ports
- Security groups: allow only required ports/sources
- HTTPS everywhere for public endpoints
- Regular snapshots/backups with tested restore
- CloudTrail / config awareness for production accounts when available

## Agent workflow

1. Clarify workload (web app, DB, files, traffic, RTO/RPO)
2. Propose smallest viable architecture (avoid over-engineering)
3. Call out trade-offs (cost vs availability vs ops complexity)
4. Produce checklist or IaC outline only if user asks for implementation depth
5. For portfolio text: emphasize ownership, migration outcome, availability/security — not tool laundry lists

## Portfolio / CV framing (safe)

Prefer impact language:

- Initiated / owned migration from on-premise to AWS to improve availability
- Established security baseline (IAM, network controls, backups)
- Operated production web workloads with monitoring and controlled releases

Avoid:

- Claiming certifications not held
- Listing 20 services never operated
- Exposing account IDs, IPs, or internal diagrams with sensitive detail

## Do not

- Hardcode AWS keys in repos or `.env` committed to git
- Open `0.0.0.0/0` on SSH/DB “for convenience” in production advice
- Recommend multi-account/org complexity for a simple single-app workload unless asked
- Invent production metrics; use qualitative outcomes when numbers are unavailable
