Feature: Angular UI test using Protactor-Cucumber
   As a user of Protractor
   I should be able to use Cucumber
   to run my E2E testsFeature Description

Scenario: add task - angular ui
   Given I go on 'https://angularjs.org'
   When I add todo task 'write first protractor test'
   Then I should see todo list count is incremented to '2'
   Then I should see my task 'write first protractor test' in todo list