import { expect } from "@playwright/test"
export class Link {
    apiresponse = "Link has responded with staus "
    constructor(page) {
        this.page = page
        this.linkElement = page.locator('.btn').nth(5);
        this.tabLink = page.locator('a[href="https://demoqa.com"]');
        this.apicalllink = page.locator('a[href="javascript:void(0)"]')
        this.linkRepo = page.locator('#linkResponse')
    }
    async clickLinkElement() {
        await this.linkElement.click();
    }
    async newtabLink() {
        for (let n = 1; n < await this.tabLink.count(); n++) {
            await this.tabLink.nth(n).click();
            await this.page.bringToFront();
        }
    }
    async apiCallLink() {
        for (let i = 0; i < await this.apicalllink.count(); i++) {
            await this.apicalllink.nth(i).click();
            await expect(this.linkRepo).toContainText(this.apiresponse);
        }

    }
}