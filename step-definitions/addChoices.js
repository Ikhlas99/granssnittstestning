let { $, sleep } = require('./funcs');

module.exports = function () {

  // let { username, password } = require('./credentials.json');

  this.Given(/^I click at sign in$/, async function () {
    let el = await driver.findElement(by.linkText('Sign In'));
    await el.click()
    await sleep(1000)
  });

  this.Given(/^I click sign in with IMBD$/, async function () {
    let attr = await driver.findElement(by.linkText('Sign in with IMDb'))
    await attr.click()
    await sleep(1000)
  });


  this.Given(/^I log into the my account with credentials$/, async function () {

    driver.findElement(By.css("#ap_email")).sendKeys("alansara33@gmail.com");
    driver.findElement(By.css("#ap_password")).sendKeys("hemlig33");

    await sleep(1000)

    //Perform Click on LOGIN button using JavascriptExecutor		
    //js.executeScript("arguments[0].click();", button);
  });

  this.Given(/^the last click sign in$/, async function () {
    let menuClicked = await $('#signInSubmit');
    await menuClicked.click();
    await sleep(2000);
  });

  this.Given(/^that I click on menu$/, async function () {
    let menuClicked = await $('#imdbHeader-navDrawerOpen--desktop');
    await menuClicked.click();
    await sleep(2000);
  });


  this.When(/^I click the Top Rated Movies$/, async function () {
    let topRated = await driver.findElement(by.linkText('Top Rated Movies'))
    await topRated.click()
    await sleep(1000)
  });


  this.Then(/^I click on the favorite movie 'Nyckeln till frihet'$/, async function () {
    let favMovie = await driver.findElement(by.linkText('Nyckeln till frihet'))
    await favMovie.click()
    await sleep(1000)
  });

  this.Then(/^I should be able to add the item to my watchlist$/, async function () {
    let topAdded = await driver.wait(until.elementLocated(By.css('.uc-add-wl-pending-icon')));
    //let movies = [];
    //for (let movie of movies) {
    //movies.push(movie);
    //}
    await topAdded.click()
    await sleep(2000)
  });



}