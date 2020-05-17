let { $, sleep } = require('./funcs');

module.exports = function () {
  this.Given(/^that I am on the IMDB website$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
  });

  this.Given(/^I have clicked the hamburger menu to expand links of the site$/, async function () {
    let menuButton = await $('#imdbHeader-navDrawerOpen--desktop');
    await menuButton.click();
  });

  this.When(/^I press the "([^"]*)"$/, async function (link) {
    let topRatedLink = await driver.wait(until.elementLocated(By.linkText(link)));
    await topRatedLink.click();
    expect(topRatedLink, 'Unable to find Top Rated Movies link in menu items');
  });

  this.Then(/^I should get non-empty list of the top rated movies$/, async function () {
    let list = await $('.posterColumn');
    let listLength = [...list].length;
    expect(listLength).to.not.equal(0, 'Top Rated movies list cannot be empty');
  });

  this.When(/^I press "([^"]*)" to see list of upcoming movies for current month$/, async function (link) {
    let comingSoonLink = await driver.wait(until.elementLocated(By.linkText(link)));
    await comingSoonLink.click();
    expect(comingSoonLink, 'Unable to find Coming Soon link in menu items');
  });

  this.When(/^I click "([^"]*)" to show upcoming movies for next month$/, async function (next) {
    driver.findElement(By.linkText(next)).click();
    await sleep(5000);
  });

  this.Then(/^I should see movies list upcoming in next month$/, async function () {
    let item = await driver.findElement(By.id('img_primary'));
    assert(item !== null, 'Upcoming movies list can not be empty for June')
  });
}