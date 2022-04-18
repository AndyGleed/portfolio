import { Locator, Page } from "@playwright/test";

export class NavBarLocators {
  readonly home: Locator;
  readonly forums: Locator;
  readonly whatsNew: Locator;
  readonly members: Locator;
  readonly blog: Locator;

  private readonly selHome = `a[data-nav-id='home']`
  private readonly selForums = `a[data-nav-id='forums']`
  private readonly selWhatsNew = `a[data-nav-id='whatsNew']`
  private readonly selMembers = `a[data-nav-id='members']`
  private readonly selBlog = `a[data-nav-id='blog']`

  constructor(page: Page) {
    this.home = page.locator(this.selHome);
    this.forums = page.locator(this.selForums);
    this.whatsNew = page.locator(this.selWhatsNew);
    this.members = page.locator(this.selMembers);
    this.blog = page.locator(this.selBlog);
  }
}