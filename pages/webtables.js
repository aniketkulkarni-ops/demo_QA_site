import { expect } from "@playwright/test";
export class webTable{
    constructor(page){
          
          this.page=page
          this.radioButtonElement=page.locator('.btn').filter({ hasText: "Web Tables"});
          this.addbutton =page.locator("#addNewRecordButton");
          const tableform = page.locator('.mr-sm-2');
          this.firstname=tableform.nth(0);
          this.lastname=tableform.nth(1);
          this.email=tableform.nth(2);
          this.age=tableform.nth(3);
          this.salary=tableform.nth(4);
          this.department=tableform.nth(5);
          this.submit = page.locator("#submit");
          this.Colum = page.locator(".rt-tr-group");
          this.row= page.locator("[title='Delete']");
    }
    async gotowebtable(){
        await this.radioButtonElement.click();
        await this.addbutton.click();
    }
    async tableformfill(fname,lname,mail,live,payment,dep){
        await this.firstname.fill(fname);
        await this.lastname.fill(lname);
        await this.email.fill(mail);
        await this.age.fill(live);
        await this.salary.fill(payment);
        await this.department.fill(dep);
        await this.submit.click();
    }
    async deletecol(n,name){
         const text =await this.Colum.nth(n).textContent();
         if (text?.includes(name)) {
         await this.row.nth(n).click();
          }
        }
    
}