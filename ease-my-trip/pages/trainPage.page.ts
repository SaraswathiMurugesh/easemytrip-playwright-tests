import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { KeyboardActions, TimeOut } from "../utils/constants/constants";

export class TrainPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Select the start city
   * @param searchTrainName start city Name
   */
  public async searchTrain(searchTrainName: string) {
    await clickSelector(this.page, pageSelectors.radioButtonOneWay);
    await clickSelector(this.page, pageSelectors.trainName);
    await fillTextInput(this.page, pageSelectors.trainName, searchTrainName);
    await this.page.keyboard.press(KeyboardActions.ArrowRight);
    await clickSelector(this.page, pageSelectors.selectTrain);
    await clickSelector(this.page, pageSelectors.departureDate);
    await clickSelector(this.page, pageSelectors.selectDate);
    await this.page.locator(pageSelectors.trainSearch).first().click();
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
  }

  /**
   * Booking Details
   * @param trainMobile Mobile Number
   * @param trainEmail Mail id
   * @param irctcID IRCTC ID
   */
  public async bookTrainWithDetails(trainEmail: string, trainMobile: string, irctcID:string) { 
    await clickSelector(this.page, pageSelectors.trainBook);
    await this.page.waitForTimeout(TimeOut.ElementWaitTime);
    await fillTextInput(this.page, pageSelectors.irctcID, irctcID);
    await clickSelector(this.page, pageSelectors.proceedButton);
    await fillTextInput(this.page, pageSelectors.trainEmail, trainEmail);
    await fillTextInput(this.page, pageSelectors.trainMobile, trainMobile);
  }
}
