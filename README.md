This repository is a minimal template created to understand
authentication boundaries and JWT flow.
It is not intended as a production-ready application.

# Users REST API (Node.js / Express)
Express REST API starter template with JWT authentication (learning-focused)

## Overview
This is a simple REST API for managing users built with Express.
It includes CRUD operations, validation, SQLite, and Swagger (OpenAPI).
The project is designed as a learning-oriented template with a practical structure in mind.

## Features
- GET /users        - Get user list
- POST /users       - Create a new user
- GET /users/:id    - Get a user by ID
- PUT /users/:id    - Update a user
- DELETE /users/:id - Delete a user

## Tech Stack
- Node.js
- Express
- SQLite (better-sqlite3)
- Swagger UI (OpenAPI 3.0)
- Morgan

## Directory Structure
```src/
  controllers/
  services/
  repositories/
  routes/
  middlewares/
  db/
```
## Design Policy

- Responsibilities are separated into Controller, Service, and Repository layers
- Validation logic is implemented in the Service layer
- The Repository layer is designed to support database switching
- Errors are handled by a centralized error handler

## API Documentation
Swagger UI: http://localhost:3000/api-docs

## How to Run
```
npm install
npm start

This project is intended as a backend portfolio and learning reference.
