require('dotenv').config();
const ReportAggregator = require('@rpii/wdio-html-reporter').ReportAggregator;
const HtmlReporter = require('@rpii/wdio-html-reporter').HtmlReporter;
exports.config = {

  user: process.env.BS_USER,
  key: process.env.BS_KEY,

  updateJob: false,

  specs: ['./test/specs/**/login.e2e.js'],

  exclude: [],
  maxInstances: 10,

  capabilities: [{
    'browser': 'chrome',
    'browser_version': '97.0',
    'os': 'Windows',
    'os_version': '10'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',

  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },

  reporters: ['spec',
        [HtmlReporter, {
            debug: true,
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            
            //to show the report in a browser when done
            showInBrowser: true,

            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,
        }]
        // ,
        // [video, {
        //     saveAllVideos: false,       // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        // }]
    ],

  framework: 'jasmine',
  // By default, Jasmine times out within 10 seconds. This is not really enough time
  // for us as it takes a while for Appium to get set up.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 900000
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
   onPrepare: function (config, capabilities) {
    let reportAggregator = new ReportAggregator({
        outputDir: './reports/html-reports/',
        filename: 'master-report.html',
        reportTitle: 'Master Report',
        
        // to use the template override option, can point to your own file in the test project:
        // templateFilename: path.resolve(__dirname, '../src/wdio-html-reporter-alt-template.hbs')
    });
    // let reportAggregator1 = new ReportAggregator({
    //   outputDir: './reports/html-reports/screenshots/',
      
    //   // to use the template override option, can point to your own file in the test project:
    //   // templateFilename: path.resolve(__dirname, '../src/wdio-html-reporter-alt-template.hbs')
    // });
    reportAggregator.clean();
    // reportAggregator1.clean();
    global.reportAggregator = reportAggregator;
    // global.reportAggregator1 = reportAggregator1;
  },

  // Code to mark the status of test on BrowserStack based on the assertion status
  afterTest: function (test, context, { error, result, duration, passed, retries }) {
    if(passed) {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Assertions passed"}}');
    } else {
      browser.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "At least 1 assertion failed"}}');
    }
    const path = require('path');
    const moment = require('moment');
    // if test passed, ignore, else take and save screenshot.
    if (test.passed) {
        return;
    }
    const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
    const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
    browser.saveScreenshot(filepath);
    process.emit('test:screenshot', filepath);
  },
  /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
  onComplete: function(exitCode, config, capabilities, results) {
   (async () => {
       await global.reportAggregator.createReport( {
           config: config,
           capabilities: capabilities,
           results : results
           });
      })();
  },
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps, index){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  exports.config.capabilities[index] = { ...caps, ...caps['browser'] && { browserName: caps['browser'] } };
});