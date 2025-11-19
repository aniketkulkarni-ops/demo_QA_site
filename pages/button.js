import { expect } from "@playwright/test";
export class Button{
     doubleclick='You have done a double click';
     rightclick = 'You have done a right click';
     dynamicclick = 'You have done a dynamic click';
     constructor(page){
        this.page=page
        this.buttonelement=page.locator('.btn').filter({ hasText: "Buttons"});
        this.doubleclickbtn =page.locator("#doubleClickBtn");
        this.rightclickbtn =  page.locator("#rightClickBtn");
        this.dynamicclickbtn = page.getByRole("button",{name:'Click Me',exact:true});
        this.doubleClickText =page.locator('#doubleClickMessage');
        this.rightClickText = page.locator("#rightClickMessage");
        this.dynamiClickText = page.locator("#dynamicClickMessage")
     }
     async clickButtonElement(){
        await this.buttonelement.click();
     }
     async clickVerifybutton (){
        await this.doubleclickbtn.dblclick();
        await expect(this.doubleClickText).toContainText(this.doubleclick);
        await this.rightclickbtn.click({ button: 'right',timeout: 10000 });;
        await expect(this.rightClickText).toContainText(this.rightclick);
        await this.dynamicclickbtn.click();
        await expect(this.dynamiClickText).toContainText(this.dynamicclick);

     }

}