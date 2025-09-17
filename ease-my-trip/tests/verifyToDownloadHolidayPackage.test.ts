import { test, expect } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  // Test data
  const country = 'Thailand';
  const packageName = 'Thailand Escape';

  test('Test Case #1: Verify to Download Holiday Package', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Holidays Page', async () => {
      await easeMyTripWorkflows.navigateToHolidaysPage();
    });

    await test.step('Search and View Holiday Package', async () => {
      await easeMyTripWorkflows.searchAndViewHolidayPackage(
        country,
        packageName
      );
    });

    await test.step('Download Holiday Package PDF', async () => {
      await easeMyTripWorkflows.downloadHolidayPackagePDF();
    });
  })
})