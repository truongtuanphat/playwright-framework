import { Locator, Page } from "@playwright/test";
import { PageBase } from "./_base";
import { AccountCredential } from "../models/account-credentials";

export class LoginPage extends PageBase {
  readonly PATH = "/login";
  readonly TIMEOUT_SECONDS = 10;
  readonly PAGE_READY_ELEMENT: Locator;

  username: Locator;
  password: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator("#email");
    this.password = page.locator("#password");
    this.loginButton = page.locator("[type='submit']");
    this.PAGE_READY_ELEMENT = this.username;
  }

  async enterEmail(value: string) {
    await this.username.fill(value);
  }

  async enterPassword(value: string) {
    await this.password.fill(value);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(email: string, password: string): Promise<void>;
  async login(accountCredential: AccountCredential): Promise<void>;
  async login(
    emailOrAccountCredential: string | AccountCredential,
    password?: string,
  ): Promise<void> {
    const email =
      typeof emailOrAccountCredential === "string"
        ? emailOrAccountCredential
        : emailOrAccountCredential.email;
    const pass =
      typeof emailOrAccountCredential === "string"
        ? password!
        : emailOrAccountCredential.password;

    await this.enterEmail(email);
    await this.enterPassword(pass);
    await this.clickLoginButton();
  }
}
