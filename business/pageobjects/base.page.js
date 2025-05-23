const { browser } = require('@wdio/globals');

class BasePage {
  get errorContainer() {
    return $('[data-test="error"]');
  }

  open(path) {
    return browser.url(`https://www.saucedemo.com/${path}`);
  }

  getErrorMsg() {
    return this.errorContainer.getText();
  }
}

module.exports = BasePage;
