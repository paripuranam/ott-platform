
# OTT Platform

A scalable and containerized Over-the-Top (OTT) platform built using microservices. This platform allows users to stream videos, upload content, and browse a video catalog. It uses Docker for containerization, Kubernetes for orchestration, Jenkins for CI/CD, and Argo CD for GitOps-based continuous deployment.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Directory Structure](#directory-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Platform Locally](#running-the-platform-locally)
- [Deploying on Kubernetes](#deploying-on-kubernetes)
- [Using Jenkins for CI/CD](#using-jenkins-for-ci-cd)
- [Using Argo CD for GitOps](#using-argo-cd-for-gitops)
- [API Endpoints](#api-endpoints)
- [Frontend (Optional)](#frontend-optional)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project is designed as a cloud-ready OTT platform that enables users to stream and manage video content. It follows a microservices architecture, using modern containerization and orchestration tools for scalable deployment and continuous delivery.

---

## Features

- **User Authentication**: Secure login and registration for users.
- **Video Streaming**: Stream videos seamlessly.
- **Content Upload**: Content creators can upload videos to the platform.
- **Containerization**: Each service is Dockerized for easy development and deployment.
- **Kubernetes Orchestration**: Services are orchestrated using Kubernetes for high availability and auto-scaling.
- **CI/CD with Jenkins**: Automated builds and deployments are managed with Jenkins pipelines.
- **GitOps with Argo CD**: Git-based continuous deployment using Argo CD.

---

## System Architecture

The platform follows a microservices architecture, with each service handling a specific responsibility:

1. **Auth Service**: Manages user authentication and authorization.
2. **Streaming Service**: Streams video content to users.
3. **Upload Service**: Manages video uploads and stores content in a cloud storage system (e.g., AWS S3).

---

## Directory Structure

```bash
OTT-Platform/
├── services/
│   ├── auth-service/
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── frontend/
│   │   │   ├── Dockerfile
│   │   │   ├── index.html
│   │   ├── kubernetes/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   ├── configmap.yaml
│   │   │   ├── secret.yaml
│   ├── streaming-service/
│   │   ├── Dockerfile
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── frontend/
│   │   │   ├── Dockerfile
│   │   │   ├── index.html
│   │   ├── kubernetes/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   ├── configmap.yaml
│   │   │   ├── secret.yaml
│   ├── uploading/
│   │   ├── send.js
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── .gitignore
├── jenkins/
│   ├── Jenkinsfile
├── argo-cd/
│   ├── app.yaml
├── docker-compose.yaml
├── .gitignore
├── .env
├── README.md
```

---

## Prerequisites

Ensure you have the following tools installed:

- **Docker**: [Get Docker](https://www.docker.com/)
- **Kubernetes**: Install Minikube (or any Kubernetes platform like EKS, GKE)
- **kubectl**: [Install kubectl](https://kubernetes.io/docs/tasks/tools/)
- **Jenkins**: [Install Jenkins](https://www.jenkins.io/)
- **Argo CD**: [Install Argo CD](https://argo-cd.readthedocs.io/en/stable/getting_started/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/paripuranam/ott-platform.git
   cd ott-platform
   ```

2. Configure the environment variables by creating a `.env` file in the root directory. Use the `.env.example` file as a reference.

3. Build the Docker containers:

   ```bash
   docker-compose up --build
   ```

---

## Running the Platform Locally

1. Run the platform using Docker Compose:

   ```bash
   docker-compose up
   ```

2. The services will be available at:

   - **Auth Service**: `http://localhost:8000`
   - **Streaming Service**: `http://localhost:8001`
   - **Upload Service**: `http://localhost:8002`

---

## Deploying on Kubernetes

1. Deploy the services on your Kubernetes cluster:

   ```bash
   kubectl apply -f kubernetes/
   ```

2. Monitor the services using:

   ```bash
   kubectl get pods
   ```

---

## Using Jenkins for CI/CD

1. Set up Jenkins on your local machine or cloud environment.
2. Create a Jenkins pipeline using the `Jenkinsfile` in the `jenkins/` folder.
3. Configure your Jenkins pipeline to build and deploy services when new code is pushed to the repository.

---

## Using Argo CD for GitOps

1. Install Argo CD on your Kubernetes cluster.
2. Apply the Argo CD application configuration:

   ```bash
   kubectl apply -f argo-cd/app.yaml
   ```

3. Monitor and manage your deployments through the Argo CD UI.

---

## API Endpoints

### Auth Service
- **POST** `/register`: Register a new user.
- **POST** `/login`: Authenticate and log in a user.

### Streaming Service
- **GET** `/stream/{videoId}`: Stream a video by ID.

### Upload Service
- **POST** `/upload`: Upload a new video.

---

## Frontend (Optional)

You can add a frontend for this platform to provide a user-friendly interface for authentication, video streaming, and content uploads.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License.
