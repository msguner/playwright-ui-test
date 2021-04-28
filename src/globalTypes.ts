import { Browser, Page } from "playwright";

declare global {
    let page: Page;
    let browser: Browser;
    let browserName: string;
}