module.exports = {
    //browsers: [process.env.BROWSER],
    browsers: ["chromium", "firefox", "webkit"],
    launchOptions: {
        headless: false
    }, contextOptions: {
        recordVideo: {
            dir: 'videos/'
        }
    }
}