
import {Page,Locator} from '@playwright/test';

export class ProductsPage {
    readonly page!: Page;
    readonly products! : Locator;
    readonly AddToCart! : Locator;

    constructor(page:Page) {
        this.page = page;
        this.products = page.locator(".col-lg-4");
        this.AddToCart = page.getByText("Add to cart");

    }

    async navigate() {
        await this.page.goto("https://www.demoblaze.com/")
    }

    async selectProducts(productName : string){
        await this.page.waitForSelector('.col-lg-4', { state: 'attached' });
        await this.page.waitForTimeout(2000);
        const count =await this.products.count();
        console.log("Total product are", count);
        
    
        for (let i=0; i<count; i++) {
            const device = await this.products.nth(i).locator(".hrefch").textContent();
            console.log(device);
            if(device === productName) {
                await this.products.nth(i).locator(".hrefch").click();
                break;
           }   
        }
    }
    
    
    async addcartbutton() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.AddToCart.click();

    }
    
    
}
    




    

