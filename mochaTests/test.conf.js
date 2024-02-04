exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================


    suites: {
        smoke: ['./test/specs/sauce_demo.e2e.js'],
    },

    specs: ["./mochaTests/firstSpec.js"],

    exclude: [],

    maxInstances: 10,

    logLevel: 'info',

    bail: 0,

    framework: 'mocha',

    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
}
