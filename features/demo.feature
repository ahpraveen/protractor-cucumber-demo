Feature: Angular UI test using Protactor-Cucumber
   As a user of Protractor
   I should be able to use Cucumber
   to run my E2E testsFeature Description

Scenario: Run a demo UI test
    Given I go on "https://angular.io"
    Then the title should equal "Angular testing" 