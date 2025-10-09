import { Page } from "@playwright/test";
import { clickSelector, fillTextInput, setInputTextUsingJS } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { TimeOut } from "../utils/constants/constants";

export class DharshanPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * View Package Details
     */
    public async packageDetails(){
        await clickSelector(this.page, pageSelectors.overviewButton);
        await this.page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await clickSelector(this.page, pageSelectors.itineraryButton);
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await this.page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await clickSelector(this.page, pageSelectors.inclusionButton);
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await this.page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await clickSelector(this.page, pageSelectors.additionalInfo);
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
        await this.page.evaluate(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    }

    /**
     * Fill the Booking Details
     * @param firstName first name     
     * @param lastName last name
     * @param dateOfBirth date of birth
     * @param passportNumber passport number
     * @param passportExpiry passport expiry
     * @param email email id
     * @param mobileno mobile number
     */
    public async bookingDetails(firstName : string, firstName1: string, lastName: string, lastName1: string, dateOfBirth1:string, dateOfBirth2: string, passportNumber1: string, passportNumber2: string, passportExpiry1: string, passportExpiry2: string, email: string, mobileno: string){
        await clickSelector(this.page, pageSelectors.bookButton);
       // await this.page.locator(pageSelectors.selectVisitDate).innerText("");
        await this.page.getByText('8 ₹14,299', { exact: true }).click();
        await clickSelector(this.page, pageSelectors.calculateAmount);
        await clickSelector(this.page, pageSelectors.continueBooking);
        await this.page.waitForTimeout(TimeOut.ShortWaitTime);

        //First Passenger details
        await clickSelector(this.page, pageSelectors.mrLabel);
        await this.page.locator(pageSelectors.firstName).first().fill(firstName);
        await this.page.locator(pageSelectors.lastName).first().fill(lastName);
        await setInputTextUsingJS(this.page.locator(pageSelectors.dateOfBirth).first(), dateOfBirth1);
        await this.page.locator(pageSelectors.passportNumber).first().fill(passportNumber1);
        await setInputTextUsingJS(this.page.locator(pageSelectors.passportExpiry).first(), passportExpiry1);
        await this.page.locator(pageSelectors.mealsPreference).first().selectOption('Veg Meal');

        //Second Passenger details
        await clickSelector(this.page, pageSelectors.mrsLabel);
        await this.page.locator(pageSelectors.firstName).nth(1).fill(firstName1);
        await this.page.locator(pageSelectors.lastName).nth(1).fill(lastName1);
        await setInputTextUsingJS(this.page.locator(pageSelectors.dateOfBirth).nth(1), dateOfBirth2);
        await this.page.locator(pageSelectors.passportNumber).nth(1).fill(passportNumber2);
        await setInputTextUsingJS(this.page.locator(pageSelectors.passportExpiry).nth(1), passportExpiry2);
        await this.page.locator(pageSelectors.mealsPreference).nth(1).selectOption('Non-Veg Meal');

        await fillTextInput(this.page, pageSelectors.emailAddress, email);
        await fillTextInput(this.page, pageSelectors.mobileNumber, mobileno);
    }
}