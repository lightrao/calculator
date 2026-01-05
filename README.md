# Mixed Arithmetic Calculator

A simple, readable, and robust calculator built with vanilla HTML, CSS, and JavaScript. This project follows strict Test-First Development (TDD) principles and provides a modular architecture for mathematical expression evaluation.

## Features

- **Mixed Operations**: Handles addition, subtraction, multiplication, and division.
- **Mathematical Precedence**: Respects PEMDAS/BODMAS rules (multiplication/division before addition/subtraction).
- **Parentheses Support**: Allows grouping of expressions to override default precedence.
- **CSV History Persistence**: Logs calculation history in CSV format.
- **Zero Dependencies**: Built with pure vanilla technologies (no frameworks).
- **TDD Verified**: 100% path coverage for the core parsing engine.

## Principles & Governance

This project is governed by the [Project Constitution](.specify/memory/constitution.md), which enforces:
1. **Simplicity & Readability**: Code must be accessible and maintainable.
2. **Test-First Development**: All logic must be verified by tests before implementation.
3. **Vanilla Stack**: Strictly no frameworks like React or Vue.

## Installation

1. Clone the repository.
2. Install development dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application
Simply open `index.html` in your web browser.

### Running Tests
The project uses Jest for unit testing. To run the test suite:
   ```bash
   npm test
   ```

## Project Structure

- `src/js/parser.js`: Core arithmetic evaluation logic.
- `src/js/storage.js`: CSV formatting and persistence logic.
- `src/js/app.js`: UI interaction and integration.
- `tests/`: Comprehensive test suite for all modules.
- `.specify/`: Governance, specifications, and implementation plans.

## License
ISC
