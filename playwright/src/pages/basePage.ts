import { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly _page: Page;
  constructor(page: Page) {
    this._page = page;
  }

  async logout(userName: string) {
    const account: string = `span[class='p-navgroup-linkText']:has-text("${userName}")`;
    await this._page.locator(account).click();
  }
}
