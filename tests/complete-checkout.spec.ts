import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

test('user can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutInfoPage = new CheckoutInfoPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.assertProductsPageLoaded();

  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.openCart();
  await cartPage.assertCartPageLoaded();

  await cartPage.clickCheckout();
  await checkoutInfoPage.assertCheckoutInfoPageLoaded();

  await checkoutInfoPage.fillCheckoutInformation('Petar', 'Petrovic', '11000');
  await checkoutInfoPage.continueCheckout();

  await checkoutOverviewPage.assertCheckoutOverviewPageLoaded();
  await checkoutOverviewPage.finishCheckout();

  await checkoutCompletePage.assertCheckoutCompletePageLoaded();
});