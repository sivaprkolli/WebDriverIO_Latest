exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================

    runner: 'local',

    suites: {
        smoke: ['./test/specs/multiple_elements_e2e.js'],
    },

    specs: ["./test/specs/multiple_elements_e2e.js"],

    exclude: [],

    maxInstances: 10,

    capabilities: [{
        browserName: 'chrome'
    }],


    logLevel: 'info',

    bail: 0,

    baseUrl: "https://www.saucedemo.com",

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
        await browser.closeWindow();
    },
}
