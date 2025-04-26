import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";

export class BotsPage extends PageBase {
  readonly PATH = "/";
  readonly TIMEOUT_SECONDS = 15;
  readonly PAGE_READY_ELEMENT: Locator;

  cards: Locator;

  constructor(page: Page) {
    super(page);
    this.cards = page.locator('[class*="cardContainer"]');
    this.PAGE_READY_ELEMENT = this.cards.first();
  }

  clickCard(cardName: string) {
    return this.cards
      .locator(`div[class*='item_content']`)
      .filter({ hasText: cardName })
      .first()
      .click();
  }
}
