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
