const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const {Given, Then} = require(path.join(
  __dirname,
  '..',
  'node_modules',
  'protractor-cucumber-framework',
  'lib',
  'cucumberLoader'
)).load();

Given('I go on {string}', function (url) {
    // Write code here that turns the phrase above into concrete actions
    browser.waitForAngularEnabled(false);
    browser.get(url);
});

Then('the title should equal {string}', function (text) {
    // Write code here that turns the phrase above into concrete actions
    expect(browser.getTitle()).to.eventually.equal(text);
});