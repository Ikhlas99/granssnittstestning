let { $, sleep } = require('./funcs');

module.exports = function () {

  let searchField;
  let sleepTime = 2000;

  this.Given(/^I am at the search page$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(1000)

  });

  this.Given(/^I click at Help Center$/, async function () {
    let topRated = await driver.findElement(by.linkText('Help Center'))
    await topRated.click()
    await sleep(sleepTime)

  });

  this.Given(/^I entered "([^"]*)" in the searchfield$/, async function (searchText) {
    searchField = await $('input[placeholder= "How can we help?"]');
    assert(searchField, 'I cant found the searchText')
    await searchField.sendKeys(searchText)
    await searchField.sendKeys(selenium.Key.ENTER);
    await sleep(3000)
  });

  this.When(/^I click at the search button$/, async function () {
    let button = await $('#search_input')
    await button.click()
    await sleep(2000)
  });

  this.Then(/^I should get a result  of "([^"]*)"$/, async function (result) {
    let elements = await driver.findElements(By.css(".a-section a-padding-extra-large a-text-center"));
    let headline = await $('h2.aok-inline-block');
    let headlineText = await headline.getText();
    expect(headlineText,
      'Could not find the headline Top Rated TV Shows'
    ).to.equal('5 results for “how can I delete personal information IMDB stores about me” in IMDb');
    await sleep(2000);
  });




}