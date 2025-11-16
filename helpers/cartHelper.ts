import {Page, expect} from '@playwright/test';

export async function validateCart(page: Page) {

    await page.locator(".btn-primary").click();
    const price_text= await page.locator("td.text-center strong").first().textContent();
    console.log(price_text);
    const total_text= await page.locator("tbody tr:nth-child(2) strong").textContent();
    console.log(total_text);
    expect(price_text).toEqual(total_text);
    await page.getByText("Checkout").click();

}