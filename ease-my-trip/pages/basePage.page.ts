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

    /**
     * Navigate to bus page
     */
    public async navigateToBusPage() {
        await navigateToUrl(this.page, WebsiteURL.BusPage);
    }

    /**
     * Navigate to gift card page
     */
    public async navigateToGiftCardPage() {
        await navigateToUrl(this.page, WebsiteURL.GiftCardPage);
    }

    /**
     * Navigate to easy dharishanam page
     */
    public async navigateToEasyDarshanPage(){
        await navigateToUrl(this.page, WebsiteURL.EasyDarshanPage);
    }

    /**
     * Navigate to Explore Bharat Page
     */
    public async navigateToExploreBharatPage(){
        await navigateToUrl(this.page, WebsiteURL.ExploreBharatPage);
    }
}