"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwright = require("playwright");
class CustomWorld {
    page;
    async openUrl(url) {
        const browser = await playwright.chromium.launch({
            headless: false,
        });
        const context = await browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(url);
    }
}
(0, cucumber_1.setWorldConstructor)(CustomWorld);
