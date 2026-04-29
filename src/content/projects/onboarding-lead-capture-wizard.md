---
title: "Onboarding Lead Capture Wizard"
description: "Frontend onboarding flow that captures lead data and submits it through a secure API to a backend database with validation, rate limiting, and audit logging."
date: "2026-04-16"
slug: "onboarding-lead-capture-wizard"
status: "archvied"
summary: "Multi-step lead capture form with secure API ingestion, server-side validation, and durable storage for sales and onboarding workflows."
phase: 2
stack: ["JavaScript", "React", "Form Validation", "REST API", "PostgreSQL", "Security", "Automation"]
githubUrl: "https://github.com/ZackC98/onboarding-lead-capture-wizard"
liveUrl: ""
featured: false
---

## Problem

Manual lead intake through spreadsheets and ad-hoc forms produced incomplete records, duplicated submissions, and weak traceability between marketing handoff and onboarding teams.

## Solution

This project implements a front-end wizard that collects lead and onboarding details in staged steps, then sends payloads to a secure API for validation and persistence.

The API applies authentication checks, input sanitisation, schema validation, and rate limiting before writing to the database.

## System Flow

1. User completes step-based onboarding form.
2. Frontend validates required fields and formats.
3. Submission is sent via HTTPS to a protected API endpoint.
4. API validates payload, enforces rules, and stores record in backend DB.
5. Event and error logs are written for auditing and support.

## Engineering Notes

- field-level validation on both client and server to prevent trust on client input
- idempotency-safe submission handling to reduce duplicate lead records
- structured API responses for predictable UX error states
- audit-friendly metadata capture (source, timestamp, actor/session identifiers)

## IC / SA Focus

The project is used to practice:

- API contract design between frontend and backend services
- secure data handling patterns for customer-identifying information
- reliability patterns for form-heavy workflows in production environments
- observability and operational readiness for handoff between teams
