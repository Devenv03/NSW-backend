# Cucumber-Axios-Chai Testing Framework

This framework is using **Cucumber** for writing test scenarios in a behavior-driven development (BDD) style, **Axios** for making HTTP requests and **Chai** for checking expected results.


# Project Structure

1. features folder contains `feature.file`, step_definitions folder and support folder. features file contains the scenario that describes the behavior of test cases (`media_api.feature`)

2. step_definitions folder contains steps.js(`media_api_steps.js`) file which implements the logic for each step defined in the feature file.

3. support folder contains correspoding .js(`media_api.js`) file which contains methods and code used to implement logic from steps.js.

4. data folder contains api_endpoints.js file which contains baseURL.

5. reports folder generates .json report file after each execution. Details on how to generate html report can be found below with installtion guide. 

6. cucumber.js file provides configuration for cucumber test execution.

7. test_runner.js file is used to configure and run Cucumber tests.


# Installation

*Pre-requisites*
- NodeJs v21.6 or later
- npm v10.8

*Steps*
- Clone the repository:
```bash
git clone https://github.com/Devenv03/NSW-backend.git
```

- Navigate to the project directory:
```bash
cd nsw-api-testing
```

- Install required dependencies: Please check package.json for further details.
```bash
npm install
```

- Run the test/s: tags are used in feature file. These tags can be added to cucumber.js file to run tests
```bash
npm test
```

- To generate html report after a test execution. This generates a .html report file, which can be opened in a browser.
```bash
node test_runner.js
```

# External Dependencies external
- Chai version 4.5.0 is used as latest version gives CommonJS error.
