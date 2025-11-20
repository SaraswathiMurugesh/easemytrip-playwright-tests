import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { TimeOut } from "../utils/constants/constants";

export class FlightPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Select for Flight
   * @param flightFromCity from city Name
   * @param flightToCity to city Name
   */
  public async searchFlight(flightFromCity: string, flightToCity: string) { 
    await clickSelector(this.page, pageSelectors.flightFromTextBox);
    await clickSelector(this.page, pageSelectors.flightFromInputField);
    await fillTextInput(this.page, pageSelectors.flightFromInputField, flightFromCity);
    await clickSelector(this.page, pageSelectors.flightFromSugg);
    await clickSelector(this.page, pageSelectors.flightToInputField);
    await fillTextInput(this.page, pageSelectors.flightToInputField, flightToCity);
    await this.page.locator(pageSelectors.flightTo, { hasText: 'Chennai(MAA)' }).click();
    await clickSelector(this.page, pageSelectors.selectFlightDate);
    await clickSelector(this.page, pageSelectors.flightSearch);
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
  }

  /**
   * Flight Booking Details
   * @param flightFname First Name
   * @param flightLname Last Name
   * @param flightEmail Optional Email
   * @param flightMobile Optional Phone Number
   * @param contactEmail Email
   * @param contactMobile Mobile Number
   */
  public async flightBookingDetails(flightFname: string, flightLname: string, flightEmail: string, flightMobile: string, contactEmail: string, contactMobile: string) { 
    await clickSelector(this.page, pageSelectors.flightBook);
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await this.page.locator(pageSelectors.flightTitle).selectOption("Ms");

    const element1 = this.page.locator(pageSelectors.flightFname);
    await element1.scrollIntoViewIfNeeded();
    await fillTextInput(this.page, pageSelectors.flightFname, flightFname);
    await fillTextInput(this.page, pageSelectors.flightLname, flightLname);
    await fillTextInput(this.page, pageSelectors.flightEmail, flightEmail);
    await fillTextInput(this.page, pageSelectors.flightMobile, flightMobile);

     const element2 = this.page.locator(pageSelectors.contactEmail);
    await element2.scrollIntoViewIfNeeded();
    await fillTextInput(this.page, pageSelectors.contactEmail, contactEmail);
    await fillTextInput(this.page, pageSelectors.contactMobile, contactMobile);
  }
}
