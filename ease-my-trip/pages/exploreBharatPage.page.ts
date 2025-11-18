import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { KeyboardActions, TimeOut } from "../utils/constants/constants";

export class ExploreBharatPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * choose the package and submit the query
     * @param travellers no.of.travellers
     * @param city add the city
     * @param fname First name
     * @param lname Last name
     * @param email email id
     * @param mobileNumber mobile number
     * @param remark remark
     */
    public async choosePackage(travellers: string, city : string, fname: string, lname: string, email: string, mobileNumber: string, remark: string){
        await this.page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await clickSelector(this.page, pageSelectors.wildLifeHaven);
        
        await clickSelector(this.page, pageSelectors.safariPackage);
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
       
        await clickSelector(this.page, pageSelectors.fromDatePicker);
        await clickSelector(this.page, pageSelectors.fromDate);
        await clickSelector(this.page, pageSelectors.toDatePicker);
        await clickSelector(this.page, pageSelectors.toDate);
        await fillTextInput(this.page, pageSelectors.numOfTravellers, travellers);
        await clickSelector(this.page, pageSelectors.addCity);
        await fillTextInput(this.page, pageSelectors.addCity, city);
        await this.page.keyboard.press(KeyboardActions.Enter);
        await fillTextInput(this.page, pageSelectors.fname, fname);
        await fillTextInput(this.page, pageSelectors.lname, lname);
        await fillTextInput(this.page, pageSelectors.email, email);
        const element1 = this.page.locator(pageSelectors.mobilenum);
        await element1.scrollIntoViewIfNeeded();
        await fillTextInput(this.page, pageSelectors.mobilenum, mobileNumber);
        await fillTextInput(this.page, pageSelectors.remark, remark);  
    }
}