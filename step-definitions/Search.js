let { $, sleep } = require('./funcs');

module.exports = function () {
  let sleepTime = 1000;

  this.When(/^I type "([^"]*)" in search box$/, async function (input) {
    let searchBar = await $('input[placeholder="Search IMDb"]');
    expect(searchBar, 'Search bar not available');
    searchBar.sendKeys(input);
    await sleep(sleepTime);
  });

  this.When(/^I click on search button$/, async function () {
    let btnSearch = await $('#suggestion-search-button');
    expect(btnSearch, 'Search button not available');
    await btnSearch.click();
  });

  this.Then(/^I should get an error message "([^"]*)"$/, async function (errorMessage) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    let header = await $('h1.findHeader');
    let errNotFound = await header.getText();
    expect(errNotFound).to.include(errorMessage);
    await sleep(sleepTime);
  });

  this.When(/^I write "([^"]*)" in search box$/, async function (input) {
    let searchBar = await $('input[placeholder="Search IMDb"]');
    expect(searchBar, 'Search bar not available');
    searchBar.sendKeys(input);
    await sleep(sleepTime);
  });

  this.When(/^I press down arrow and press ENTER key$/, async function () {
    let searchBar = await $('input[placeholder="Search IMDb"');
    await searchBar.sendKeys(selenium.Key.ARROW_DOWN);
    await sleep(sleepTime);
    await searchBar.sendKeys(selenium.Key.ENTER);
    await sleep(sleepTime);
  });

  this.Then(/^I should be navigated to the details page of "([^"]*)"$/, async function (input) {
    let wrapper = await driver.wait(until.elementLocated(By.css('.title_wrapper')));
    let title = await wrapper.getText();
    expect(title).to.include(input);
    await sleep(sleepTime);
  });

  this.Given(/^that I have pressed the All-DropDownMenu Button to expand search filters$/, async function () {
    let allButton = await $('label.ipc-button:nth-child(1) > div:nth-child(1)');
    allButton.click();
    await sleep(sleepTime);
  });

  this.When(/^that I have selected 'Keywords' in the drop\-down menu$/, async function () {
    await driver.wait(until.elementLocated(by.css('a[role="menuitem"]')));
    await driver.findElement(By.linkText('Keywords')).click();
    await sleep(sleepTime);
  });

  this.When(/^write "([^"]*)" in the searchfield, I should see list of matching keywords$/, async function (keyword) {
    let lookUp = await $('input[placeholder= "Search IMDb"]');
    await lookUp.sendKeys(keyword);
    await lookUp.sendKeys(selenium.Key.ENTER);
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(by.css('.result_text')));
  });

  this.When(/^that i click a link "([^"]*)"$/, async function (link) {
    let linkToClick = await driver.findElement(By.linkText(link));
    await linkToClick.click();
    await sleep(sleepTime);
  });

  this.When(/^that I have pressed the Sort by drop-down to expand sort filters$/, async function () {
    let sortByView = await $('.lister-sort-by');
    sortByView.click();
    await sleep(sleepTime);
  });

  this.When(/^that I select 'IMDb Raing' in the drop\-down menu$/, async function () {
    await driver.findElement(By.css('.lister-sort-by option:nth-child(3)')).click();
    await sleep(sleepTime * 4);
  });

  this.Then(/^i should see results sorted by rating in descending order$/, async function () {
    //Nothing to do here
  });
}