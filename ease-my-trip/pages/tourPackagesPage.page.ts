import { expect, Page } from "@playwright/test";
import { clickSelector, waitForSelectorToEnable } from "../utils/pageUtils";
import { tourPackagesSelectors } from "../utils/selectors/selectors";
import path from "path";

export class TourPackagesPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    /**
     * Select Tour Package By Name
     * @param packageName Package Name
     */
    public async viewTourPackage(packageName: string) {
        const packageSelector = this.page.locator(tourPackagesSelectors.packageName(packageName));
        await clickSelector(packageSelector, tourPackagesSelectors.viewDetailsButton);
        await waitForSelectorToEnable(this.page, tourPackagesSelectors.downloadPDFButton);
    }

    /**
     * Download Tour Package PDF
     */
    public async downloadTourPackagePDF() {
        const [ download ] = await Promise.all([
            this.page.waitForEvent('download'),
            await clickSelector(this.page, tourPackagesSelectors.downloadPDFButton)
        ]);
        await download.saveAs('downloads/holiday-packageDetails.pdf');
        await download.path();
        expect(path.extname(download.suggestedFilename())).toBe('.pdf');
    }
}

