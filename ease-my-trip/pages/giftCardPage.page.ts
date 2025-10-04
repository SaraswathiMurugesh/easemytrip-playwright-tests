import { Page } from "@playwright/test";
import { clickSelector, fillTextInput } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { TimeOut } from "../utils/constants/constants";

export class GiftCardPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  
  /**
   * Select Birthday Gift Voucher
   */
  public async selectBirthdayGiftVoucher() {
    await clickSelector(this.page, pageSelectors.birthdayGiftCardOption);
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
  }

  /**
   * Buy Gift Card
   * @param amount Gift Card Amount
   * @param quantity Quantity of Gift Cards
   * @param month Month of Gift Card Validity
   * @param senderName Name of the Sender
   * @param senderEmail Email of the Sender    
   * @param senderMobile Mobile Number of the Sender
   * @param receiverName Name of the Receiver
   * @param receiverEmail Email of the Receiver    
   * @param receiverMobile Mobile Number of the Receiver
   */
    public async buyGiftCard(amount: string, quantity: string, month: string, senderName: string, senderEmail: string, senderMobile: string, receiverName: string, receiverEmail: string, receiverMobile: string) {
        await fillTextInput(this.page, pageSelectors.denominationAmount, amount);
        await this.page.locator(pageSelectors.quantityDropdown).selectOption(quantity);
        await clickSelector(this.page, pageSelectors.laterButton);
        await this.page.locator(pageSelectors.monthDropdown).selectOption(month);
        await clickSelector(this.page, pageSelectors.dateSelection);
        await fillTextInput(this.page, pageSelectors.senderNameInputField, senderName);
        await fillTextInput(this.page, pageSelectors.senderEmailInputField,  senderEmail);
        await fillTextInput(this.page, pageSelectors.senderMobileInputField, senderMobile);
        await fillTextInput(this.page, pageSelectors.receiversNameInputField, receiverName);
        await fillTextInput(this.page, pageSelectors.receiversEmailInputField, receiverEmail);
        await fillTextInput(this.page, pageSelectors.retypeEmailInputField, receiverEmail);
        await fillTextInput(this.page, pageSelectors.receiversMobileInputField, receiverMobile);
        await clickSelector(this.page, pageSelectors.termsAndConditionsCheckbox);
    }
}
