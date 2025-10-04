import { expect, Page } from "@playwright/test";
import {
  clickSelector,
  waitForSelectorToEnable,
} from "../utils/pageUtils";
import {
  pageSelectors,
  tourPackagesSelectors,
} from "../utils/selectors/selectors";
import path from "path";
import { TimeOut } from "../utils/constants/constants";

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
    await packageSelector.scrollIntoViewIfNeeded();
    await clickSelector(packageSelector, tourPackagesSelectors.viewDetailsButton);
  }

  /**
   * Download Tour Package PDF
   */
  public async downloadTourPackagePDF() {
    await waitForSelectorToEnable(this.page, tourPackagesSelectors.downloadPDFButton);
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      await clickSelector(this.page, tourPackagesSelectors.downloadPDFButton),
    ]);
    await download.saveAs("downloads/holiday-packageDetails.pdf");
    await download.path();
    expect(path.extname(download.suggestedFilename())).toBe(".pdf");
  }

  /**
   * Add Tour Package to Compare
   */
  public async addTourPackagesToCompare() {
    await this.page.locator(pageSelectors.addToCompareCheckbox).first().click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await this.page.locator(pageSelectors.addToCompareCheckbox).nth(1).click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await this.page.locator(pageSelectors.addToCompareCheckbox).nth(2).click();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    await clickSelector(this.page, tourPackagesSelectors.compareButton);
    const element2 = this.page.locator(pageSelectors.viewPackageButton).first();
    await element2.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(TimeOut.ShortWaitTime);
    console.log("Successfully scrolled to the element");
  }
}
