# 🚀 SprintX - AI-Powered Software Project Management Dashboard

SprintX is a modern AI-powered Software Project Management Dashboard designed to help teams manage projects, resources, risks, budgets, and delivery performance from a single platform.

Built with modern full-stack technologies, SprintX combines project tracking, team management, executive reporting, and AI-driven insights to improve project visibility and decision-making.

---

# 🌟 Vision

SprintX aims to become an intelligent project management platform that not only tracks project data but also predicts risks, identifies bottlenecks, recommends actions, and assists project managers with AI-powered decision support.

---

# ✨ Current Features

## 🔐 Authentication & Security

* User Registration
* User Login
* JWT Session Management
* Protected Routes
* Role-Based User Model
* Secure Password Hashing using Bcrypt
* Session-Based Project Ownership
* Production Authentication using NextAuth

### Supported Roles

* ADMIN
* MANAGER
* DEVELOPER
* QA

---

## 📊 Dashboard

Comprehensive executive dashboard displaying:

* Project Overview
* Delivery Metrics
* Budget Status
* Resource Utilization
* Team Performance
* Risk Summary

---

## 📁 Project Management

### Project CRUD

* Create Projects
* View Projects
* Update Projects
* Delete Projects

### Project Information

* Name
* Description
* Budget
* Owner
* Created Date
* Updated Date

### Ownership System

Projects are automatically linked to the authenticated user.

---

## 👥 Team Management

Manage project resources and workforce.

### Team Member Management

* Add Team Members
* Edit Team Members
* Delete Team Members

### Team Information

* Name
* Email
* Role
* Utilization %

---

## ⚠️ Risk Management

Track and manage project risks.

### Risk Features

* Create Risks
* Update Risks
* Delete Risks
* Risk Severity Tracking
* Mitigation Planning

### Severity Levels

* Low
* Medium
* High
* Critical

---

## 🤖 AI Insights Module

SprintX includes an AI intelligence section that provides project-level predictions.

### Current AI Features

#### Project Health Score

Calculated using:

* Sprint Velocity
* Resource Utilization
* Budget Consumption

#### Risk Prediction

Automatically estimates:

* High Risk
* Low Risk

#### Schedule Prediction

Detects:

* On Track
* Potential Delay

#### Budget Prediction

Detects:

* Budget Safe
* Overrun Risk

---

## 📈 Executive Recommendations

AI-generated recommendations including:

* Resource Allocation Suggestions
* QA Capacity Recommendations
* Delivery Improvement Suggestions
* Cost Optimization Recommendations

---

## 🎨 User Experience

### Modern UI

* Responsive Layout
* Mobile Navigation
* Dark Mode
* Light Mode
* Professional Dashboard Design

### Components

* Dynamic Sidebar
* Navbar
* Theme Toggle
* User Profile Menu
* Notifications UI

---

# 🛠️ Tech Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* ShadCN UI
* Lucide Icons
* Framer Motion

## Backend

* Next.js API Routes
* Prisma ORM
* PostgreSQL

## Authentication

* NextAuth
* JWT Strategy
* Bcrypt

## Database

* Neon PostgreSQL

## Deployment

* Vercel

---

# 🗄️ Database Schema

## User

* id
* name
* email
* password
* role

## Project

* id
* name
* description
* budget
* ownerId

## TeamMember

* id
* name
* email
* role
* utilization

## Risk

* id
* title
* severity
* mitigation
* projectId

## Task

* id
* title
* status
* projectId

---

# 🔒 Security Features

### Implemented

* Password Hashing
* Session Authentication
* Protected Routes
* Owner-Based Project Creation
* Prisma Validation
* Environment Variable Protection

### Planned

* Role-Based Route Protection
* API Authorization Middleware
* Audit Logging
* Rate Limiting
* MFA Authentication

---

# 🚀 Deployment Architecture

Frontend:

* Vercel

Backend:

* Next.js API Routes

Database:

* Neon PostgreSQL

ORM:

* Prisma

Authentication:

* NextAuth

---

# 🏗️ System Architecture

```text
┌─────────────────────────┐
│      Client Browser     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│      Next.js Frontend   │
│  (React + TypeScript)   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│     API Route Layer     │
│     Next.js Backend     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│       Prisma ORM        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│    Neon PostgreSQL      │
└─────────────────────────┘
```

---

# 🔌 API Architecture

SprintX follows a REST-based API architecture using Next.js Route Handlers.

All APIs are implemented inside:

```text
src/app/api
```

---

# 🔐 Authentication APIs

## Register User

```http
POST /api/auth/register
```

### Request

```json
{
  "name": "Aryan",
  "email": "aryan@example.com",
  "password": "password123"
}
```

### Response

```json
{
  "success": true,
  "user": {
    "id": "user-id",
    "name": "Aryan",
    "email": "aryan@example.com"
  }
}
```

---

## Login

Managed by NextAuth Credentials Provider

```http
POST /api/auth/callback/credentials
```

Authentication strategy:

```text
JWT Session Authentication
```

---

## Session

```http
GET /api/auth/session
```

Returns current authenticated user.

---

# 📁 Project APIs

Base Route:

```http
/api/projects
```

---

## Get All Projects

```http
GET /api/projects
```

### Response

```json
[
  {
    "id": "project-id",
    "name": "SprintX",
    "budget": 50000
  }
]
```

---

## Create Project

```http
POST /api/projects
```

### Request

```json
{
  "name": "SprintX",
  "description": "Project Dashboard",
  "budget": 50000
}
```

### Security

Owner ID is automatically assigned from:

```text
Authenticated Session User
```

---

## Update Project

```http
PUT /api/projects/{id}
```

### Request

```json
{
  "name": "Updated Name",
  "description": "Updated Description",
  "budget": 60000
}
```

---

## Delete Project

```http
DELETE /api/projects/{id}
```

---

# 👥 Team APIs

Base Route

```http
/api/team
```

---

## Get Team Members

```http
GET /api/team
```

---

## Create Team Member

```http
POST /api/team
```

### Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "Developer",
  "utilization": 85
}
```

---

## Update Team Member

```http
PUT /api/team/{id}
```

---

## Delete Team Member

```http
DELETE /api/team/{id}
```

---

# ⚠️ Risk APIs

Base Route

```http
/api/risks
```

---

## Get Risks

```http
GET /api/risks
```

---

## Create Risk

```http
POST /api/risks
```

### Request

```json
{
  "title": "Production Outage",
  "severity": "High",
  "mitigation": "Implement Monitoring"
}
```

---

## Update Risk

```http
PUT /api/risks/{id}
```

---

## Delete Risk

```http
DELETE /api/risks/{id}
```

---

# 🤖 AI APIs (Planned)

Future API endpoints:

## AI Project Health

```http
POST /api/ai/project-health
```

Returns:

```json
{
  "healthScore": 84,
  "riskLevel": "Low"
}
```

---

## AI Risk Prediction

```http
POST /api/ai/risk-prediction
```

Predicts future project risks.

---

## AI Executive Summary

```http
POST /api/ai/executive-summary
```

Generates project-level executive reports.

---

## AI Sprint Forecasting

```http
POST /api/ai/forecast
```

Predicts:

* Sprint Completion
* Budget Utilization
* Resource Requirements

---

# 🔒 Security Architecture

Authentication Flow

```text
User Login
    │
    ▼
NextAuth Credentials
    │
    ▼
Bcrypt Password Validation
    │
    ▼
JWT Token Generation
    │
    ▼
Session Creation
    │
    ▼
Protected Routes Access
```

---

# 📦 Request Lifecycle

```text
Frontend Request
       │
       ▼
API Route
       │
       ▼
Authentication Check
       │
       ▼
Prisma ORM
       │
       ▼
PostgreSQL Database
       │
       ▼
JSON Response
       │
       ▼
Frontend UI Update
```

---

# 🗺️ Roadmap

## Phase 1 — Core Platform ✅

* Authentication
* Dashboard
* Projects
* Team Management
* Risk Management
* AI Insights
* Deployment

Status: Completed

---

## Phase 2 — Project Execution 🚧

### Tasks Module

* Task Creation
* Task Assignment
* Sprint Boards
* Status Tracking
* Burndown Metrics

### Resource Planning

* Capacity Planning
* Resource Forecasting
* Allocation Dashboard

---

## Phase 3 — Advanced Analytics 📈

### Reporting

* Executive Reports
* Portfolio Dashboards
* KPI Tracking

### Forecasting

* Budget Forecasting
* Schedule Forecasting
* Resource Forecasting

---

## Phase 4 — AI Intelligence 🤖

### OpenAI Integration

* Project Assistant
* Risk Analysis
* Project Summaries
* Executive Briefings

### AI Agents

* Scrum Master Agent
* Project Manager Agent
* Risk Management Agent
* Reporting Agent

---

## Phase 5 — Enterprise Features 🏢

### Collaboration

* Comments
* Activity Feed
* Notifications
* Mentions

### Integrations

* Jira
* GitHub
* GitLab
* Slack
* Microsoft Teams

---

## Phase 6 — DevOps & Delivery 🚀

### CI/CD Dashboard

* Build Tracking
* Deployment Metrics
* Release Health

### Cloud Monitoring

* AWS Metrics
* Azure Metrics
* Kubernetes Monitoring

---

# 📋 Future AI Features

### Predictive Risk Engine

Predict project failures before they occur.

### Intelligent Resource Allocation

Recommend optimal team assignments.

### Cost Optimization Engine

Identify budget waste automatically.

### Delivery Prediction Model

Forecast release dates using historical data.

### AI Executive Assistant

Generate executive summaries and project reports automatically.

---

# 👨‍💻 Author

Aryan Jaiswal

Software Developer | Backend Engineer | AI & DevOps Enthusiast

GitHub:
https://github.com/WiZzArD07

---

# ⭐ Project Status

Current Version: MVP v1.0

Status:
Active Development

Next Milestone:
Task Management + Advanced AI Integration
