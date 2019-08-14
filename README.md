# protractor-cucumber-demo

The purpose of this repo is to demostrate how to implement BDD using Cucumber along with Protractor framework.

Background:

1/ Protractor is an open source; end to end UI testing framework for Angular and Angular JS Application; Protractor is a wrapper around WebDriverJS.

2/ Cucumber is a tool that supports Behavioural Driven Development. BDD is a practice  aims to narrow the communication gaps between team members, foster better understanding of the customer and promote continuous communication with real world examples.

How it works:

Protractor works in conjuction with Selenium to provide an automated testing infrastructure that can simulate user interactions with an angular application running inside a browser or mobiule.

Test Scripts sends command to Selenium Server(Can run locally or remote) which intern communicates with the browser driver.

Setup Instruction:

1. npm install protractor

2. install cucumber

npm install -g cucumber

npm install --save-dev protractor-cucumber-framework

3. install mocha

 npm install -g mocha

 npm install chai

 npm install chai-as-promised

4. npm install protractor-multiple-cucumber-html-reporter-plugin

5. clone the repo, from the root folder and run through command line 
protractor config.js

6. check the command prompt console or HTML report to verify the test results under temp folder (.tmp/report/index.html)
 


