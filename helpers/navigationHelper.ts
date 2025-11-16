import {Page} from '@playwright/test';

export async function openApplication(page:Page) {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.waitForLoadState('networkidle');

}

export async function ClickShopLink(page:Page) {

    await page.locator("//a[text()='Shop']").click();
    await page.waitForLoadState('networkidle');
}