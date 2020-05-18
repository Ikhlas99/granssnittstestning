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

  this.When(/^I click on Jobs$/, async function () {
    let jobField = await driver.findElement(by.linkText('Jobs'))
    await jobField.click()
    await sleep(1000)
  });

  this.When(/^I entered the text "([^"]*)"$/, async function (searchWord) {
    let searchJob = await driver.wait(until.elementLocated(By.css('input[placeholder="Search for jobs by title or keyword"]')), 5000);

    await searchJob.sendKeys(searchWord)
    //await searchJob.sendKeys(selenium.Key.ENTER);
    await sleep(1000)
  });

  this.When(/^I entered at the another serchfiled "([^"]*)"$/, async function (city) {
    let searchCity = await $('input[placeholder="Location"]');
    assert(searchCity, 'I cant found the right location')
    await searchCity.sendKeys(city)
    await searchJob.sendKeys(selenium.Key.ENTER);
    await sleep(1000)
  });

  this.Then(/^I expect get a list of "([^"]*)"$/, async function () {
    await driver.wait(until.elementLocated(By.css('div.dropdown-menu')));
    let role = await $('listbox');
    let headlineText = await role.getText();
    expect(headlineText,
      'Could not find the looking job'
    ).to.equal('Software test engineer');
    await sleep(2000);
  });

  this.Then(/^sorted by Most recent$/, async function () {
    await selectOption('.dropdown', 'Most recent');
    let elements = await driver.findElements(By.css(".titleColumn > span"));
    let years = [];
    for (let element of elements) {
      // getting the year part using splits on parenthesis
      // and converting to number using +
      years.push(+(await element.getText()).split('(')[1].split(')')[0]);
    }
    /// we expect no year to be more than the first year
    let wrongYears = years.filter(x => x > years[0]);
    expect(wrongYears,
      'Years before ' + years[0] + ' found later in list.'
    ).to.be.empty;

    await sleep(2000);
  });


}