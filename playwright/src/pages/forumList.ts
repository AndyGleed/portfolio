import { Page } from 'playwright';
import { BasePage } from '../../internals';
import { ForumListLocators as Locators } from '../locators/pages/forumListLocators';

/**
 * PO class for Forum List
 */
export class ForumList extends BasePage {
  private readonly _locators: Locators;
  /**
   * Initialize class
   * @param page
   */
  constructor(page: Page) {
    super(page);
    this._locators = new Locators(page);
  }

  /**
   * Give consumers access to page locators
   *
   * @readonly
   * @type {Locators}
   * @memberof ForumList
   */
  get locators(): Locators {
    return this._locators;
  }
}
