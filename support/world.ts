import { setWorldConstructor } from "@cucumber/cucumber";
import * as playwright from 'playwright';

class CustomWorld {
  private page: playwright.Page

  async openUrl(url: string) {
    const browser = await playwright.chromium.launch({
      headless: true,
    });

    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto(url);
  }
}

setWorldConstructor(CustomWorld);