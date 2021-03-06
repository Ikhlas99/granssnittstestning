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

  this.When(/^I click specific cast member$/, async function () {
    let castList = await $('.primary_photo');
    let length = [...castList].length;
    expect(length).to.not.equal(0, 'Cast list cannot be empty');
    castList[0].click();
    await sleep(sleepTime * 2);
  });

  this.Then(/^I expect to see its details page$/, async function () {
    let divImage = await $('.image');
    expect(divImage, 'Not on details page').to.exist;
    await sleep(sleepTime);
  });

  this.Then(/^I click on videos view and navigate to player screen$/, async function () {
    let videosSection = await $('.heroWidget');
    expect(videosSection, 'Videos section not found');
    await videosSection.click();
    await sleep(sleepTime * 3);
  });

  this.Then(/^I click on player and can see video playing$/, async function () {
    let videoView = await $('#imdb-jw-video-1');
    expect(videoView, 'Video view not found');
    await videoView.click();
    await sleep(sleepTime * 5);
  });
}
