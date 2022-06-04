import { test, expect } from '@playwright/test';
import { base64decode } from 'nodejs-base64';
import { Components } from '../src/components/components';
import { Users } from '../src/data/users/users';
import { Pages } from '../src/pages/pages';

test.describe('Login Tests', () => {
  let pages: Pages;
  let comps: Components;

  test.beforeEach(async ({ page }) => {
    pages = new Pages(page);
    comps = new Components(page);
    await page.goto('');
  });

  test('login as Joe', async ({ page }) => {
    await pages.home.clickLogin();
    await pages.login.login(base64decode(Users.joe.email), base64decode(Users.joe.password));
    await comps.memberAccountNavigation.verifyLoggedInUserName(base64decode(Users.joe.name));
    expect(await pages.forumList.locators.categories.count()).toEqual(1);
    expect(await pages.forumList.locators.categories.nth(0).textContent()).toEqual('Playwright Automation Testing');
    await pages.home.logout(base64decode(Users.joe.name));
  });

  test.skip('login as John', async ({ page }) => {
    const pages: Pages = new Pages(page);
    await pages.home.clickLogin();
    await pages.login.login(base64decode(Users.john.email), base64decode(Users.john.password));
    await comps.memberAccountNavigation.verifyLoggedInUserName(base64decode(Users.john.name));
    await pages.home.logout(base64decode(Users.john.name));
  });
});
