import {Page,expect} from '@playwright/test';

export async function fillForm(page:Page){
    try {

    await page.locator("[name='name']").first().fill("sameer");
    await page.locator("[name='email']").fill("sameer@123.com");
    await page.getByLabel("Password").fill("12345");
    await page.getByText("Check me out if you Love IceCreams!").click();
    await page.locator("#exampleFormControlSelect1").selectOption("Female");
    await page.getByLabel("Employed").check();
    await page.locator("[name='bday']").first().fill("2005-11-12");
    await page.getByRole("button",{name: 'Submit'}).click();
    const success = await page.getByText("Success! The Form has been submitted successfully!.")
    await expect(success).toBeVisible();
    console.log(success)
    console.log("Form submitted successfully");
    } catch (error) {
        console.log("Error logging here:", error);
        throw error;
    }

}