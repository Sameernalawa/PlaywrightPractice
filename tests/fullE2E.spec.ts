// console.log(await products.first().textContent());
// console.log(await products.nth(1).textContent());
// const all_products = await products.allTextContents();
// await page.locator("jdjsj").first().waitFor(); this also can use if networkidle not work
// await page.WaitForLoadState('networkidle'); once all network activity done then print will work
// console.log(all_products);
// in above allTextContents() method we dont have auto wait 
// so we need to use first or nth element to load because they 
// have auto wait feature after that you will get all list proudcts printed


import {test} from '@playwright/test';
import {openApplication,ClickShopLink} from "../helpers/navigationHelper";
import {fillForm} from "../helpers/formHelper";
import {addProduct} from "../helpers/productHelper";
import {validateCart} from "../helpers/cartHelper";
import {completeCheckout} from "../helpers/checkoutHelper";

test ("Test Full E2E flow", async ({page}) => {

    try {
    await openApplication(page);
    await fillForm(page);
    await ClickShopLink(page);
    await addProduct(page, 'Blackberry');
    await validateCart(page);
    await completeCheckout(page);
    } catch (error) {
        console.log("Test failed:", error);
        throw error;
    }


});



