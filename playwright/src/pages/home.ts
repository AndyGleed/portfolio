import { Page } from '@playwright/test';
import { HomePageLocators as Locators } from '../locators/home';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  private readonly _locators: Locators;

  constructor(page: Page) {
    super(page);
    this._locators = new Locators(page);
  }

  /**
   * Give consumers access to locators
   *
   * @readonly
   * @type {Locators}
   * @memberof HomePage
   */
  get locators(): Locators {
    return this._locators;
  }

  async clickLogin() {
    await this.locators.lnkLogin.click();
  }

  async clickRegister() {
    await this.locators.lnkRegister.click();
  }
}
