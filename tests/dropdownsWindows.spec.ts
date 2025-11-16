import { test, expect } from '@playwright/test';

test('@Child windows handle and dropdown demo', async ({ browser }) => {
  
  // 🔹 Create new context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // 🔹 Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // 🔹 Static Dropdown
  const dropdown = page.locator('select.form-control'); // static <select> dropdown
  await dropdown.selectOption('consult'); // select by value
  console.log(await dropdown.inputValue()); // prints selected value -> 'consult'

  // 🔹 Locate elements
  const userName = page.locator('#username');
  const password = page.locator('#password');
  const documentLink = page.locator("[href*='documents-request']");

  // 🔹 Handle Child Window (New Page)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // waits for new tab/window
    documentLink.click() // triggers opening new page
  ]);

  // 🔹 Extract domain name from text on new page
  const text = await newPage.locator('.red').textContent(); // gets visible text
  console.log("Text content on new page: ", text);

  const arrayText = text?.split('@');
  const domain = arrayText?.[1].split(' ')[0];
  console.log("Extracted domain: ", domain);

  // 🔹 Fill the username field using the extracted domain
  await userName.fill(domain!);

  // 🔹 Difference between textContent() and inputValue()
  // textContent() - gets inner text from element like <p>, <div>
  // inputValue()  - gets value from <input> or <textarea>
  console.log('Username input value:', await userName.inputValue());

  // 🔹 Perform login to verify
  await password.fill('learning');
  await page.locator('#signInBtn').click();

  // Wait for some navigation or error message
  await page.waitForLoadState('networkidle');
  console.log('Login attempted.');

  // 🔹 Pause for debugging (optional)
  // await page.pause();

});
