import { Locator, Page } from "@playwright/test";

export class SearchLocators {

  readonly txtSearch: Locator;
  readonly cmbSearchWhere: Locator;
  readonly txtByMember: Locator;

  private readonly selSearch = `input[name='keywords']`;
  private readonly selSearchWhere = `select[name='constraints']`;
  private readonly selByMember = `input[name='c[users]']`;

  constructor(page: Page) {
    this.txtSearch = page.locator(this.selSearch);
    this.cmbSearchWhere = page.locator(this.selSearchWhere);
    this.txtByMember = page.locator(this.selByMember);
  }
}