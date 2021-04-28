describe("Hepsiburada test", () => {
    it("search case", async () => {
        await page.goto("http://www.hepsiburada.com/");
        await page.type('input[class="desktopOldAutosuggestTheme-input"]', "Playwright");
        await page.click('div[class="SearchBoxOld-buttonContainer"]');
        await page.screenshot({path: `./screenshots/hb-${browserName}.png`});
    })

})