import { Page } from "@playwright/test";
import { NavBarLocators } from "../locators/components/navBarLoctors";
import { BasePage } from "../../internals";

export class NavBarComponent extends BasePage {
  private readonly _locators: NavBarLocators;

  constructor(page: Page) {
    super(page);
    this._locators = new NavBarLocators(page);
  }

  /**
   * Gives consumers access to the locators
   *
   * @readonly
   * @type {NavBarLocators}
   * @memberof NavBar
   */
  get locators(): NavBarLocators {
    return this._locators;
  }

  /**
   * Click 'Home' on the navigation bar
   */
  async clickHome() {
    await this.locators.home.click();
  }

  /**
   * Click 'Forums' on the navigation bar
   */
   async clickForums() {
    await this.locators.forums.click();
  }

  /**
   * Click 'Whats New' on the navigation bar
   */
   async clickWhatsNew() {
    await this.locators.whatsNew.click();
  }

  /**
   * Click 'Members' on the navigation bar
   */
   async clickMembers() {
    await this.locators.members.click();
  }

  /**
   * Click 'Blog' on the navigation bar
   */
   async clickBlog() {
    await this.locators.blog.click();
  }
}