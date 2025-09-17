import { Page } from "@playwright/test";
import { navigateToUrl } from "../utils/pageUtils";
import { WebsiteURL } from "../utils/constants/constants";

export class BasePage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to home page
     */
    public async navigateToHomePage() {
        await navigateToUrl(this.page, WebsiteURL.HomePage);
    }

    /**
     * Navigate to holiday page
     */
    public async navigateToHolidaysPage() {
        await navigateToUrl(this.page, WebsiteURL.HolidayPage);
    }
}