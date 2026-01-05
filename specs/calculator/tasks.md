# Tasks: Mixed Arithmetic Calculator

**Input**: Design documents from `/specs/calculator/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Tests are MANDATORY as per the project constitution. They must be written and seen to fail before implementation begins.

## Phase 1: Setup (Shared Infrastructure)

- [ ] T001 Create project structure: `src/`, `tests/`, `data/`
- [ ] T002 Initialize npm project and install Jest for testing
- [ ] T003 Configure Jest for ESM support (vanilla JS)

## Phase 2: Foundational (Arithmetic Logic - TDD)

**Goal**: Implement the core math engine with full TDD.

- [ ] T004 [TDD] Write failing test for basic addition in `tests/parser.test.js`
- [ ] T005 Implement addition in `src/js/parser.js`
- [ ] T006 [TDD] Write failing test for mixed operations (precedence) in `tests/parser.test.js`
- [ ] T007 Implement precedence logic in `src/js/parser.js`
- [ ] T008 [TDD] Write failing test for parentheses in `tests/parser.test.js`
- [ ] T009 Implement parentheses support in `src/js/parser.js`
- [ ] T010 [TDD] Write failing test for error handling (division by zero)

## Phase 3: Storage (CSV Metadata)

- [ ] T011 [TDD] Write test for CSV formatting in `tests/storage.test.js`
- [ ] T012 Implement CSV write logic in `src/js/storage.js`
- [ ] T013 Implement CSV read logic for history retrieval

## Phase 4: UI & Integration

- [ ] T014 Create `index.html` with calculator grid and display
- [ ] T015 Create `src/css/style.css` for basic styling
- [ ] T016 Implement `src/js/app.js` to connect UI buttons to `parser.js`
- [ ] T017 Integrate `storage.js` to save history on every "=" press

## Phase 5: Polish

- [ ] T018 Add responsive styling for mobile browsers
- [ ] T019 Final audit against Constitution (Simplicity check)
