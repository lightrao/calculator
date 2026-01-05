<!--
Sync Impact Report:
- Version change: 1.0.0 -> 1.1.0
- List of modified principles:
  - Added Technology Stack (Vanilla HTML/CSS/JS)
  - Added Data Storage (CSV files)
- Added sections: None
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md (✅ updated: tech stack alignment)
  - .specify/templates/spec-template.md (✅ aligned)
  - .specify/templates/tasks-template.md (✅ aligned)
- Follow-up TODOs: None.
-->

# Calculator Constitution

## Core Principles

### I. Simplicity & Readability
Code MUST be simple, concise, and easy to read. Complexity must be justified. We prefer readability over micro-optimizations. 
Rationale: To ensure the codebase remains maintainable and accessible to all contributors.

### II. Test-First Development (NON-NEGOTIABLE)
Test-Driven Development (TDD) is mandatory. Tests MUST be written and seen to fail before any implementation logic is added.
Rationale: To guarantee correctness and provide a safety net for future refactoring.

### III. Modular Design
Logic MUST be encapsulated in small, single-responsibility modules. Avoid global state and tight coupling between arithmetic logic and interface logic.
Rationale: To enable independent testing and reuse of calculator components.

## Development Standards

### Technology Stack
The project MUST use vanilla HTML, CSS, and JavaScript as much as possible. External frameworks should be avoided unless absolutely necessary and justified.

### Data Storage
Metadata and persistent state MUST be stored in local CSV files. JSON or other formats should be avoided for primary storage to maintain simplicity and accessibility.

### API & Interface
Calculator functions MUST have clear, descriptive names. Input validation is mandatory for all public methods to prevent undefined behavior.

## Governance
This constitution is the supreme authority for development practices in the Calculator project.

### Amendments
Any changes to these principles require a version bump and a Sync Impact Report.

### Compliance
All implementation plans MUST include a "Constitution Check" phase. Pull Requests (PRs) that violate core principles will be rejected.

**Version**: 1.1.0 | **Ratified**: 2026-01-05 | **Last Amended**: 2026-01-05
