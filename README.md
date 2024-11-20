# Prediktive playwright

This project is an automated test suite using [Playwright](https://playwright.dev/) with the **Page Object Model (POM)** design pattern.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lucas-porto1/prediktive-playwright.git
   cd prediktive-playwright
   ```

2. **Install the dependencies:**

   ```
   npm install
   ```

3. **Install Playwright browsers:**

   ```
   npx playwright install
   ```

## Usage

### Running Tests

To run all tests in headless mode:
`npm run test`

To run tests with the UI visible:
`npm run test:ui`

## Project Structure

```plaintext
├── pages/
│   ├── DuckDuckGoPage.js
├── tests/
│   ├── duckDuckGo.spec.js
├── utils/
│   ├── helper.js
├── .gitignore
├── playwright.config.js
├── package.json
└── README.md
```

- tests/: Contains test files.
- pages/: Contains page classes following the POM pattern.
- utils/: Contains helper functions and utilities.
- playwright.config.js: Playwright configuration file.
