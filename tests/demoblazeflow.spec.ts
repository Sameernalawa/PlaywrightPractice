
import {test} from '@playwright/test';
import { ProductsPage }  from  '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import testData from '../tests/test-data/demoblazeData.json';

test("product end to end flow", async({page}) => {
    const product =new ProductsPage(page);
    await product.navigate();
    await product.selectProducts(testData.productName);
    await product.addcartbutton();
    const cartclick = new CartPage(page);
    await cartclick.cart();
    const confirm = new ConfirmationPage(page);
    confirm.fillform(testData.name,testData.country,testData.city,testData.creditCard,testData.month,testData.year);

    
    

});