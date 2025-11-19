export class GoToelement{
    constructor(page) {
        this.page = page;
        this.Homeelement = page.locator(".card").nth(0);
    }
     
     async siteLink(){
        await this.page.goto("https://demoqa.com/");
     }
    async clickGoElement() {
        await this.Homeelement.click();
    }
  
}