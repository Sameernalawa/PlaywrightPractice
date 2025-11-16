import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.locator('form input[name="name"]').click();
  await page.locator('input[name="email"]').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
  await page.getByLabel('Gender').selectOption('Female');
  await page.locator('div').filter({ hasText: 'Employed' }).nth(2).click();
  await page.locator('input[name="bday"]').fill('2025-10-09');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('× Success! The Form has been').click();
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem' }).getByRole('button').click();
  await page.getByText('Checkout ( 1 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).pressSequentially('ind');
  await page.getByText('India').click();
  await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByText('Success!').click();
});