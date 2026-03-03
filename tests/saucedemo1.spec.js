

////*[@id="user-name"]

// script1- login - add one to cart logout
// script2 -login  - add 1 product  -continue shopping - add one more product to add logout
// script3  - remove product  from cart - logout
// script4 - do not enter cred and login -verify  errors 
// script5 - place order = logout

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//*[@id="user-name"]').click();
  await page.locator('//*[@id="user-name"]').fill('standard_user');
  await page.locator('//*[@id="user-name"]').press('Tab');
  await page.locator('//*[@id="password"]').fill('secret_sauce');
  await page.locator('//*[@id="login-button"]').click();
  await page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('//*[@id="shopping_cart_container"]/a').click();
  await page.locator('//*[@id="react-burger-menu-btn"]').click();
  await page.locator('//*[@id="logout_sidebar_link"]').click();
});