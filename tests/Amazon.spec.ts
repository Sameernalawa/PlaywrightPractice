import {test,expect} from '@playwright/test';



test("amazon login to logout", async({page})=> {

await page.goto("https://www.amazon.in/?");
await page.locator("#twotabsearchtextbox").fill("redmi 13 pro");
await page.locator("[type='submit']").click();
const productLocator = page.getByText("Redmi 13 5G Prime Edition, Hawaiian Blue, 8GB+128GB").first();
await productLocator.waitFor({ state: 'visible', timeout: 20000 });
await productLocator.click();
const mobile_test = await productLocator.textContent();
console.log(mobile_test);



});