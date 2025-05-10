const { expect } = require('@wdio/globals');
const LoginPage = require('../../business/pageobjects/login/login.page');
const BasePage = require('../../business/pageobjects/base.page');

describe('Login form', () => {
  it('should display username error message', async () => {
    const loginPage = new LoginPage();

    await loginPage.open();
    await loginPage.setCredentials('standard_user', 'test');
    await loginPage.clearCredentials();
    await loginPage.clickLoginBtn();

    await expect(loginPage.errorContainer).toHaveText(expect.stringContaining(LoginPage.errorUsernameRequired));
  });

  it('should display password error message', async () => {
    const loginPage = new LoginPage();

    await loginPage.open();
    await loginPage.setCredentials('test', 'test');
    await loginPage.clearPassword();
    await loginPage.clickLoginBtn();

    await expect(loginPage.errorContainer).toHaveText(expect.stringContaining(LoginPage.errorPasswordRequired));
  });
});
