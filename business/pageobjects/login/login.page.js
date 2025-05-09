const BasePage = require('../base.page');

class LoginPage extends BasePage {
  static errorUsernameRequired = 'Username is required';
  static errorPasswordRequired = 'Password is required';

  get usernameInput() {
    return $('#user-name');
  }
  get passwordInput() {
    return $('#password');
  }
  get loginBtn() {
    return $('#login-button');
  }

  open() {
    return super.open('');
  }

  async setCredentials(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearUsername() {
    await this.usernameInput.setValue('');
  }

  async clearPassword() {
    await this.passwordInput.setValue('');
  }

  async clearCredentials() {
    await this.clearUsername();
    await this.clearPassword();
    // await browser.execute(() => {
    //   const input = document.querySelector('#user-name');
    //   input.setAttribute('value', '');
    //   input.value = '';
    // });
    // await browser.execute(() => {
    //   const input = document.querySelector('#password');
    //   input.setAttribute('value', '');
    //   input.value = '';
    // });

    await this.clearInput(this.usernameInput);
    await this.clearInput(this.passwordInput);
  }

  async clearInput(element) {
    await element.waitForClickable({ timeout: 5000 });
    // this.log.info(Clearing input field: ${await element.selector});

    if (browser.capabilities.browserName === 'MicrosoftEdge' || browser.capabilities.browserName === 'chrome') {
      const inputLength = (await element.getValue()).length;
      for (let i = 0; i < inputLength; i++) {
        await element.addValue('\uE003');
      }
    } else {
      await element.clearValue();
    }
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async login(username, password) {
    await this.setCredentials(username, password);
    await this.clickLoginBtn();
  }
}

module.exports = LoginPage;
