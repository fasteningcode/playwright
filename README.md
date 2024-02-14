# Playwright Guide

## Installation

| Use                                    | Script                                         |
| -------------------------------------- | ---------------------------------------------- |
| Installation                           | `npm init playwright@latest`                   |
| Runs the end-to-end tests              | `npx playwright test`                          |
| Starts the interactive UI mode.        | `npx playwright test --ui`                     |
| trace on                               | `npx playwright test --trace on`               |
| Runs the tests only on Desktop Chrome. | `npx playwright test --project=chromium`       |
| Runs the tests in a specific file.     | `npx playwright test example`                  |
| Runs the tests in debug mode.          | `npx playwright test --debug`                  |
| Auto generate tests with Codegen       | `npx playwright codegen`                       |
| Show Report                            | `npx playwright show-report`                   |
| Open Playwright Inspector              | `npx playwright open`                          |
| Generate Allure reporting              | `npx allure generate ./allure-results --clean` |
| Open Allure report                     | `npx allure open ./allure-report/`             |
| To Run tests in local                  | `TEST_ENV=local npx playwright test`           |
| To Run a specfic test                  | `npx playwright test -g "test name"`           |

Running tests using env variable : https://medium.com/@irfan17sat/configuring-multiple-environments-in-playwright-67e402c1c627

Automation Testing Principles : https://testingconsultancy-my.sharepoint.com/:w:/g/personal/aadhith_bose_ttcglobal_com/EW6TZYI_XhVLu2b1MFb-Mk4BInbKTyKlBwifFnGdh-RmPQ?e=sNZvUW

## Page Objects

| Name                | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| By Tag Name         | `page.locator('input')`                                     |
| By ID               | `page.locator('#id')`                                       |
| By Class Value      | `page.locator('.class value')`                              |
| By Attribute        | `page.locator('[placeholder="Email"]')`                     |
| By Full Class Value | `page.locator('[class="full static shape rectangle"]')`     |
| Combine             | `page.locator('#id').locator(.class)`                       |
| Combine             | `page.locator('#id').getByRole('button, {name:"Sign in"}')` |
| By Xpath            | `page.locator('//xpath')`                                   |
| By Partial text     | `page.locator(':text("Email")')`                            |
| By Exact text       | `page.locator(':text-is("Email here")')`                    |

===============
Notes
==========================================================

Assertion

await expect(locator).not.toBeVisible();
or await expect(locator).toBeHidden();

===========================================================

To update screenshots
npx playwright test --update-snapshots

To run in UI mode
npx playwright test --ui
Retries
npx playwright test --update-snapshots
or
const config: PlaywrightTestConfig = {
retries: 3,
};

To Show Report
npx playwright show-report

============================================================
Getting Started
Initialize playwright
npm init playwright@latest

Add a test file
mkdir tests && touch tests/search.test.ts

Head / Headless mode
npx playwright test --headed or add in config file

To Skip a particular tests
Add in the test file
test.skip(browserName === 'webkit', 'Skipped in Safari, due to known issue');
