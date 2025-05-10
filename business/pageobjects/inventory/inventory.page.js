const BasePage = require('../base.page');
const Header = require('../components/header/header.component');

class InventoryPage extends BasePage {
  header = new Header();

  open() {
    return super.open('inventory.html');
  }
}

module.exports = InventoryPage;
