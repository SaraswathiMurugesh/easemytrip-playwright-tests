import { Page } from "@playwright/test";
// Update the import path to match your project structure, for example:
import { clickSelector, fillTextInput, waitForSelectorToDisable } from "../utils/pageUtils";
import { pageSelectors } from "../utils/selectors/selectors";
import { KeyboardActions } from "../utils/constants/constants";

export class HolidaysPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Search Holidays Package
     * @param country Country Name
     */
    public async searchHolidaysPackage(country: string) {
        await clickSelector(this.page, pageSelectors.holidaySearchInputField);
        await fillTextInput(this.page, pageSelectors.holidaySearchInputField, country);
        await this.page.locator(pageSelectors.holidaysCityOptions(country)).first().click();
        await waitForSelectorToDisable(this.page, pageSelectors.holidaySearchLoader);
    }
}