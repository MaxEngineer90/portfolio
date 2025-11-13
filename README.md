# Maxmilian Lamm Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

## Database Schema

```mermaid
erDiagram
    COMPANY {
        BIGINT id PK
        VARCHAR name
    }
    DEPARTMENT {
        BIGINT id PK
        VARCHAR name
        BIGINT company_id FK
    }
    ADDRESS {
        BIGINT id PK
        VARCHAR street
        VARCHAR city
        VARCHAR zip
    }
    EMPLOYEE {
        BIGINT id PK
        VARCHAR first_name
        VARCHAR last_name
        BIGINT department_id FK
        BIGINT address_id FK
    }
    ROLE {
        BIGINT id PK
        VARCHAR name
    }
    EMPLOYEE_ROLE {
        BIGINT employee_id PK,FK
        BIGINT role_id PK,FK
    }

    COMPANY ||--o{ DEPARTMENT : "company_id"
    DEPARTMENT ||--o{ EMPLOYEE : "department_id"
    ADDRESS ||--o{ EMPLOYEE : "address_id"
    EMPLOYEE }o--o{ ROLE : "employee_role"
```

## Development server

To start a local development server, run:

```bash
ng serve
```
