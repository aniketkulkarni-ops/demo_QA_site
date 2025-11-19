export class Textbox {
    constructor(page){
        this.page=page
        this.textBoxElement=page.locator('.btn').filter({ hasText: "Text Box"});
        this.username=page.locator("#userName");
        this.useremail= page.locator("#userEmail");
        this.currentaddress=page.locator("#currentAddress");
        this.permentaddress=page.locator("#permanentAddress")
        this.submit=page.locator("#submit");
    }
    async clickTextBox(){
        await this.textBoxElement.click();
    }
    async fillform(name,mail,temproryaddress,orignaladdress){
        await this.username.fill(name);
        await this.useremail.fill(mail);
        await this.currentaddress.fill(temproryaddress);
        await this.permentaddress.fill(orignaladdress);
        await this.submit.click();
    }
}