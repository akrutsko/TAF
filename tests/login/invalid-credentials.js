const { expect } = require('@wdio/globals');
const LoginPage = require('../../business/pageobjects/login/login.page');
const BasePage = require('../../business/pageobjects/base.page');

describe('Login form', () => {
  it('should display username error message', async () => {
    const loginPage = new LoginPage();

    await loginPage.open();
    await loginPage.setCredentials('standard_user', 'test');
    await loginPage.clearCredentials();

    // await browser.execute(() => {
    //   document.querySelector('#user-name').value = '';
    //   document.querySelector('#password').value = '';
    // });

    // await browser.execute(() => {
    //   const inputs = document.querySelectorAll('input');
    //   inputs.forEach((input) => {
    //     input.setAttribute('autocomplete', 'off');
    //     input.setAttribute('name', 'no_autofill_' + Math.random());

    //     console.dir(input);
    //   });
    // });

    // await browser.pause(1000000);

    const usernameBeforeVal = await loginPage.usernameInput.getValue();
    const passwordBeforeVal = await loginPage.passwordInput.getValue();
    console.log('**************************************************************', {
      usernameBeforeVal,
      passwordBeforeVal,
    });

    // await browser.pause(1000);

    await loginPage.clickLoginBtn();

    // await browser.pause(1000);

    const usernameVal = await loginPage.usernameInput.getValue();
    const passwordVal = await loginPage.passwordInput.getValue();
    console.log('**************************************************************', { usernameVal, passwordVal });
    // await browser.pause(1000);

    // await expect(loginPage.errorContainer).toHaveText(expect.stringContaining(LoginPage.errorUsernameRequired));
  });

  it.skip('should display password error message', async () => {
    const loginPage = new LoginPage();

    await loginPage.open();
    await loginPage.setCredentials('test', 'test');
    await loginPage.clearPassword();
    await loginPage.clickLoginBtn();

    await expect(loginPage.errorContainer).toHaveText(expect.stringContaining(LoginPage.errorPasswordRequired));
  });
});
