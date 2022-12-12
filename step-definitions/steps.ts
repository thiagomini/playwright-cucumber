import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Given("Bob opens {string}", async function (url: string) {
  await this.openUrl(url);
});

When("Bob clicks the 'Get Started' button", async function () {
  const getStarted = this.page.getByRole('link', { name: 'Get started' });
  await getStarted.click();
});

Then("Bob sees the 'Get Started' section", async function () {
  await expect(this.page).toHaveURL(/.*intro/);
});