/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
const path = require('path');

exports.config = {

    directConnect: true,
     
    capabilities: {
        browserName:'chrome'
    },
  
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
      './features/*.feature'     // Specs here are the cucumber feature files
    ],
  
    // cucumber command line options
    cucumberOpts: {
      require: ['./stepdefs/*.js'],  // require step definition files before executing features
      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      format: 'json:.tmp/results.json',            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
     },

     plugins: [{ 
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }      
    }],

    customData: {
      title: 'Protractor Cucumber BDD Demo',
      data: [
          {label: 'Project', value: 'Demo'},
          {label: 'Release', value: '1.2.3'},
          {label: 'Cycle', value: 'B11221.34321'}
      ]
  },

  metadata: {
    browser: {
        name: 'chrome',
        version: '58'
    },
    device: 'MacBook Pro 15',
    platform: {
        name: 'OSX',
        version: '10.12.6'
    }
},
  
   onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
  };