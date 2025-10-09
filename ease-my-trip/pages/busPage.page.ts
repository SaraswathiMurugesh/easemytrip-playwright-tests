import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { TimeOut } from "../utils/constants/constants";

export class BusPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Select from city By Name
   * @param sourceCity city Name
   */
  public async fromCity(sourceCity: string) {
    await clickSelector(this.page, pageSelectors.fromCityInputField);
    await fillTextInput(this.page, pageSelectors.fromCityInputField, sourceCity);
    await this.page.locator(pageSelectors.sourceCityOptions(sourceCity)).first().click();
  }

  /**
   * Select to city By Name
   * @param destinationCity city Name
   */
  public async toCity(destinationCity: string) {
    await clickSelector(this.page, pageSelectors.toCityInputField);
    await fillTextInput(this.page, pageSelectors.toCityInputField, destinationCity);
    await this.page.locator(pageSelectors.destinationOptions(destinationCity)).first().click();
  }

  /**
   * Select Journey Date
   */
  public async selectJourneyDate() {
    await clickSelector(this.page, pageSelectors.datePicker);
    await clickSelector(this.page, pageSelectors.nextButton);
    await clickSelector(this.page, pageSelectors.selectDate);
    await clickSelector(this.page, pageSelectors.searchButton);
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
  }

  /**
   * Select Bus and Seat
   */
  public async selectBusAndSeat() { 
   // await clickSelector(this.page, pageSelectors.recommendedBusOption);
    await this.page.locator(pageSelectors.selectSeatButton).first().click();
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
    await this.page.locator(pageSelectors.seatSelectionFrame).first().click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await this.page.locator(pageSelectors.boardingPointRadioButton).first().click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await this.page.locator(pageSelectors.droppingPointRadioButton).first().click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await this.page.locator(pageSelectors.continueToPaymentButton).first().click();
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
  }

  /**
   * Fill Passenger Details
   * @param title Title
   * @param firstName First Name
   * @param lastName Last Name
   * @param age Age
   * @param email Email
   * @param phoneNumber Phone Number
   */
  public async fillPassengerDetails(title: string, firstName: string, lastName: string, age: string, email: string, phoneNumber: string) {
    await this.page.locator(pageSelectors.titleDropdown).selectOption(title);
    await fillTextInput(this.page, pageSelectors.firstNameInputField, firstName);
    await fillTextInput(this.page, pageSelectors.lastNameInputField, lastName);
    await fillTextInput(this.page, pageSelectors.ageInputField, age);
    const element1 = this.page.locator(pageSelectors.busEmailInputField);
    await element1.scrollIntoViewIfNeeded();
    await fillTextInput(this.page, pageSelectors.busEmailInputField, email);
    await fillTextInput(this.page, pageSelectors.phoneNumberInputField, phoneNumber);
  }
}
