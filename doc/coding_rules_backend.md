# Backend Coding Rules & Standards

## Overview
This document outlines the coding standards, best practices, and architectural principles for developing backend components in the Artifex project. All code must adhere to Clean Code principles and SOLID design patterns.

---

## 1. Naming Conventions
- Use **PascalCase** for classes, interfaces, and types
- Use **snake_case** for variables, functions, and method names
- Constants should be in **UPPER_SNAKE_CASE**
- Avoid abbreviations unless they're standard (e.g., DB, HTTP)
- File names should match the class name (e.g., `user_service.ts`)

---

## 2. Code Structure & Organization
### Folder Structure
```
prisma/
├── generated
  ├── client
  ├── enums
  ├── interfaces
  ├── models
  ├── repositories
  ├── services
  ├── index.ts
├── migrations
├── schema.prisma
src/
├── controllers/        # Request handlers
├── services/           # Business logic
├── repositories/       # Data access layer
├── models/             # Database schemas
├── utils/              # Helper functions
├── config/             # Configuration files
└── errors/             # Custom error classes
```

### Core Principles
- **Single Responsibility Principle**: Each class should have one reason to change
- **Repository Pattern**: All database operations should be encapsulated in repositories
- **Dependency Injection**: Use constructor injection for dependencies
- **Separation of Concerns**: Keep controllers, services, and repositories distinct

---

## 3. SOLID Principles Implementation
### Single Responsibility Principle (SRP)
```typescript
// ❌ Bad example
class UserService {
  constructor(private db: Database) {}
  
  getUser(id: string): User {
    // Business logic...
  }
  
  saveUser(user: User): void {
    // Data persistence...
  }
}
```

```typescript
// ✅ Good example
class UserService {
  constructor(private userRepository: UserRepository) {}
  
  async getUser(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }
}
```

### Open/Closed Principle (OCP)
Use interfaces for pluggable components:
```typescript
interface PaymentGateway {
  processPayment(amount: number): boolean;
}

class StripeGateway implements PaymentGateway {
  // Implementation...
}
```

---

## 4. Error Handling
- Use custom error classes with status codes:
```typescript
class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}
```
- Always use try/catch blocks for async operations
- Log errors using a centralized logging system
- Return appropriate HTTP status codes (404, 500, etc.)

---

## 5. Security Best Practices
- Validate and sanitize all user inputs
- Use prepared statements for SQL queries
- Set secure HTTP headers (Content-Security-Policy, X-Content-Type-Options)
- Implement rate limiting for API endpoints
- Hash passwords using bcrypt or argon2
- Use JWT for authentication with token validation

---

## 6. Testing Requirements
- Write unit tests for all business logic
- Use Jest for testing framework
- Mock dependencies in tests
- Ensure 100% code coverage for core functionality
- Write integration tests for API endpoints

---

## 7. Dependency Management
- Keep dependencies up to date using semantic versioning
- Avoid deprecated packages
- Use package managers (npm/yarn) with lock files
- Document dependency versions in `package.json`

---

## 8. Comments & Documentation
- Comment complex logic, not obvious code
- Use JSDoc for function parameters and return types
- Document API endpoints in OpenAPI format
- Avoid redundant comments that describe code

---

## 9. Version Control Practices
- Write clear, descriptive commit messages
- Use feature branches for new functionality
- Squash commits before merging
- Follow Git flow (develop/main/feature branches)
- Use pre-commit hooks for linting

---

## 10. Code Review Guidelines
- Check for style consistency with ESLint
- Verify adherence to SOLID principles
- Ensure security vulnerabilities are addressed
- Confirm error handling is comprehensive
- Validate performance considerations

```bash
# Run code quality checks before merging
bun run lint
bun test
```

---

## Project Structure Example
```
prisma/
  ├── generated
    ├── client
    ├── enums
    ├── interfaces
    ├── models/
        ├── userModel.ts
    ├── repositories
        ├── userRepository.ts
    ├── services
        ├── userService.ts
    ├── index.ts
src/
├── controllers/
│   └── userController.ts
├── services/
│   └── userService.ts
```

This structure ensures separation of concerns while maintaining code reusability and testability.
