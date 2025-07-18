# SmartLibrary

SmartLibrary is a full-stack Library Management System project.

## Project Structure

- `backend/` : Backend service built with Spring Boot (Java) and SQLite database
- `frontend/` : Frontend application built with React
- `docker-compose.yml` : Orchestrates both backend and frontend using Docker

---

## Quick Start

1. **Backend**
   - Go to the `backend` directory and run the Spring Boot project.
   - Requirements: Java 17 or higher, Maven

2. **Frontend**
   - Go to the `frontend` directory and run the React app.
   - Requirements: Node.js, npm or yarn

3. **Run with Docker**
   - In the project root, run:
     ```sh
     docker-compose up --build
     ```

---

## Features
- Book management (CRUD)
- Member management (CRUD)
- Book lending and returning
- Search and reporting

---

For more details, see the README files in each subdirectory.
