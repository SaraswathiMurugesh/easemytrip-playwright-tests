import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  test('Test Case #4: Add Tour Packages to Compare', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Holidays Page', async () => {
      await easeMyTripWorkflows.navigateToHolidaysPage();
    });

     await test.step('Search Holiday Package', async () => {
      await easeMyTripWorkflows.searchHolidayPackage("Kerala");
    });

    await test.step('Add Packages to Compare', async () => {
      await easeMyTripWorkflows.CompareTourPackages();
    });
  })
})