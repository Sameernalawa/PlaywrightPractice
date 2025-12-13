import {Page,Locator,expect} from '@playwright/test';

export class ConfirmationPage {
    readonly page! : Page;
    readonly name! :Locator;
    readonly country! : Locator;
    readonly city! : Locator;
    readonly creditcart! : Locator;
    readonly month! : Locator;
    readonly year! : Locator;
    readonly purchasebutton! : Locator;
    readonly successmessage! : Locator;

    constructor(page: Page) {
        this.page = page;
        this.name = page.locator("#name")
        this.country = page.getByLabel("Country:")
        this.city = page.locator("#city")
        this.creditcart = page.getByLabel("Credit card:")
        this.month = page.locator("#month")
        this.year = page.locator("#year")
        this.purchasebutton = page.locator("[onclick='purchaseOrder()']")
        this.successmessage = page.locator(".sweet-alert h2")
    }

    

    

    async fillform(name:string,country:string,city:string,creditcart:string,month:string,year:string) {
       
        
       

        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.creditcart.fill(creditcart);
        await this.month.fill(month);
        await this.year.fill(year);
        await this.purchasebutton.click();
        const success = this.successmessage;
        await expect(success).toBeVisible();
        await expect(success).toContainText("Thank you");
    }

}