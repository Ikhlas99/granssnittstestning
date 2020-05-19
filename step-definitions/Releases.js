let { $, sleep } = require('./funcs');

module.exports = function () {

  let sleepTime = 0;
  let clickedButton;

  this.Given(/^that i am on imdb website$/, async function () {
    await helpers.loadPage('https://www.imdb.com/');
    await sleep(sleepTime);
  });

  this.When(/^i click on the menu$/, async function () {
    clickedButton = await $('#imdbHeader-navDrawerOpen--desktop');
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
  });

  this.When(/^i choose to click on 'upcoming releases'$/, async function () {
    clickedButton = await driver.wait(until.elementLocated(By.linkText('Release Calendar')));
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
  });

  this.When(/^i will choose to click on 'Unhinged' from the list\.$/, async function () {
    clickedButton = await driver.wait(until.elementLocated(By.linkText('Unhinged')));
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
  });

  this.Then(/^choose to see the trailer$/, async function () {
    clickedButton = await $('a[class="slate_button prevent-ad-overlay video-modal"]');
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
    sleep(2000);
  });

  this.Then(/^be able to watch$/, async function () {
    await sleep(2000);
    clickedButton = await $('#imdb-jw-video-1');
    expect(clickedButton, 'Button was not found');
    await clickedButton.click();
    sleep(5000);
  });

}