import { expect } from "@playwright/test"
class FilePage {
    constructor(page) {
        this.page = page;
        this.uploadDonwaled =page.locator('.btn').filter({ hasText: "Upload and Download"});
        this.downloadButton = page.locator('#downloadButton');
        this.uploadInput = page.locator('#uploadFile');
        this.uploadedPath = page.locator('#uploadedFilePath');
    }
    async filePageClick(){
        await this.uploadDonwaled.click();
    }

    async downloadFile(savePath = 'tests/downloaded-files/report.pdf') {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadButton.click()
        ]);

        await download.saveAs(savePath);
        return savePath;
    }

    async uploadFile(filePath) {
        await this.uploadInput.setInputFiles(filePath);
    }

    async verifyUpload(fileName) {
        await expect(this.uploadedPath).toContainText(fileName);
    }
}

module.exports = { FilePage };
