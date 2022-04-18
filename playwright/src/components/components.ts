import { Page } from "@playwright/test";
import { NavBarComponent } from "./navbar";
import { SearchComponent } from "./search";

export class Components {
  private readonly _page: Page;
  private _navBar: NavBarComponent;
  private _search: SearchComponent;

  constructor(page: Page) {
    this._page = page;
  }

  get navBar(): NavBarComponent {
    if (this._navBar === undefined) {
      this._navBar = new NavBarComponent(this._page);
    }
    return this._navBar;
  }

  get search(): SearchComponent {
    if (this._search === undefined) {
      this._search = new SearchComponent(this._page);
    }
    return this._search;
  }
}