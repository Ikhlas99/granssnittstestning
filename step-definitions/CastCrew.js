const { username, password } = require('./credentials.json');
let { $, sleep } = require('./funcs');

module.exports = function () {
  this.Given(/^that I am on the page of a specific movie$/, async function () {
    await helpers.loadPage('https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0');
    await sleep(1000);
  });

  this.Then(/^I have clicked the link "([^"]*)"$/, async function (hyperLink) {
    let linkSeeFullCast = await driver.findElement(By.linkText(hyperLink));
    expect(linkSeeFullCast, 'Could not find ' + hyperLink + ' on page.').to.exist;
    await linkSeeFullCast.click();
    await sleep(4000);
  });
}
