const { browser } = require('@wdio/globals');

class Header {
  get header() {
    return $('.header_container');
  }
  get headerText() {
    return this.header.$('.header_label');
  }

  getTitle() {
    return this.headerText.getText();
  }
}

module.exports = Header;
