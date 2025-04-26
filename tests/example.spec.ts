import { test } from "@playwright/test";
import { LoginPage } from "../src/pages/login.page";
import { BotsPage } from "../src/pages/bots.page";
import { loadCredential } from "../utils/functions/credential";
import { ProjectPage } from "../src/pages/project.page";
import { assertSwitcherState } from "../utils/functions/switcher";

test("example test", async ({ context, page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(loadCredential("test"));

  const botsPage = new BotsPage(page);
  await botsPage.isLoaded();
  const pagePromise = context.waitForEvent("page");
  await botsPage.clickCard("Belle");

  const projectPage = new ProjectPage(await pagePromise);
  console.log(await projectPage.page.title());
  await projectPage.isLoaded();
  console.log(projectPage.getPath());
  await assertSwitcherState(projectPage.welcomeMessageSwitcher, "off");
});
