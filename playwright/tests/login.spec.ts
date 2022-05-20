import test, { expect } from '@playwright/test';
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
    await pages.homePage.clickLogin();
    await pages.loginPage.login(base64decode(Users.getJoe().email), base64decode(Users.getJoe().password));
    await comps.memberAccountNavigation.verifyLoggedInUserName(base64decode(Users.getJoe().name));
    await pages.homePage.logout(base64decode(Users.getJoe().name));
  });

  test('login as John', async ({ page }) => {
    const pages: Pages = new Pages(page);
    await pages.homePage.clickLogin();
    await pages.loginPage.login(base64decode(Users.getJohn().email), base64decode(Users.getJohn().password));
    await comps.memberAccountNavigation.verifyLoggedInUserName(base64decode(Users.getJohn().name));
    await pages.homePage.logout(base64decode(Users.getJohn().name));
  });
});
