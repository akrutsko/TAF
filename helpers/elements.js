async function clearInput(element) {
  // await element.waitForClickable({ timeout: 5000 });
  // this.log.info(Clearing input field: ${await element.selector});

  if (browser.capabilities.browserName === 'MicrosoftEdge' || browser.capabilities.browserName === 'chrome') {
    const value = await element.getValue();
    for (let i = 0; i < value.length; i++) {
      await element.addValue('\uE003');
    }
  } else {
    await element.clearValue();
  }
}

module.exports = { clearInput };
