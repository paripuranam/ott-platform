# OTT Platform

A scalable and containerized OTT (Over-the-Top) platform built using microservices. This platform allows users to stream videos, manage subscriptions, upload content, and browse a video catalog. It uses Docker for containerization, Kubernetes for orchestration, Jenkins for CI/CD, and Argo CD for GitOps-based continuous deployment.

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

This project is designed as a cloud-ready OTT platform to allow users to watch and manage video content. It leverages microservices for a flexible architecture and uses modern CI/CD and orchestration tools to ensure scalability and ease of deployment.

---

## Features

- **User Authentication**: Users can securely log in and register.
- **Video Catalog**: Browse and view videos available on the platform.
- **Video Streaming**: Stream video content seamlessly.
- **Subscription Management**: Subscribe to premium services.
- **Video Upload**: Content creators can upload videos to the platform.
- **Containerization**: Dockerized services for easy development and scaling.
- **Kubernetes Orchestration**: Services are orchestrated via Kubernetes for high availability and scaling.
- **CI/CD with Jenkins**: Automated builds and deployments via Jenkins pipelines.
- **GitOps with Argo CD**: Continuous delivery using Argo CD.

---

## System Architecture

The system is broken down into several microservices:
1. **Auth Service**: Manages user authentication.
2. **Catalog Service**: Manages the video catalog.
3. **Streaming Service**: Streams video content.
4. **Subscription Service**: Handles subscription and payments.
5. **Upload Service**: Manages video uploads and stores them in AWS S3.

---

## Directory Structure

```bash
OTT-Platform/
├── auth-service/
│   ├── Dockerfile
│   ├── src/
│   ├── kubernetes/
│   └── Jenkinsfile
├── catalog-service/
│   ├── Dockerfile
│   ├── src/
│   ├── kubernetes/
│   └── Jenkinsfile
├── streaming-service/
│   ├── Dockerfile
│   ├── src/
│   ├── kubernetes/
│   └── Jenkinsfile
├── subscription-service/
│   ├── Dockerfile
│   ├── src/
│   ├── kubernetes/
│   └── Jenkinsfile
├── upload-service/
│   ├── Dockerfile
│   ├── src/
│   ├── kubernetes/
│   └── Jenkinsfile
├── kubernetes/
│   ├── namespace.yaml
│   └── argo-cd.yaml
└── README.md
```
## Prerequisites
Ensure you have the following tools installed:

- **Docker**: Get Docker
- **Kubernetes**: Install Minikube (or any Kubernetes platform like EKS, GKE)
- **kubectl**: Install kubectl
- **Jenkins**: Install Jenkins
- **Argo CD**: Install Argo CD

---

## Installation

1. Clone the Repository

```bash
git clone https://github.com/paripuranam/ott-platform.git
cd ott-platform
```