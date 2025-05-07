# Stafrænt Ísland útboð 23151 - Fuglar ehf.

## About This Monorepo

This project is an Nx integrated monorepo containing two main backend services:

* **National Registry (NestJS, PostgreSQL, Sequelize)**
* **Skatturinn API (NestJS, PostgreSQL, Sequelize)**

**Other documentation can be found here:**
* [Databases](./docs/DATABASES.md)
* [System diagram](./docs/STRUCTURIZER.md)

### Key Technologies and Tools

* **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
* **PostgreSQL**: The database system used for both services.
* **Sequelize**: ORM for database interaction, using Sequelize CLI for migrations and seeders.
* **Docker**: Docker Compose is used to manage all services, including the databases.
* **Nx**: The monorepo tool for managing the project structure and commands.
* **TypeScript**: For strong typing and maintainable code.
* **Jest**: For testing.
* **ESLint and Prettier**: For code quality and formatting.


# Project Commands

This README provides a list of useful commands for managing this project using Docker and Sequelize.

## Docker Commands

### Start Specific Services

* **Start Structurizr:**

  ```bash
  yarn start:structurizr
  ```

  Starts the Structurizr service using Docker Compose.

* **Start Skattur Database:**

  ```bash
  yarn start:skattur_db
  ```

  Starts the Skattur database using Docker Compose.

* **Start National Registry Database:**

  ```bash
  yarn start:national_registry_db
  ```

  Starts the National Registry database using Docker Compose.

* **Stop All Docker Services:**

  ```bash
  yarn docker_down
  ```

  Stops all Docker containers managed by Docker Compose.

* **Start All Services:**

  ```bash
  yarn all
  ```

  Starts all services defined in the Docker Compose file.

## Sequelize Commands

### Migration Commands

* **Create a Migration for National Registry:**

  ```bash
  yarn create-migration:national-registry <migration-name>
  ```

  Creates a new migration file in the National Registry app.

* **Create a Migration for Skatturinn API:**

  ```bash
  yarn create-migration:skatturinn-api <migration-name>
  ```

  Creates a new migration file in the Skatturinn API app.

### Seeder Commands

* **Create a Seeder for National Registry:**

  ```bash
  yarn create-seeder:national-registry <seeder-name>
  ```

  Creates a new seeder file in the National Registry app.

* **Create a Seeder for Skatturinn API:**

  ```bash
  yarn create-seeder:skatturinn-api <seeder-name>
  ```

  Creates a new seeder file in the Skatturinn API app.

### Running Migrations and Seeders

* **Run Migrations for National Registry:**

  ```bash
  yarn migrate:national-registry
  ```

* **Run Migrations for Skatturinn API:**

  ```bash
  yarn migrate:skatturinn-api
  ```

* **Run Seeders for National Registry:**

  ```bash
  yarn seed:national-registry
  ```

* **Run Seeders for Skatturinn API:**

  ```bash
  yarn seed:skatturinn-api
  ```

### Undoing Migrations and Seeders

* **Undo All Migrations for National Registry:**

  ```bash
  yarn undo:migrations:national-registry
  ```

* **Undo All Seeders for National Registry:**

  ```bash
  yarn undo:seed:national-registry
  ```

* **Undo All Migrations for Skatturinn API:**

  ```bash
  yarn undo:migrations:skatturinn
  ```

* **Undo All Seeders for Skatturinn API:**

  ```bash
  yarn undo:seed:skatturinn
  ```

## Development Commands

* **Start Development Services:**

  ```bash
  yarn dev-services
  ```

  Starts development services using NX.

* **Start the Application:**

  ```bash
  yarn start
  ```

  Runs the application using NX.
