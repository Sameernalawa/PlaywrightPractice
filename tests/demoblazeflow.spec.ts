
import {test,expect} from '@playwright/test';

test("demoblaze end to end flow", async({page}) => {

    await page.goto("https://www.demoblaze.com/");
    await page.waitForSelector('.col-lg-4', { state: 'attached' });
    await page.waitForTimeout(2000);

    const products = page.locator(".col-lg-4")
    const count =await products.count();
    console.log("Total product are", count);
    
    for (let i=0; i<count; i++) {
        const device = await products.nth(i).locator(".hrefch").textContent();
        console.log(device);
        if(device === "Sony xperia z5") {
            await products.nth(i).locator(".hrefch").click();
            break;
        }
    }
    
    page.on('dialog', dialog => dialog.accept());
    await page.getByText("Add to cart").click();
    await page.locator("#cartur").click();
    const price = await page.locator("tbody tr td:nth-child(3)").textContent();
    console.log("this cart price",price);
    const totalprice = await page.locator(".panel-heading h3").textContent();
    console.log("this is total price", totalprice);
    expect(price).toEqual(totalprice);
    await page.locator(".btn-success").click();
    await page.locator("#name").fill("rakesh jadhav");
    await page.getByLabel("Country:").fill("india");
    await page.locator("#city").fill("pune");
    await page.getByLabel("Credit card:").fill("1234556");
    await page.locator("#month").fill("December");
    await page.getByLabel("Year:").fill("2025");
    await page.locator("[onclick='purchaseOrder()']").click();
    const success = await page.locator(".sweet-alert h2")
    await expect(success).toBeVisible();
    await expect(success).toContainText("Thank you");
    

});