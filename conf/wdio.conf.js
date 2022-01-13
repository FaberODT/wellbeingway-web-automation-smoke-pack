const ReportAggregator = require('@rpii/wdio-html-reporter').ReportAggregator;
const HtmlReporter = require('@rpii/wdio-html-reporter').HtmlReporter;

//the following line will fetch the parameter passed at run time
global.tag = process.argv[3];

exports.config = {
    maxInstances: 1,
  
    // How much detail should be logged. The options are:
    // 'silent', 'verbose', 'command', 'data', 'result', 'error'
    logLevel: 'error',
  
    // This defines which kind of device we want to test on, as well as how it should be
    // configured.
    capabilities: [{
        browserName: 'chrome'
    }],

    // sync: true,
  
    // Where the files we are testing can be found.
    specs: [
        './test/specs/**/sessionCalendar.e2e.js'
    ],
  
    // The reporter is what formats your test results on the command line.
    /**
     * HTML report
     */
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
    ],
  
    // wdio will run your tests using the framework below. You can choose from several,
    // much like the reporters. The full list is at https://www.npmjs.com/search?q=wdio-framework
    framework: 'jasmine',
  
    // By default, Jasmine times out within 10 seconds. This is not really enough time
    // for us as it takes a while for Appium to get set up.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 200000
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
        reportAggregator.clean();

        global.reportAggregator = reportAggregator;

        global.emailValueForNewUser;

        global.userNameValue;
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
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