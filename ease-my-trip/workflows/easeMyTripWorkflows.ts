import { Page } from "@playwright/test";
import { BasePage } from "../pages/basePage.page";
import { HolidaysPage } from "../pages/holidaysPage.page";
import { TourPackagesPage } from "../pages/tourPackagesPage.page";

export class EaseMyTripWorkflows extends BasePage{
    readonly page: Page;
    protected holidaysPage: HolidaysPage;
    protected tourPackagesPage: TourPackagesPage;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.holidaysPage = new HolidaysPage(page);
        this.tourPackagesPage = new TourPackagesPage(page);
    }

    /**
     * Search and View Holiday Package
     * @param country Country Name
     * @param packageName Package Name
     */
    public async searchAndViewHolidayPackage(country: string, packageName: string) {
        await this.holidaysPage.searchHolidaysPackage(country);
        await this.tourPackagesPage.viewTourPackage(packageName);
    }

    /**
     * Download Holiday Package PDF
     */
    public async downloadHolidayPackagePDF() {
        await this.tourPackagesPage.downloadTourPackagePDF();
    }
}