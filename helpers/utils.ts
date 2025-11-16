import { Page, Locator, expect } from "@playwright/test";

export class Utils {

  static async fillInput(element: Locator, value: string) {
    await element.waitFor({ state: 'visible' });
    await element.fill(value);
  }

  static async clickElement(element: Locator) {
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

  static async selectDropdownByValue(page: Page, selector: string, value: string) {
    await page.selectOption(selector, { value });
  }

  static async getText(element: Locator): Promise<string> {
    await element.waitFor({ state: 'visible' });
    return (await element.textContent())?.trim() || "";
  }

  static async verifyUrlContains(page: Page, expected: string) {
    await expect(page).toHaveURL(new RegExp(expected));
  }

  static async waitForTimeout(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
