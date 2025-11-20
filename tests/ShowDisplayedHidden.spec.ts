// in this file hidden display aleart mousehover topics are covered
// test fils will trigger parallel
// individual test case in the file will run sequentially
import {test, expect} from '@playwright/test';


test("pop up validations", async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("http://google.com");
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    page.on('dialog', dialog => dialog.accept()); // closing alert pop click on ok if want to click cancel then use dismiss
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover(); // handling hover 
    await page.getByText("Top").click(); // inside hover click on top dropdown option
    const framesPage = page.frameLocator("#courses-iframe"); // handling iframe
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textcheck = await framesPage.locator(".text h2").textContent(); //capturing text
    console.log(textcheck?.split("")[1]); //printing some particular text from entire text



});