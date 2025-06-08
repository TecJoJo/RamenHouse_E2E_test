# RamenHouse E2E Test Suite

This repository end-to-end (E2E) test automation for my personal project RamenHouse web application ([see this](https://github.com/TecJoJo/RamenHouse)) using Cypress

## Overview

This project is still under development

This project implements automated E2E tests for a RamenHouse web application, covering currently key user flows and admin functionality. Tests are written in TypeScript using the Cypress testing framework.

## Features

- **Authentication Testing**: Tests for login functionality with both valid and invalid credentials
- **Admin Functionality**:
  - Creating meals through UI and API
  - Editing meal details
  - Managing restaurant content
- **User Interface Testing**:
  - Menu filter functionality
  - Navigation elements validation

## Project Structure

```
├── cypress/
│   ├── downloads/
│   ├── e2e/                    # Test files
│   │   ├── createMeal.cy.ts    # UI-based meal creation tests
│   │   ├── createMealAPI.cy.ts # API-based meal creation tests
│   │   ├── editMeal.cy.ts      # Meal editing tests
│   │   ├── login.cy.ts         # Authentication tests
│   │   └── menuFilter.cy.ts    # Menu filtering tests
│   ├── fixtures/               # Test data and assets
│   │   └── imgs/
│   │       └── under_construction.jpg
│   ├── support/                # Support files (commands, plugins)
│   │   ├── commands.js
│   │   └── e2e.js
│   └── utils/                  # Utility functions
│       ├── constructFormData.ts
│       ├── login.ts
│       └── api/
│           ├── createMealViaAPI.ts
│           └── loginViaAPI.ts
├── cypress.dev.config.js       # Development environment configuration
├── cypress.prod.config.js      # Production environment configuration
├── package.json
└── tsconfig.json
```

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/TecJoJo/RamenHouse_E2E_test.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

The project supports two environments:

- **Development**: Uses local environment at `https://localhost:7066/`
- **Production**: Uses Azure-hosted environment at `https://ramenhouse-fcfudqg8eya5ehf5.swedencentral-01.azurewebsites.net/`

Environment-specific configurations are managed in:

- `cypress.dev.config.js` (Development)
- `cypress.prod.config.js` (Production)

## Running Tests

### Development Environment

```
npm run open
```

### Production Environment

```
npm run open:prod
```

## Test Coverage

The test suite covers:

1. **Authentication**

   - Login with valid credentials
   - Login with invalid credentials

2. **Meal Management**

   - Creating meals via UI
   - Creating meals via API
   - Editing meal details

3. **User Interface**
   - Menu filtering

## Utilities

The project includes several utility functions:

- `loginViaAPI.ts`: Handles authentication via API (including CSRF token handling)
- `createMealViaAPI.ts`: Creates meal entries through API calls
- `constructFormData.ts`: Helps with form data construction for API requests
- `login.ts`: Handles UI-based login

## Author

- **Yao Lu**

## Repository

[GitHub Repository](https://github.com/TecJoJo/RamenHouse_E2E_test)
