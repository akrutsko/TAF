const { clearInput } = require('../../../helpers/elements');
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
    await clearInput(this.usernameInput);
  }

  async clearPassword() {
    await clearInput(this.passwordInput);
  }

  async clearCredentials() {
    await this.clearUsername();
    await this.clearPassword();
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
