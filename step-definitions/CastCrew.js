let { $, sleep } = require('./funcs');

module.exports = function () {
  let sleepTime = 1000;

  this.Given(/^that I am on the page of a specific movie$/, async function () {
    await helpers.loadPage('https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0');
    await sleep(sleepTime);
  });

  this.When(/^I click the link "([^"]*)"$/, async function (hyperLink) {
    let linkSeeFullCast = await driver.findElement(By.linkText(hyperLink));
    expect(linkSeeFullCast, 'Could not find ' + hyperLink + ' on page.').to.exist;
    await linkSeeFullCast.click();
    await sleep(sleepTime * 4);
  });

  this.Then(/^I expect to get a list with the names and pictures of the cast of that movie$/, async function () {
    let castList = await $('.primary_photo');
    let length = [...castList].length;
    expect(length).to.not.equal(0, 'Cast list cannot be empty');
    await sleep(sleepTime);
  });
}
