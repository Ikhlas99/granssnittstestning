let { $, sleep } = require('./funcs');

module.exports = function () {

  let searchField;
  let sleepTime = 1000;

  this.Given(/^I am at the search page$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime)

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
    await sleep(2000)
  });

  this.When(/^I click at the search button to get the result$/, async function () {
    let button = await $('#search_input')
    await button.click()
    await sleep(2000)
  });




  //////////////////            Job Field            /////////////

  this.When(/^I clicked the All-DropDownMenu button$/, async function () {
    let allElement = await $('label.ipc-button:nth-child(1) > div:nth-child(1)');
    allElement.click();
    await sleep(2000);
  });

  this.When(/^I select 'Titles' in the drop\-down menu$/, async function () {
    await driver.wait(until.elementLocated(by.css('a[aria-label="Titles"]')));
    await driver.findElement(By.linkText('Titles')).click();
    await sleep(2000);
  });

  this.When(/^I write "([^"]*)" in the searchfield$/, async function (Titles) {
    let lookUp = await $('input[placeholder= "Search IMDb"]');
    await lookUp.sendKeys(Titles);
    await lookUp.sendKeys(selenium.Key.ENTER);
    await sleep(2000);
    await driver.wait(until.elementLocated(by.css('.result_text')));
  });

  this.Then(/^I expect get a list of "([^"]*)"$/, async function (expectedList) {
    await driver.wait(until.elementLocated(By.css('div.article')));
    let headline = await $('h1.findHeader');
    let headlineText = await headline.getText();
    expect(headlineText,
      'Could not find the best offer'
    ).to.equal('Displaying 200 results for "the best offer"');
    await sleep(2000);
  });


}