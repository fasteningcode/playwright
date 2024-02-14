import { test } from "@playwright/test";


test.describe('', () => {
    test('first test', async ({ page }) => {
        await page.goto("https://google.com");
    })
})
