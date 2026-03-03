// script5 -  login place order = logoutimport { test, expect } from '@playwright/test';
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
   await page.locator('//*[@id="user-name"]').click();
  await page.locator('//*[@id="user-name"]').fill('standard_user');
  await page.locator('//*[@id="user-name"]').press('Tab');
  await page.locator('//*[@id="password"]').fill('secret_sauce');
  await page.locator('//*[@id="login-button"]').click();

  await page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('//*[@id="shopping_cart_container"]/a').click();

  await page.locator('//*[@id="checkout"]').click();
  await page.locator('//*[@id="first-name"]').click();
  await page.locator('//*[@id="first-name"]').fill('John');
  await page.locator('//*[@id="last-name"]').click();
  await page.locator('//*[@id="last-name"]').fill('Buyer');
  await page.locator('//*[@id="postal-code"]').click();
  await page.locator('//*[@id="postal-code"]').fill('711033');
  await page.locator('//*[@id="continue"]').click();
  await page.locator('//*[@id="finish"]').click();
  //verify success order message
  await expect(page.locator('//*[@id="checkout_complete_container"]/h2')).toHaveText("Thank you for your order!");
  await page.locator('//*[@id="back-to-products"]').click();
  await page.locator('//*[@id="react-burger-menu-btn"]').click();
  await page.locator('//*[@id="logout_sidebar_link"]').click();
});