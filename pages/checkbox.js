import { expect } from "@playwright/test";
export class checkBox{
      ValidChexkBox ='You have selected ' 
     constructor(page,){
        this.page = page;
        this.checkBoxElement =page.locator('.btn').filter({ hasText: "Check Box"});
        this.innerCheckBox = page.locator('.rct-icon.rct-icon-uncheck');
        this.result = page.locator('#result')
     }
     async clickCheckbox(){
        await this.checkBoxElement.click();
     }
     async clickInnerBox(){
        for(let i=0;i<await this.innerCheckBox.count();i++){
            await this.innerCheckBox.nth(i).click();
            await expect(this.result).toContainText(this.ValidChexkBox)
        }
     }
}