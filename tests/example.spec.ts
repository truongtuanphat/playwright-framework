import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

test("has title", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.enterEmail("test");
});
