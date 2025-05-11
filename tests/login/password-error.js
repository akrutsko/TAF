const data = require('./data.json');

const { expect } = require('@wdio/globals');
const LoginPage = require('../../business/pageobjects/login/login.page');
const BasePage = require('../../business/pageobjects/base.page');
const logger = require('../../config/logger');

describe('Login form', () => {
  it('should display password error message', async () => {
    const loginPage = new LoginPage();

    await loginPage.open();
    await loginPage.setCredentials(data.username, data.password);
    await loginPage.clearPassword();
    await loginPage.clickLoginBtn();

    logger.info(`The error message: ${await loginPage.getErrorMsg()}`);
    await expect(loginPage.errorContainer).toHaveText(expect.stringContaining(LoginPage.errorPasswordRequired));
  });
});
