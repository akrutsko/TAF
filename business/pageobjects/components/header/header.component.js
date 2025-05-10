class Header {
  get header() {
    return $('.header_container');
  }
  get headerText() {
    return this.header.$('.header_label');
  }
}

module.exports = Header;
