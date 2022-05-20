import { Locator, Page } from "@playwright/test";

export class MemberAccountNavLocators {
  readonly lnkMemberConversations: Locator;
  readonly lnkMemberAlerts: Locator;

  private readonly memberConversations = `a[aria-label='Inbox']`;
  private readonly memberAlerts = `a[aria-label='Alerts']`;

  constructor(page: Page) {
    this.lnkMemberConversations = page.locator(this.memberConversations);
    this.lnkMemberAlerts = page.locator(this.memberAlerts);
  }
}