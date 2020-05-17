let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 1000;
  let clickedButton;

  this.Given(/^that i am already on IMDB website$/, async function () {
    await helpers.loadPage('https://www.imdb.com');
    await sleep(sleepTime);
  });

  this.When(/^i click on born today$/, async function () {
    await helpers.loadPage('https://www.imdb.com/search/name/?birth_monthday=05-16&ref_=hm_brn_sm');
    await sleep(sleepTime);

  });

  this.When(/^i choose to click on Lynn Collins\.$/, async function () {

    clickedButton = await driver.wait(until.elementLocated(By.linkText('Lynn Collins')));
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
    await sleep(sleepTime);
  });


  this.When(/^i click on the trailer and I will be able to watch it.$/, async function () {
    await helpers.loadPage('https://www.imdb.com/video/vi2420817177?playlistId=nm1211488&ref_=vp_rv_ap_0');
    await sleep(3000);
    clickedButton = await $('#imdb-jw-video-1');
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
    await sleep(2000);
  });

  this.Given(/^that i am already on born todays page$/, async function () {
    await helpers.loadPage('https://www.imdb.com/search/name/?birth_monthday=05-16&ref_=hm_brn_sm');
    await sleep(2000);
  });

  this.Given(/^i click on A\-Z$/, async function () {
    clickedButton = await driver.wait(until.elementLocated(By.linkText('A-Z')));
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
    await sleep(2000);
  });

  this.Given(/^i will be able to visit A\.J\.Feeley\.$/, async function () {
    clickedButton = await driver.wait(until.elementLocated(By.linkText('A\.J\. Feeley')));
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
    sleep(2000);
  });

}