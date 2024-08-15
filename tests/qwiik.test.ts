import {chromium, expect, test} from "@playwright/test"

test("login test demo",async() => {
 const browser = await chromium.launch({
  headless : false
 });
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://www.saucedemo.com/")
 await page.fill ("//*[@id='user-name']","standard_user")
 await page.fill ("//*[@id='password']","secret_sauce")
 await page.click ("//*[@id='login-button']");

 // Sort products by price (low to high)
 await page.selectOption('.product_sort_container', 'lohi');
 await page.click('.inventory_item:first-child .btn_inventory');
 await page.click('.shopping_cart_link');
 await page.click('#checkout');
 await page.fill('#first-name', 'User');
 await page.fill('#last-name', 'Test');
 await page.fill('#postal-code', '123');
 await page.click('#continue');
 await page.click('#finish');
 await page.waitForSelector('.complete-header');
 const checkoutComplete = await page.textContent('.complete-header');
 expect (checkoutComplete).toBe ('Thank you for your order!');
 console.log('Checkout completed successfully');
 await browser.close();
})
