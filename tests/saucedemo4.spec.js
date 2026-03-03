// script4 - do not enter cred and login -verify  errors 
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//*[@id="login-button"]').click();
  await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(" Epic sadface: Username is required");
 
  // enter only  username  - verify password validation message 
  await page.locator('//*[@id="user-name"]').click();
  await page.locator('//*[@id="user-name"]').fill('standard_user');
  await page.locator('//*[@id="login-button"]').click();
  await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText("Epic sadface: Password is required");


// clear username , enter only password and click login -verify username validation message 
  await page.locator('//*[@id="user-name"]').clear;
  await page.locator('//*[@id="user-name"]').press('Tab');
  await page.locator('//*[@id="password"]').fill('secret_sauce');
  await page.locator('//*[@id="login-button"]').click();
  await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText("Epic sadface: Username is required");
 
});