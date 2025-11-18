import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { KeyboardActions, TimeOut } from "../utils/constants/constants";

export class CabPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Select the start city
   * @param startCity start city Name
   */
  public async startCity(startCity: string) {
    await clickSelector(this.page, pageSelectors.hourlyRentalOption);
    await clickSelector(this.page, pageSelectors.cabSourceName);
    await fillTextInput(this.page, pageSelectors.inputSource, startCity);
    await this.page.keyboard.press(KeyboardActions.ArrowRight);
    await clickSelector(this.page, pageSelectors.cabStartCity);
    await clickSelector(this.page, pageSelectors.timePicker);
    await clickSelector(this.page, pageSelectors.rentHour);
    await clickSelector(this.page, pageSelectors.cabSearch);
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
    await this.page.locator(pageSelectors.cabBookNow).first().click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
  }

  /**
   * Booking Details
   * @param cabFirstName First Name
   * @param cabLastName Last Name
   * @param cabEmail Email
   * @param cabMobile Phone Number
   * @param pickup pick-up location
   * @param dropPoint drop location
   */
  public async bookingDetails(cabFirstName: string, cabLastName: string, cabEmail: string, cabMobile: string, pickup: string, dropPoint: string) { 
    await clickSelector(this.page, pageSelectors.msLabel);
    await fillTextInput(this.page, pageSelectors.cabFirstName, cabFirstName);
    await fillTextInput(this.page, pageSelectors.cabLastName, cabLastName);
    await fillTextInput(this.page, pageSelectors.cabEmail, cabEmail);
    await fillTextInput(this.page, pageSelectors.cabMobile, cabMobile);
    await fillTextInput(this.page, pageSelectors.pickupLocation, pickup);
    await fillTextInput(this.page, pageSelectors.dropLocation, dropPoint);
    await this.page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
}
