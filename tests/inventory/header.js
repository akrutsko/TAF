const data = require('./data.json');

const { expect } = require('@wdio/globals');
const LoginPage = require('../../business/pageobjects/login/login.page');
const InventoryPage = require('../../business/pageobjects/inventory/inventory.page');
const logger = require('../../config/logger');

describe('Inventory', () => {
  it('should have title "Swag Labs"', async () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();

    await loginPage.open();
    await loginPage.setCredentials(data.username, data.password);
    await loginPage.clickLoginBtn();

    logger.info(`The title: ${await inventoryPage.header.getTitle()}`);
    await expect(inventoryPage.header.headerText).toHaveText(data.title);
  });
});
