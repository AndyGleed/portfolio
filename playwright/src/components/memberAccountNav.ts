import { expect, Locator, Page } from '@playwright/test';
import { MemberAccountNavLocators as Locators } from '../locators/components/memberAccountNavLocators';
import { BasePage } from '../pages/basePage';

/**
 * Component class for logged in member account navigation
 */
export class MemberAccountNavigation extends BasePage {
  private _locators: Locators;

  constructor(page: Page) {
    super(page);
    this._locators = new Locators(page);
  }

  /**
   * Give consumers access to locators
   *
   * @readonly
   * @type {Locators}
   * @memberof MemberAccountNavigation
   */
  get locators(): Locators {
    return this._locators;
  }

  async verifyLoggedInUserName(expectedUserName: string) {
    const username: Locator = this._page.locator(`span:text-is("${expectedUserName}")`);
    expect(username).toHaveText(expectedUserName);
  }
}
