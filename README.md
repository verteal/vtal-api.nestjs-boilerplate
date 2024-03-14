# VTAL API - [Service Name] Microservice

## Overview

This is the official [service name] microservice for verteal, responsible for [detailed information here].

## Usage

### Testing

Run unit and end-to-end (e2e) tests to ensure code reliability:

```bash
$ npm run test # Executes unit tests
$ npm run test:e2e # Executes end-to-end tests
```

### Build

Compile the project using the following commands:

```bash
$ npm run build # Performs a full build
$ npm run build:watch # Initiates build in watch mode for development
```

### Running the service

Start the service in development mode:

```bash
$ npm run dev
```

### Docker integration

This project relies on Docker for setting up Postgres and RabbitMQ. To initialize these services, simply execute:

```bash
$ docker-compose up
```
