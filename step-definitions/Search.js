let { $, sleep } = require('./funcs');

module.exports = function () {
  let sleepTime = 1000;

  this.Given(/^that I have pressed the All-DropDownMenu Button to expand search filters$/, async function () {
    let allButton = await $('label.ipc-button:nth-child(1) > div:nth-child(1)');
    allButton.click();
    await sleep(sleepTime);
  });

  this.Given(/^that I select 'Keywords' in the drop\-down menu$/, async function () {
    await driver.wait(until.elementLocated(by.css('a[role="menuitem"]')));
    await driver.findElement(By.linkText('Keywords')).click();
    await sleep(sleepTime);
  });

  this.Given(/^write "([^"]*)" in the searchfield, I should see list of matching keywords$/, async function (keyword) {
    let lookUp = await $('input[placeholder= "Search IMDb"]');
    await lookUp.sendKeys(keyword);
    await lookUp.sendKeys(selenium.Key.ENTER);
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(by.css('.result_text')));
  });

  this.Given(/^that i click a link "([^"]*)"$/, async function (link) {
    let linkToClick = await driver.findElement(By.linkText(link));
    await linkToClick.click();
    await sleep(sleepTime);
  });

  this.Given(/^that I have pressed the Sort by drop-down to expand sort filters$/, async function () {
    let sortByView = await $('.lister-sort-by');
    sortByView.click();
    await sleep(sleepTime);
  });

  this.Given(/^that I select 'IMDb Raing' in the drop\-down menu$/, async function () {
    await driver.findElement(By.css('.lister-sort-by option:nth-child(3)')).click();
    await sleep(4000);
  });

  this.Given(/^i should see results sorted by rating in descending order$/, async function () {
    //Nothing to do here
  });
}