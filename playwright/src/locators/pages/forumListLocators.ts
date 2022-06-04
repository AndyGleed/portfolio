import { Locator, Page } from 'playwright';
import { BasePage } from '../../../internals';

export class ForumListLocators extends BasePage {
  readonly categories: Locator;
  readonly btnPostThread: Locator;
  readonly categoryNodes: Locator;
  readonly nodeGeneral: Locator;
  readonly nodePolls: Locator;
  readonly nodeQuestions: Locator;

  private readonly selCategories = `.uix_categoryTitle`;
  private readonly selPostThread = `.button-text a:text-is("Post thread…")`;
  private readonly selCategoryNodes = `.node-title`;
  private readonly selNodeGeneral = `text='General Discussion'`;
  private readonly selNodePolls = `text='Testing Articles and Polls'`;
  private readonly selNodeQuestions = `text='Questions Only'`;

  constructor(page: Page) {
    super(page);
    this.categories = page.locator(this.selCategories);
    this.btnPostThread = page.locator(this.selPostThread);
    this.categoryNodes = page.locator(this.selCategoryNodes);
    this.nodeGeneral = page.locator(this.selNodeGeneral);
    this.nodePolls = page.locator(this.selNodePolls);
    this.nodeQuestions = page.locator(this.selNodeQuestions);
  }
}
