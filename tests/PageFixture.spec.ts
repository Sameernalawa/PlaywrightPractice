import { test, chromium } from '@playwright/test';

  test('launch browser', async () => {

    const websiteToTest = "https://www.saucedemo.com/v1/";

    // Launch browser
    const browserObj = await chromium.launch();

    // Launch contexts (like two separate users)
    const userContext1 = await browserObj.newContext();
    const userContext2 = await browserObj.newContext();

    // Create pages for each user
    const loginPageForUser1 = await userContext1.newPage();
    const loginPageForUser2 = await userContext2.newPage();

    // Perform actions for user 1
    await loginPageForUser1.goto(websiteToTest);

    const userNameLocator1 = loginPageForUser1.locator("#user-name");
    const passwordLocator1 = loginPageForUser1.locator("#password");
    const loginButton1 = loginPageForUser1.locator("#login-button");

    await userNameLocator1.fill("sameer");
    await passwordLocator1.fill("123456");
    await loginButton1.click();

    // Pause for debugging
    await loginPageForUser1.pause();

    await loginPageForUser2.goto(websiteToTest);

    const userNameLocator2 = loginPageForUser2.locator("#user-name");
    const passwordLocator2 = loginPageForUser2.locator("#password");
    const loginButton2 = loginPageForUser2.locator("#login-button");

    await userNameLocator2.fill("naveen");
    await passwordLocator2.fill("1234");
    await loginButton2.click();

    // Pause for debugging
    await loginPageForUser1.pause();
  });

