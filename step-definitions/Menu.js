let { $, sleep } = require('./funcs');

module.exports = function () {
  this.Given(/^that I am on the IMDB site$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
  });

  this.Given(/^I have pressed the menu-button to expand links of the site$/, async function () {
    let menuButton = await $('#imdbHeader-navDrawerOpen--desktop');
    await menuButton.click();
  });

  this.When(/^I press the "([^"]*)"$/, async function (link) {
    let topRatedLink = await driver.wait(until.elementLocated(By.linkText(link)));
    await topRatedLink.click();
    expect(topRatedLink, 'Unable to find Top Rated Movies link in menu items');
  });
}