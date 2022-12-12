"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('homepage has title and links to intro page', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await (0, test_1.expect)(page).toHaveTitle(/Playwright/);
    // create a locator
    const getStarted = page.getByRole('link', { name: 'Get started' });
    // Expect an attribute "to be strictly equal" to the value.
    await (0, test_1.expect)(getStarted).toHaveAttribute('href', '/docs/intro');
    // Click the get started link.
    await getStarted.click();
    // Expects the URL to contain intro.
    await (0, test_1.expect)(page).toHaveURL(/.*intro/);
});
