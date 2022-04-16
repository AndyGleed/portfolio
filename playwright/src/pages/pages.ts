import { Page } from '@playwright/test';
import { HomePage } from './home';
import { LoginPage } from './login';

export class Pages {
  private readonly _page: Page;
  private _homePage: HomePage;
  private _loginPage: LoginPage;

  constructor(page: Page) {
    this._page = page;
  }

  get homePage(): HomePage {
    if (this._homePage === undefined) {
      this._homePage = new HomePage(this._page);
    }
    return this._homePage;
  }

  get loginPage(): LoginPage {
    if (this._loginPage === undefined) {
      this._loginPage = new LoginPage(this._page);
    }
    return this._loginPage;
  }
}
