import { Page } from '@playwright/test';
import { MemberAccountNavigation } from './memberAccountNav';
import { NavBarComponent } from './navbar';
import { SearchComponent } from './search';

export class Components {
  private readonly _page: Page;
  private _navBar!: NavBarComponent;
  private _memberAccountNavigation!: MemberAccountNavigation;
  private _search!: SearchComponent;

  constructor(page: Page) {
    this._page = page;
  }

  /**
   * Gets access to the navigation bar
   *
   * @readonly
   * @type {NavBarComponent}
   * @memberof Components
   */
  get navBar(): NavBarComponent {
    if (this._navBar === undefined) {
      this._navBar = new NavBarComponent(this._page);
    }
    return this._navBar;
  }

  /**
   * Gets access to the member account navigation component
   *
   * @readonly
   * @type {MemberAccountNavigation}
   * @memberof Components
   */
  get memberAccountNavigation(): MemberAccountNavigation {
    if (this._memberAccountNavigation === undefined) {
      this._memberAccountNavigation = new MemberAccountNavigation(this._page);
    }
    return this._memberAccountNavigation;
  }

  get search(): SearchComponent {
    if (this._search === undefined) {
      this._search = new SearchComponent(this._page);
    }
    return this._search;
  }
}
