# BHRTestPlan
# README File for Playwright Test Automation Project

## Project Overview

This repository contains automated tests for a web application implemented using [Playwright](https://playwright.dev/) test automation framework. The tests focus on the functionality related to employee management within the application.

## Project Structure

The project is organized as follows:

- **Test Automation Scripts**: The `tests` directory contains Playwright test scripts responsible for validating different aspects of the application. The primary functionalities covered include user login, dashboard verification, navigation to the employee hub, and employee addition.

  - `login.test.js`: Covers user login functionality.
  - `dashboard.test.js`: Validates user login and dashboard launch.
  - `employeeHub.test.js`: Verifies the employee hub functionality.
  - `addEmployee.test.js`: Tests the addition of employees.

- **Page Objects**: The `Pages` directory includes page objects that encapsulate the interaction with different pages of the application.

  - `LoginPage.js`: Manages interactions related to the login page.
  - `Dashboard.js`: Handles interactions with the dashboard.
  - `EmployeesHub.js`: Manages employee-related interactions.

- **Data Files**: The `Data` directory contains JSON files storing test data.

  - `loginData.json`: Contains user login details.
  - `employees.json`: Includes data for adding employees.

- **Playwright Configuration**: The project utilizes a Playwright configuration file (`playwright.config.js`) to set up test parameters.

- **GitHub Actions Workflow**: The `.github/workflows/playwright-tests.yml` file defines a GitHub Actions workflow for running the Playwright tests automatically on each push and pull request.

## Running the Tests Locally

To run the tests locally, follow these steps:

1. Ensure you have Node.js installed (version 18 or higher).

2. Install project dependencies by running:

    ```bash
    npm install
    ```

3. Install Playwright browsers with dependencies:

    ```bash
    npx playwright install --with-deps
    ```

4. Execute the tests:

    ```bash
    npx playwright test
    ```

## Continuous Integration (CI)

The project is configured to run on GitHub Actions for continuous integration. The workflow includes steps to install dependencies, set up Playwright browsers, and execute the tests. Test reports are uploaded as artifacts for further analysis.

## Test Scenarios Covered

1. **User Login**: Validates the login process and dashboard launch.

2. **Employee Hub**: Verifies the ability to navigate to the employee hub.

3. **Add Employee**: Tests the functionality to add employees using data from the `employees.json` file.

## Future Enhancements

1. **Expand Test Coverage**: Consider expanding test coverage to include additional critical functionalities.

2. **Parameterization**: Implement parameterization to enhance test data flexibility.

3. **Logging and Reporting**: Integrate comprehensive logging and reporting mechanisms for better analysis.

Feel free to explore and contribute to the project. For any questions or issues, please refer to the project's GitHub repository.
