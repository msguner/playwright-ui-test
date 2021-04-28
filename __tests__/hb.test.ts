import {chromium, Browser, Page} from "playwright";

let browser: Browser;
beforeAll(async () => {
    browser = await chromium.launch();
});
afterAll(async () => {
    await browser.close();
});

let page: Page;
beforeEach(async () => {
    page = await browser.newPage();
});
afterEach(async () => {
    await page.close();
});

describe("Hepsiburada test", () => {
    it("search case", async () => {
        await page.goto("https://hepsiburada.com");
        await page.type('input[class="desktopOldAutosuggestTheme-input"]', "Playwright");
        await page.click('div[class="SearchBoxOld-buttonContainer"]');
    })

})