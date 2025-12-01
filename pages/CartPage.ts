import {Page, Locator, expect} from '@playwright/test';

export class CartPage {
    readonly page! : Page;
    readonly cartbutton! : Locator;
    readonly placeorderbutton! : Locator;

    constructor(page: Page) {

        this.page = page;
        this.cartbutton =  page.locator("#cartur");
        this.placeorderbutton = page.locator(".btn-success");
    }

    async cart() {
        await this.cartbutton.click();
         const price = await this.page.locator("tbody tr td:nth-child(3)").textContent();
            console.log("this cart price",price);
            const totalprice = await this.page.locator(".panel-heading h3").textContent();
            console.log("this is total price", totalprice);
            expect(price).toEqual(totalprice);
        await this.placeorderbutton.click();
        await this.page.locator("#orderModal").waitFor({ state: "visible" });
        
    }



}

