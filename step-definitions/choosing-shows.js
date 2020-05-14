let { $, sleep } = require('./funcs');

module.exports = function () {




  this.When(/^I click a menuItem "([^"]*)"$/, async function (string) {
    let menuItem = await $('ipc-list__item nav-link nav-link--hideXS nav-link--hideS nav-link--hideM sc-jTzLTM fjLstn ipc-list__item--indent-one')
    await menuItem.click(string);
    await sleep(3000)
  });

  this.When(/^I click the element "([^"]*)"$/, async function () {
    let element = await $('IMDb Home School: Educational Picks for Kids')
    await element.click()
    await sleep(1000)

  });

  this.Then(/^I should get a list of intersting tv shows$/, async function () {

    let link = await driver.findElement(by.linkText('https://www.imdb.com/whats-on-tv/home-school/ls094700105/mediaviewer/rm3350135296'))
  });

  this.Given(/^that I'am at the IMDB sajt$/, function () {
    // no code 
  });

  this.When(/^I click "([^"]*)" elemnt$/, async function (string) {
    let el = await $('ipc - list__item nav - link sc - jTzLTM fjLstn ipc - list__item--indent - one')
    await el.click(string)
    await sleep(1000)
  });

  this.Then(/^I should see a list of the elemnt$/, async function (searchList) {

    let lists = await $('header')
    let found = false
    for (let list of lists) {


      break
    }


  });

  this.Then(/^ranking by 'Number of Ratings'$/, async function () {

    await selectOption('#lister-sort-by-options', 'Number of Ratings');

  });
















}