import { Page } from '@playwright/test';
import { LoginPageLocators as Locators } from '../locators/pages/loginPageLocators';
import { BasePage } from '../../internals';

export class LoginPage extends BasePage {
  private readonly _locators: Locators;

  constructor(page: Page) {
    super(page);
    this._locators = new Locators(page);
  }

  /**
   * Give consumers access to locators for custom 'expect' calls etc
   *
   * @readonly
   * @type {Locators}
   * @memberof Login
   */
  get locators(): Locators {
    return this._locators;
  }

  async login(username: string, password: string) {
    await this.setUsername(username);
    await this.setPassword(password);
    await this.clickRememberMe();
    await Promise.all([this._page.waitForNavigation(), this.clickLogin()]);
  }

  async setUsername(username: string) {
    await this.locators.txtUserName.fill(username);
  }

  async setPassword(password: string) {
    await this.locators.txtPassword.fill(password);
  }

  async clickLogin() {
    await this.locators.btnLogin.click();
  }

  async clickRememberMe() {
    await this.locators.chkRememberMe.setChecked(true);
  }
}
