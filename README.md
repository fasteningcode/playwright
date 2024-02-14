# Playwright Guide

## Installation

| Use                                    | Script                                   |
| -------------------------------------- | ---------------------------------------- |
| Installation                           | `npm init playwright@latest`             |
| Runs the end-to-end tests              | `npx playwright test`                    |
| Starts the interactive UI mode.        | `npx playwright test --ui`               |
| trace on                               | `npx playwright test --trace on`         |
| Runs the tests only on Desktop Chrome. | `npx playwright test --project=chromium` |
| Runs the tests in a specific file.     | `npx playwright test example`            |
| Runs the tests in debug mode.          | `npx playwright test --debug`            |
| Auto generate tests with Codegen       | `npx playwright codegen`                 |
| Show Report                            | `npx playwright show-report`             |

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
