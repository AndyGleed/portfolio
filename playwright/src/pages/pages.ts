import { Page } from '@playwright/test';
import { ForumList } from './forumList';
import { HomePage } from './home';
import { LoginPage } from './login';

export class Pages {
  private readonly _page: Page;
  private _loginPage!: LoginPage;
  private _homePage!: HomePage;
  private _forumList!: ForumList;

  constructor(page: Page) {
    this._page = page;
  }

  get home(): HomePage {
    if (this._homePage === undefined) {
      this._homePage = new HomePage(this._page);
    }
    return this._homePage;
  }

  get login(): LoginPage {
    if (this._loginPage === undefined) {
      this._loginPage = new LoginPage(this._page);
    }
    return this._loginPage;
  }

  get forumList(): ForumList {
    if (this._forumList === undefined) {
      this._forumList = new ForumList(this._page);
    }
    return this._forumList;
  }
}
