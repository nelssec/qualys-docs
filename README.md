# Qualys CI/CD Security Integration Documentation

Documentation for integrating Qualys container and code security scanning into CI/CD pipelines.

## Supported Platforms

- **GitHub Actions** - Container and code scanning actions
- **GitLab CI** - Native CI component with Security Dashboard integration
- **Jenkins** - Plugin with QScanner and CICD Sensor backends
- **Azure DevOps** - Pipeline extension with work item creation

## View Documentation

View the live documentation at: **https://nelssec.github.io/qualys-docs/**

## Source Repositories

- [qualys-github](https://github.com/nelssec/qualys-github) - GitHub Actions
- [qualys-gitlab](https://github.com/nelssec/qualys-gitlab) - GitLab CI Component
- [qualys-jenkins](https://github.com/nelssec/qualys-jenkins) - Jenkins Plugin
- [qualys-ado](https://github.com/nelssec/qualys-ado) - Azure DevOps Extension

## Local Development

Open `index.html` in your browser to view locally.

## Structure

```
qualys-docs/
├── index.html               # Home page
├── assets/
│   ├── styles.css           # Documentation styles
│   └── script.js            # Navigation script
├── get_started/             # Getting started guides
├── concepts/                # Architecture and concepts
├── github/                  # GitHub Actions docs
├── gitlab/                  # GitLab CI docs
├── jenkins/                 # Jenkins plugin docs
└── azure-devops/            # Azure DevOps docs
```
