let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 3000;

  this.Given(/^That I choose account settings from my account$/, async function () {
    await selectOption('#nblogout', 'Account settings');
    let elements = await driver.findElements(By.css(".titleColumn > span"));
    await sleep(sleepTime)
  });

  this.Given(/^I sign in with IMDb$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Given(/^I Sign\-In$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  this.Given(/^I chang my user Id$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.Given(/^I enterd a text into my Bio$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.When(/^I chang my password$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

  this.Then(/^I expect that I can sign in with the new user Id$/, function () {
    // Write code here that turns the phrase above into concrete actions

  });

}