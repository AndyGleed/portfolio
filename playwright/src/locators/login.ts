import { Locator, Page } from '@playwright/test';

export class LoginPageLocators {
  readonly txtUserName: Locator;
  readonly txtPassword: Locator;
  readonly chkRememberMe: Locator;
  readonly btnLogin: Locator;

  private readonly selUserName = `input[name=login]`;
  private readonly selPassword = `input[name=password]`;
  private readonly selRememberMe = `input[name=remember]:left-of(:text("Stay logged in"))`;
  private readonly selLogin = `button[type=submit] >> text='Log in'`;

  constructor(page: Page) {
    this.txtUserName = page.locator(this.selUserName);
    this.txtPassword = page.locator(this.selPassword);
    this.chkRememberMe = page.locator(this.selRememberMe);
    this.btnLogin = page.locator(this.selLogin);
  }
}
