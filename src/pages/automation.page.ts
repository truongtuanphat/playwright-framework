import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class AutomationPage extends PageBase {
  readonly PATH = "/automation";
  readonly TIMEOUT_SECONDS = 5;
  readonly PAGE_READY_ELEMENT: Locator;

  bigPageUrl: Locator;
  fakeLandingPageUrl: Locator;
  fakePricingPageUrl: Locator;
  fillOutFormsUrl: Locator;
  learnHowToUrl: Locator;
  loginAutomationUrl: Locator;
  interactionsUrl: Locator;

  constructor(page: Page) {
    super(page);
    this.bigPageUrl = page.getByText("Big page with many elements");
    this.fakeLandingPageUrl = page.getByText("Fake Landing Page");
    this.fakePricingPageUrl = page.getByText("Fake Pricing Page");
    this.fillOutFormsUrl = page.getByText("Fill out forms");
    this.learnHowToUrl = page.getByText(
      "Learn how to automate an application that evolves over time",
    );
    this.loginAutomationUrl = page.getByText("Login automation");
    this.interactionsUrl = page.getByText("Interactions with simple elements");
    this.PAGE_READY_ELEMENT = this.bigPageUrl;
  }

  async clickBigPageUrl() {
    await this.bigPageUrl.click();
  }
}
