const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const {Given, When, Then} = require(path.join(
  __dirname,
  '..',
  'node_modules',
  'protractor-cucumber-framework',
  'lib',
  'cucumberLoader'
)).load();
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
var protractor = require('protractor');
var EC = protractor.ExpectedConditions;


Given('I go on {string}', function (url) {
    // Write code here that turns the phrase above into concrete actions
    browser.waitForAngularEnabled(false);
    browser.driver.get(url);
});

Then('the title should equal {string}', function (text) {
    // Write code here that turns the phrase above into concrete actions
    return expect(browser.getTitle()).to.eventually.equal(text); 
});

When('I add todo task {string}',{timeout: 60*1000}, function (text){
    browser.waitForAngularEnabled(true);
    element(by.model('todoList.todoText')).sendKeys(text);
    element(by.css('[value="add"]')).click();   
});

Then('I should see todo list count is incremented to {string}',{timeout: 60*1000}, function(text){
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    return expect(todoList.count()).to.eventually.equal(2);  
});

Then('I should see my task {string} in todo list',{timeout: 60*1000}, function(text){
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    todoList.get(2).getText().then(function(value){
        console.log(value);
    });
    return expect(todoList.get(1).getText()).to.eventually.equal(text);
});