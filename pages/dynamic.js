import { expect } from "@playwright/test"
export class dynamicProp{
    constructor(page){
        this.page = page
        this.elementDynamicprop = page.locator('.btn').filter({ hasText: "Dynamic Properties"});
        this.enblebtn = page.locator('#enableAfter');
        this.visiblebtn = page.locator('#visibleAfter');
    }

    async clickDymanicProp(){
        await this.elementDynamicprop.click();
    }
    async clickVerifyEnableVisible(){
        await expect(this.enblebtn).toBeEnabled({ timeout: 10000 });
        console.log("Btn is enable now");
        await expect(this.visiblebtn).toBeVisible();
         console.log('Btn is visible');
    }
}