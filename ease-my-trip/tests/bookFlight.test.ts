import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  //Test Data
  const flightFromCity = "Bangalore";
  const flightToCity = 'Chennai';
  const flightFname = 'Saraswathi';
  const flightLname = 'Murugesh';
  const flightEmail = 'saraswathimurugesh28@gmail.com';
  const flightMobile = '8015106724';
  const contactEmail = 'saraswathimurugesh28@gmail.com';
  const contactMobile = '8015106724';

  test('Test Case #10: Book the Flight', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Flight Page', async () => {
      await easeMyTripWorkflows.navigateToFlightsPage();
    });

    await test.step('Search Flight', async () => {
      await easeMyTripWorkflows.searchFlight(flightFromCity, flightToCity);
    });

    await test.step('Fill the Details to Book Flight', async () => {
      await easeMyTripWorkflows.flightBookingDetails(flightFname, flightLname, flightEmail, flightMobile, contactEmail, contactMobile);
    });
  });
})