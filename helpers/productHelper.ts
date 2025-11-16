import {Page} from '@playwright/test';

export async function addProduct(page:Page, productName:string) {

    try {

    const products = await page.locator(".card");
    console.log(products);
    const count = await products.count();
    
    for(let i=0; i<count; i++)
        {
        const mobile = await products.nth(i).locator("h4 a").textContent();
        if (mobile?.trim() === productName)
        {
            await products.nth(i).locator("button:has-text('Add')").click();
            console.log("Added : ${producttName} to cart");
            break;
        }
    }
} catch (error) {
    console.log("error in add products(${productName})",error);
    throw error;
}


}