const { expect } = require('@wdio/globals');
const LoginPage = require('../../business/pageobjects/login/login.page');
const InventoryPage = require('../../business/pageobjects/inventory/inventory.page');

describe('Inventory', () => {
  it('should have title "Swag Labs"', async () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    await loginPage.open();
    await loginPage.setCredentials('standard_user', 'secret_sauce');
    await loginPage.clickLoginBtn();

    await expect(inventoryPage.header.headerText).toHaveText('Swag Labs');
  });
});
