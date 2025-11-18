import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  //Test Data
  const destinationCity = "Hot Air Balloon Ride With Gourmet Breakfast and Falcon Show";
  const countryName = 'India';
  const activityFirstName = 'Saraswathi';
  const activityLastName = 'Murugesh';
  const activityEmail = 'saraswathimurugesh28@gmail.com';
  const activityMobile = '8015106724';
  const passportNo = 'V0000028';
  const enterPanName = 'Saraswathi';
  const panNumber = 'ABCDE1234F';
  const travelKg = 'kg';
  const travellerWeight = '50';

  test('Test Case #7: Select the Activity', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Activities Page', async () => {
      await easeMyTripWorkflows.navigateToActivitiesPage();
    });

    await test.step('Search Destination City Name for Activity', async () => {
      await easeMyTripWorkflows.chooseActivity(destinationCity);
    });

    await test.step('Select Date for Activity', async () => {
      await easeMyTripWorkflows.selectDateForActivity();
    });

    await test.step('View Activity details', async () => {
      await easeMyTripWorkflows.viewActivityPackageDetails();    
    });

    await test.step('Book the Package and Enter the Details', async () => {
      await easeMyTripWorkflows.bookActivityPackage(activityFirstName, activityLastName, activityEmail, activityMobile, countryName, passportNo, travelKg, travellerWeight, enterPanName, panNumber);
    });
  });
})