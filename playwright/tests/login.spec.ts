import test from '@playwright/test';
import { base64decode } from 'nodejs-base64';
import { Users } from '../src/data/users/users';
import { Pages } from '../src/pages/pages';

test('login as Joe', async ({ page }) => {
  const pages: Pages = new Pages(page);
  await page.goto('');
  await pages.homePage.clickLogin();
  await pages.loginPage.login(base64decode(Users.getJoe().email), base64decode(Users.getJoe().password));
  
  await pages.homePage.logout(base64decode(Users.getJoe().name));
});

test('login as John', async ({ page }) => {
  const pages: Pages = new Pages(page);
  await page.goto('');
  await pages.homePage.clickLogin();
  await pages.loginPage.login(base64decode(Users.getJohn().email), base64decode(Users.getJohn().password));
  
  await pages.homePage.logout(base64decode(Users.getJohn().name));
});
