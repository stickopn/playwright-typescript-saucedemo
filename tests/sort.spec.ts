import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('products can be sorted by name A to Z', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.assertProductsPageLoaded();

  await productsPage.sortProducts('az');

  const actualNames = await productsPage.getProductNames();
  const expectedNames = [...actualNames].sort((a, b) => a.localeCompare(b));

  expect(actualNames).toEqual(expectedNames);
});

test('products can be sorted by price low to high', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.assertProductsPageLoaded();

  await productsPage.sortProducts('lohi');

  const actualPrices = await productsPage.getProductPrices();
  const expectedPrices = [...actualPrices].sort((a, b) => a - b);

  expect(actualPrices).toEqual(expectedPrices);
});