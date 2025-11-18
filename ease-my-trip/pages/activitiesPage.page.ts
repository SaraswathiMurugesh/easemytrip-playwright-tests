import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { KeyboardActions, TimeOut } from "../utils/constants/constants";

export class ActivitiesPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Select the destination city
   * @param destinationCity destination city Name
   */
  public async destinationCity(destinationCity: string) {
    await clickSelector(this.page, pageSelectors.whereButton);
    await fillTextInput(this.page, pageSelectors.whereButton, destinationCity);
    await this.page.keyboard.press(KeyboardActions.ArrowRight);
    await this.page.locator(pageSelectors.activityName).first().click();
  }

  /**
   * Select the date for activity
   */
  public async dateForActivity() {
    await clickSelector(this.page, pageSelectors.whenButton);
    await clickSelector(this.page, pageSelectors.activityDate);
    await clickSelector(this.page, pageSelectors.activitySearchButton);
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
  }

  /**
   * Check the package details
   */
  public async packageDetails() {
    await clickSelector(this.page, pageSelectors.packageOption);
    await this.page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    
    await this.page.locator(pageSelectors.overviewOption).nth(1).click();
    await this.page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    
    await clickSelector(this.page, pageSelectors.inclusionOption);
    await this.page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);

    await clickSelector(this.page, pageSelectors.addressOption);
    await this.page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
  }

  /**
   * Book the package
   * @param activityFirstName First Name
   * @param activityLastName Last Name
   * @param activityEmail Email
   * @param activityMobile Phone Number
   * @param countryName Country Name
   * @param passportNo Passport Number
   * @param travellerWeight Traveller Weight
   * @param enterPanName Enter Pan Name
   * @param panNumber Pan Number
   * @param travelKg Travel Kg
   */
  public async bookThePackage(activityFirstName: string, activityLastName: string, activityEmail: string, activityMobile: string, countryName:string, passportNo: string, travelKg: string, travellerWeight: string, enterPanName: string, panNumber: string) { 
    await clickSelector(this.page, pageSelectors.bookNowButton);
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await clickSelector(this.page, pageSelectors.titleId);
    await clickSelector(this.page, pageSelectors.titleButton);
    await fillTextInput(this.page, pageSelectors.activityFirstName, activityFirstName);
    await fillTextInput(this.page, pageSelectors.activityLastName, activityLastName);
    
    await fillTextInput(this.page, pageSelectors.countryName, countryName);
    await fillTextInput(this.page, pageSelectors.passportNo, passportNo);
    await this.page.locator(pageSelectors.weight).selectOption(travelKg);
    await fillTextInput(this.page, pageSelectors.travellerWeight, travellerWeight);
   
    const element1 = this.page.locator(pageSelectors.activityEmail);
    await element1.scrollIntoViewIfNeeded();
    await fillTextInput(this.page, pageSelectors.activityEmail, activityEmail);
    await fillTextInput(this.page, pageSelectors.activityMobile, activityMobile);

    await fillTextInput(this.page, pageSelectors.enterPanName, enterPanName);
    await fillTextInput(this.page, pageSelectors.panNumber, panNumber);
  }
}
