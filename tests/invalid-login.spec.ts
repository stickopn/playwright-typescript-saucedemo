import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('invalid login shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'wrong_password');
  await loginPage.assertLoginError('Username and password do not match');
});