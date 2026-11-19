# IPyD Frontend

## Overview
The IPyD Frontend is a React-based web application that provides a user interface for the Integrated Python Booking System. It allows users to search for flights, make reservations, and manage their bookings through an intuitive interface.

## Features
- Flight search and browsing
- Flight and hotel reservation booking
- Reservation management
- Responsive design
- Integration with IPyD API Gateway

## Technology Stack
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.3.1
- **Routing**: React Router DOM 6.24.1
- **HTTP Client**: Axios 1.7.2
- **Linting**: ESLint

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## Installation

### Using Docker (Recommended)
```bash
# Build and run the container
docker-compose up --build

# The application will be available at http://localhost:5173
```

### Local Development
```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# The application will be available at http://localhost:5173
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot-reload.

### Build
```bash
npm run build
```
Builds the application for production.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality.

### Preview
```bash
npm run preview
```
Preview the production build locally.

## Configuration
The frontend connects to the API Gateway at the configured endpoint. Update the API base URL in your environment configuration or axios setup to point to your API Gateway instance (default: `http://localhost:8005`).

## Docker Configuration
The service runs on port 5173 and can be deployed using the provided Dockerfile and docker-compose configuration.

## Related Services
This service is part of the IPyD (Integrated Python Booking System) ecosystem:
- **API Gateway**: Routes requests to all microservices
- **Orchestrator**: Coordinates combined flight and hotel reservations
- **Flights API**: Manages flight reservations and flight data

## License
Private

## Author
Nicolas Huertas
