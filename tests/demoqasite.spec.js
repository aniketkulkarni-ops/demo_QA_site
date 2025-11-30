const { test, expect } = require('@playwright/test')
import { checkBox } from '../pages/checkbox';
import { GoToelement, } from '../pages/gototoelements';
import { Textbox } from '../pages/textbox';
import { radioButton } from '../pages/radiobutton';
import { webTable } from '../pages/webtables';
import { Button } from '../pages/button';
import { Link } from '../pages/links';
import { FilePage } from '../pages/uploaddonwaled';
import{dynamicProp} from'../pages/dynamic';
test("Demo QA", async ({ page }) => {
    const homepage = new GoToelement(page)
    await homepage.siteLink();
    await homepage.clickGoElement();
    // const dynamicclick = 'You have done a dynamic click'
    // const doubleclick = 'You have done a double click'
    // const rightclick = 'You have done a right click'
    // const expectradioyestext = 'Yes'
    // const expectradioimpressesivetext = 'Impressive'
    // let Colmdata = "Aniket"
    // const apiresponse = "Link has responded with staus "
//textbox
    const elements = page.locator('.btn');
    const textbox = new Textbox(page);
    await textbox.clickTextBox();
    await textbox.fillform('Aniket Chandrachud Kulkarni', 'Ak@uqrd', 'Mezza9 hinjewadi phase 2', 'mardi tal-man dist-satar 415508');
//check box 
    const checkbox = new checkBox(page)
    await checkbox.clickCheckbox();
    await checkbox.clickInnerBox();
    console.log("The check box are checjed");
//radionutton
    const radiobutton = new radioButton(page);
    await radiobutton.clickRadioButton();
    await radiobutton.clickyesimpressive();
    console.log("Radio button are clicked");
//webtables
    const webtables = new webTable(page)
    await webtables.gotowebtable();
    await webtables.tableformfill('Aniket', 'Kulkari', 'aniket12@gmail.com', '99', '1000', 'xyz');
    console.log('One table added succefully')
    await webtables.deletecol(3, 'Aniket');
    console.log('table deleted succefully')
//Buttons
    const button = new Button(page);
    await button.clickButtonElement();
    await button.clickVerifybutton();
    console.log("Clicked and verify all the buttons");
//Link
    const links = new Link(page)
    await links.clickLinkElement();
    await links.newtabLink();
    await links.apiCallLink();
    console.log('we are receving the API calls')
//upload & donwaled
    const uploaddonwaled= new FilePage(page);
    await uploaddonwaled.filePageClick();
    await uploaddonwaled.downloadFile();
    await uploaddonwaled.uploadFile('tests/downloaded-files/report.pdf');
    await uploaddonwaled.verifyUpload('report.pdf');
    console.log("File uploaded succefully");
//Dynamic properties
    const dynamic= new dynamicProp(page)
    await dynamic.clickDymanicProp();
    await dynamic.clickVerifyEnableVisible();
    await page.pause();
})