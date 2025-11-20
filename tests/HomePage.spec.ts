import {test,expect} from '@playwright/test';

test("Open Home Page And Verify Title", async({page})=>{
    await page.goto("https://www.plus.fifa.com/en/?gl=in");
    await expect (page).toHaveTitle('FIFA+');

})

test("Verify log is visible",async ({page}) =>{
    await page.goto("https://www.plus.fifa.com/en/?gl=in");
    const logo = await page.locator(".header-logo")
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('alt','Just Chilling');


})

test("Verify navigation links",async ({page}) =>{
    
    const expected_Links = ["HOME","AIFF","AFC","FIFA EVENTS",
   "LIVE",
   "ORIGINALS",
   "FIFA ARCHIVE"];
    await page.goto("https://www.plus.fifa.com/en/?gl=in");
    const nav_links = page.locator("div.sc-kOHTFB.SbvPG a");
    //await page.waitForSelector("div.sc-kOHTFB.SbvPG a"); this also we can use for wait also second method below
    await expect(nav_links.first()).toBeVisible();
    console.log(await nav_links.allInnerTexts());
    expect(await nav_links.allInnerTexts()).toEqual(expected_Links)
    


})



  
