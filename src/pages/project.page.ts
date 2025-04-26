import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class ProjectPage extends PageBase {
  readonly PATH: string; // Set it dynamically in a method
  readonly TIMEOUT_SECONDS = 15;
  readonly PAGE_READY_ELEMENT: Locator;

  welcomeMessageSwitcher: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeMessageSwitcher = page.locator("[id='switch::r3:']");
    this.PAGE_READY_ELEMENT = this.welcomeMessageSwitcher;
  }

  getPath(): string {
    return this.extractPathFromUrl();
  }

  private extractPathFromUrl(): string {
    const url = this.page.url();
    const urlObj = new URL(url);
    return urlObj.pathname;
  }
}
