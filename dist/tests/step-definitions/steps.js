"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Given)("Bob opens {string}", { timeout: 60 * 1000 }, async function (url) {
    await this.openUrl(url);
});
(0, cucumber_1.When)("Bob clicks the 'Get Started' button", async function () {
    const getStarted = this.page.getByRole('link', { name: 'Get started' });
    await getStarted.click();
});
(0, cucumber_1.Then)("Bob sees the 'Get Started' section", async function () {
    await (0, test_1.expect)(this.page).toHaveURL(/.*intro/);
});
