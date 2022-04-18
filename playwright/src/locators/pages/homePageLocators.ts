import { Locator, Page } from '@playwright/test';

export class HomePageLocators {
  readonly lnkLogin: Locator;
  readonly lnkRegister: Locator;

  private readonly login = `span:has-text('Log in')`;
  private readonly register = `span:has-text('Register)`;

  constructor(page: Page) {
    this.lnkLogin = page.locator(this.login);
    this.lnkRegister = page.locator(this.register);
  }
}
