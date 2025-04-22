import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class LoginPage extends PageBase {
  readonly PATH = "/";
  readonly TIMEOUT_SECONDS = 10;
  readonly PAGE_READY_ELEMENT: Locator;
  readonly page: Page;

  readonly username: Locator;

  constructor(page: Page) {
    super();
    this.page = page;
    this.username = page.locator("#username");
    this.PAGE_READY_ELEMENT = this.username;
  }

  async enterEmail(value: string) {
    await this.username.fill(value);
  }
}
