
import {test} from '@playwright/test';
import { ProductsPage }  from  '../pages/ProductsPage';
import {CartPage} from '../pages/CartPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';

test("Add product in cart", async({page}) => {
    const product =new ProductsPage(page);
    await product.navigate();
    await product.selectProducts("Sony xperia z5");
    await product.addcartbutton();
    const cartclick = new CartPage(page);
    await cartclick.cart();
    const confirm = new ConfirmationPage(page);
    confirm.fillform("prakash rane","america","newyork","12345","12","2023");

    
    

});