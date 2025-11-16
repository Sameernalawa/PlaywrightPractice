import { test, expect } from "@playwright/test";
import { Utils } from "../helpers/utils";

test("Login page real site automation", async ({ page }) => {
  // Step 1: Go to URL
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await expect(page).toHaveTitle(/LoginPage Practise/);

  // Step 2: Fill username and password using helper
  await Utils.fillInput(page.locator("#username"), "rahulshettyacademy");
  await Utils.fillInput(page.locator("#password"), "learning");

  // Step 3: Select dropdown (static dropdown)
  await Utils.selectDropdownByValue(page, "select.form-control", "teach");

  // Step 4: Handle radio button pop-up
  const userRadio = page.locator(".radiotextsty").nth(1);
  await Utils.clickElement(userRadio);
  await page.locator("#okayBtn").click();

  // Step 5: Click Sign in
  await Utils.clickElement(page.locator("#signInBtn"));

  // Step 6: Wait and verify navigation
  await Utils.verifyUrlContains(page, "angularpractice");

  // Step 7: Print current URL
  console.log("✅ Logged in successfully, Current URL:", await page.url());
});
