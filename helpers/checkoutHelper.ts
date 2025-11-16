import {Page,expect} from '@playwright/test';

export async function completeCheckout(page:Page) {

    const countryInput = page.locator("input#country");    // same as input[id='country']
await countryInput.pressSequentially("ind", { delay: 100 });        // type slowly so the suggestion widget updates

// Wait for suggestions and click the India item
const suggestions = page.locator(".suggestions");
await page.waitForSelector(".suggestions li a", { state: "visible", timeout: 10000 });

// Click the suggestion that contains "India"
await suggestions.locator("li a", { hasText: "India" }).click();

// Verify selection (input value becomes "India")
await expect(countryInput).toHaveValue("India");
await page.locator("#checkbox2").click({ force: true });
await page.locator("[value='Purchase']").click();
const success_message = page.locator(".alert-success");
await expect(success_message).toBeVisible();
await expect(success_message).toContainText("Success!");



}