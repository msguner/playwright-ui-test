module.exports = {
    //browsers: [process.env.BROWSER],
    // browsers: ["chromium", "firefox", "webkit"],
    browsers: ["chromium"],
    // devices: [],
    launchOptions: {
        headless: false,
        // slowMo: 600,
    },
    contextOptions: {
        recordVideo: {
            dir: 'videos/'
        },
        viewport: {width: 1600, height: 900},
        // ...require('playwright').devices['iPhone 11 Pro'],
        ignoreHTTPSErrors: true,
    },
}