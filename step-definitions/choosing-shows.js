let { $, sleep } = require('./funcs');


module.exports = function () {


  let sleepTime = 1500;

  this.Given(/^I am on IMDB website$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

  this.When(/^I click on menu$/, async function () {
    let menuClicked = await $('#imdbHeader-navDrawerOpen--desktop');
    await menuClicked.click();
    assert(menuClicked, 'Menu not found');
    await sleep(sleepTime);
  });

  this.When(/^I choose to click on What's on TV & Streaming$/, async function () {
    let WhatsonTVClicked = await driver.wait(until.elementLocated(By.linkText('What\'s on TV & Streaming')));
    await WhatsonTVClicked.click();
  });


  this.Then(/^I should get a result of intersting tv shows$/, async function () {

    let elements = await driver.findElements(by.css('.pagecontent'));
    //findElements ger oss en lista med 0 - många element;
    let firstElement = elements[0];

    await sleep(sleepTime);

  });


  ////////////       Top Rated Shows Ranking by Release Date         / /////////////

  this.When(/^I click on Top Rated Shows elemnt$/, async function () {
    let el = await driver.findElement(by.linkText('Top Rated Shows'));
    await el.click()
    expect(el, 'Top Rated Show is not found');
    await sleep(sleepTime)
  });

  this.Then(/^I should see a list of the elemnt$/, async function () {

    await driver.wait(until.elementLocated(By.css('div.lister')));
    let headline = await $('h1.header');
    let headlineText = await headline.getText();
    expect(headlineText,
      'Could not find the headline Top Rated TV Shows'
    ).to.equal('Top Rated TV Shows');
    await sleep(sleepTime);
  });


  this.Then(/^ranking by 'Release Date'$/, async function () {

    await selectOption('#lister-sort-by-options', 'Release Date');
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

    await sleep(1500);
  });



}













