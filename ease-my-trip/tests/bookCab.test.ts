import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  //Test Data
  const startCity = "Chennai";
  const cabFirstName = 'Saraswathi';
  const cabLastName = 'Murugesh';
  const cabEmail = 'saraswathimurugesh28@gmail.com';
  const cabMobile = '8015106724';
  const pickup = 'Guindy';
  const dropPoint = 'Chennai Central';

  test('Test Case #8: Book the Cab', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Cab Page', async () => {
      await easeMyTripWorkflows.navigateToCabPage();
    });

    await test.step('Search Start City', async () => {
      await easeMyTripWorkflows.startCity(startCity);
    });

    await test.step('Book the Cab and Fill the Details', async () => {
      await easeMyTripWorkflows.fillBookingDetails(cabFirstName, cabLastName, cabEmail, cabMobile, pickup, dropPoint);
    });
  });
})