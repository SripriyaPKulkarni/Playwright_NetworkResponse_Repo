// @ts-check
import { test, expect,chromium } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Your Store');

  await page.waitForResponse(response => response.url().includes("https://ecommerce-playground.lambdatest.io") && response.status() === 200, {timeout: 60000});
});

test('network response wait test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Your Store');


const [request] = await Promise.all([
  page.waitForResponse(response => response.url().includes("https://ecommerce-playground.lambdatest.io") && response.status() === 200, {timeout: 60000}),
  page.locator("(//div[@class='flex-fill']//input)[1]").fill("HTC Touch HD"),
]);
});



