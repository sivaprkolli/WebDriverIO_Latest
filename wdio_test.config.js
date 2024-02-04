exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',

    suites: {
        smoke: ['./test/specs/sauce_demo.e2e.js'],
    },

    specs: ["./test/specs/sauce_test.e2e.js"],

    exclude: [],

    maxInstances: 10,

    capabilities: [{
        browserName: 'firefox'
    }],


    logLevel: 'info',

    bail: 0,

    baseUrl: "https://www.saucedemo.com/",

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    reporters: ['spec', 'timeline', { outputDir: 'results',
                                      embedImages: true,
                                    screenshotStrategy: 'on:error' }],

    // onPrepare: function (config, capabilities) {
    //     reportAggregator = new ReportAggregator(
    //         {
    //             outputDir: './reports/html-reports/',
    //             filename: process.env.TEST_BROWSER + '-master-report.html',
    //             reportTitle: 'Micro-Magic Web Test Report',
    //             browserName: process.env.TEST_BROWSER ? process.env.TEST_BROWSER : 'unspecified',
    //             showInBrowser: true
    //         });

    //     reportAggregator.clean();
    // },

    // onComplete: function (exitCode, config, capabilities, results) {
    //     (async () => {
    //         await reportAggregator.createReport();
    //     })();
    // },

    reporters: ['spec',
    ["video", {
        saveAllVideos: true,       // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        videoRenderTimeout: 5,      // Max seconds to wait for a video to finish rendering\
        outputDir: 'reports/html-reports/screenshots',
    }],
    ["html-nice", {
        outputDir: './reports/html-reports/',
        filename: 'testReport.html',
        reportTitle: 'Test Report Title',
        linkScreenshots: true,
        //to show the report in a browser when done
        showInBrowser: true,
        collapseTests: false,
        //to turn on screenshots after every test
        useOnAfterCommandForScreenshot: true
    }
    ]
],

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
       // await browser.closeWindow();
    },
}
