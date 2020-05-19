let { $, sleep } = require('./funcs');

module.exports = function () {
  let { username, password } = require('./credentials.json');
  let sleepTime = 1000;



  this.Given(/^I choose 'Browse Tv Shows by Genre'$/, async function () {
    let item = await driver.findElement(by.linkText('Browse TV Shows by Genre'));
    await item.click();
    await sleep(sleepTime)

  });

  this.Given(/^I pick 'COMEDY' from the list$/, async function () {
    let tvItem = await driver.findElement(by.linkText('Comedy'));
    await tvItem.click();
    expect(tvItem, 'tvItem is not found').to.exist;
    await sleep(sleepTime)
  });

  this.When(/^I choose 'The Wrong Missy'$/, async function () {
    let favItem = await driver.findElement(by.linkText('The Wrong Missy'));
    await favItem.click();
    assert(favItem, 'could not found favItem');
    await sleep(sleepTime)
  });

  this.Then(/^I Rate This$/, async function () {
    let rateItem = await driver.findElement(By.css('div.star-rating-button'));
    await rateItem.click();
    expect(rateItem, 'the valu of rate is not 5').to.exist;
    await sleep(1500)
  });



}