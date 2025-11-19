import { expect } from "@playwright/test";
export class radioButton{
    expectradioyestext = 'Yes';
    expectradioimpressesivetext = 'Impressive';
    constructor(page){
        this.page=page
        this.radioButtonElement=page.locator('.btn').filter({ hasText: "Radio Button"});
        this.yesradio= page.locator('label[for="yesRadio"]');
        this.consferYesRadio =page.locator('.text-success');
        this.impressiveRadio =  page.locator('label[for="impressiveRadio"]');
        this.consferimprressiveRadio =   page.locator('.text-success');
    }
    async clickRadioButton (){
        await this.radioButtonElement.click();
    }
    async clickyesimpressive(){
        await this.yesradio.click();
        await expect(this.consferYesRadio).toContainText(this.expectradioyestext);
        await this.impressiveRadio.click();
        await expect(this.consferimprressiveRadio).toContainText(this.expectradioimpressesivetext);
    }
}