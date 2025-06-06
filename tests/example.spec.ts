import { test } from "@playwright/test";
import { AutomationPage } from "../src/pages/automation.page";
import { ComplicatedPage } from "../src/pages/complicated.page";

test("example test", async ({ page }) => {
  const loginPage = new AutomationPage(page);
  await loginPage.goto();
  await loginPage.clickBigPageUrl();

  const complicatedPage = new ComplicatedPage(page);
  await complicatedPage.isLoaded();
});
