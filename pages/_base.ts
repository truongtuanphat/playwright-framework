import { expect, Locator, Page } from "@playwright/test";

export abstract class PageBase {
  abstract readonly PATH: string;
  abstract readonly TIMEOUT_SECONDS: number;
  abstract readonly PAGE_READY_ELEMENT: Locator;
  abstract readonly page: Page;

  async isLoaded() {
    await expect(this.PAGE_READY_ELEMENT).toBeVisible({
      timeout: this.TIMEOUT_SECONDS * 1000,
    });
  }

  async goto() {
    await this.page.goto(this.PATH, { timeout: this.TIMEOUT_SECONDS * 1000 });
    await this.isLoaded();
  }
}
