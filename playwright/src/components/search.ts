import { expect, Page } from "@playwright/test";
import { BasePage } from "../../internals";
import { SearchLocators } from "../locators/components/searchLocators";

export class SearchComponent extends BasePage {
  private readonly _locators: SearchLocators;
  constructor(page: Page) {
    super(page);
    this._locators = new SearchLocators(page);
  }

  /**
   * Give consumers access to the locators
   *
   * @readonly
   * @type {SearchLocators}
   * @memberof SearchComponent
   */
  get locators(): SearchLocators {
    return this._locators;
  }

  /**
   * Perform a search
   * @param searchValue What to search for
   * @param where Where to search
   * @param byMember By which member.  Leave emtpy for all.
   */
  async search(searchValue: string, where: SearchWhere, byMember: string = '') {
    expect(searchValue.length !== 0).toBeTruthy();
    
    await this.locators.txtSearch.click();
    await this.locators.txtSearch.fill(searchValue);
    await this.locators.cmbSearchWhere.selectOption( { label: where.valueOf() });
    if (byMember !== '') {
      await this.locators.txtByMember.fill(byMember);
    }
  }
}

export enum SearchWhere {
  Everywhere = 'Everywhere',
  Threads = 'Threads',
  ThisForum = 'This forum'
}