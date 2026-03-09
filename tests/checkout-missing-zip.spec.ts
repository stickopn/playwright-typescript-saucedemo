import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';

test('user cannot continue checkout without postal code', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutInfoPage = new CheckoutInfoPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.assertProductsPageLoaded();

  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.assertCartPageLoaded();

  await cartPage.clickCheckout();
  await checkoutInfoPage.assertCheckoutInfoPageLoaded();

  await checkoutInfoPage.fillCheckoutInformation('Petar', 'Petrovic', '');
  await checkoutInfoPage.continueCheckout();
  await checkoutInfoPage.assertErrorMessage('Error: Postal Code is required');
});