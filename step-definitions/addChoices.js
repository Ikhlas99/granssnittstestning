let { $, sleep } = require('./funcs');

module.exports = function () {

  this.Given(/^I click at sign in$/, async function () {
    let el = await driver.findElement(by.linkText('Sign In'));
    await el.click()
    await sleep(1500)
  });

  this.Given(/^I click sign in with IMBD$/, async function () {
    let attr = await driver.findElement(by.linkText('Sign in with IMDb'))
    await attr.click()
    await sleep(2000)
  });

  this.Given(/^I log into the my account with credentials$/, async function () {

    driver.findElement(By.css("#ap_email")).sendKeys("alansara33@gmail.com");
    driver.findElement(By.css("#ap_password")).sendKeys("hemlig33");
    await sleep(1000)

  });

  this.Given(/^the last click sign in$/, async function () {
    let menuClicked = await $('#signInSubmit');
    await menuClicked.click();
    expect(menuClicked, 'the last sign could not be done').to.exist;
    await sleep(1500);
  });

  this.Given(/^that I click on menu$/, async function () {
    let menuClicked = await $('#imdbHeader-navDrawerOpen--desktop');
    await menuClicked.click();
    await sleep(2000);
  });


  this.When(/^I click the Top Rated Movies$/, async function () {
    let topRated = await driver.findElement(by.linkText('Top Rated Movies'))
    await topRated.click()
    assert(topRated, 'Top Rated Movies is not found');
    await sleep(1500)
  });


  this.Then(/^I click on the favorite movie 'Nyckeln till frihet'$/, async function () {
    let favMovie = await driver.findElement(by.linkText('Nyckeln till frihet'))
    await favMovie.click()
    expect(favMovie, 'Nyckeln till frihet not found').to.exist;
    await sleep(1500)
  });


  this.When(/^I click on the 'Add to Watchlist'$/, function () {
    // No code needed here since it will done at the next step

  });

  this.Then(/^I should be able to add the item to my watchlist$/, async function () {

    let topAdded = await $('[data-is-logged-in="true"]');
    expect(topAdded, 'data is not inlogged').to.exist;

    await topAdded.click()
    expect(topAdded, 'topAdded is not found').to.exist;
    await sleep(1500)

    /*let isWachListed = await $('[data-is-watchlisted="true"]');
    await sleep(3000)*/
  });


}