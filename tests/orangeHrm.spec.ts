import {test,expect} from '@playwright/test';


test("practise form", async({page})=> {

    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder("First Name").fill("Sameer");
    await page.getByPlaceholder("Last Name").fill("Nalawade");
    await page.getByPlaceholder("name@example.com").fill("sameer123@gmail.com")
    await page.locator(".custom-control-label").nth(1).click();
    await page.getByPlaceholder("Mobile Number").fill("86574586947");
    await page.locator("#dateOfBirthInput").fill("21 Oct 2024");
    await page.locator('input[id*="react-select"]').first().fill("Maths");       
    await page.locator(".custom-control-label").nth(4).click();
    await page.setInputFiles("#uploadPicture","tests/test-data/Resume.doc");
    await page.getByPlaceholder("Current Address").fill("what when we complete this form");
    await page.locator(".css-1hwfws3").nth(1).click();
    await page.getByText("Haryana", { exact: true }).click();
    await page.getByText("Submit").click();



});



