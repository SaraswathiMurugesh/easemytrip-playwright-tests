import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  // Test data
  const country = 'Rameswaram';
  const packageName = 'Rameswaram Spiritual Retreat';
  const firstName = 'Murugesh';
  const lastName = 'Balakrishnan';
  const dateOfBirth1 = '1966-07-02';
  const passportNumber1 = 'V0000028';
  const passportExpiry1 = '2030-09-30';
  const firstName1 = 'Dhanalakshmi';
  const lastName1 = 'Murugesh';
  const dateOfBirth2 = '1972-03-19';
  const passportNumber2 = 'V1234567';
  const passportExpiry2 = '2031-09-30';
  const email = 'saraswathimurugesh28@gmail.com';
  const mobileno = '8015106724';


  test('Test Case #3: Verify to book Temple Dharisanam Package', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Dharisanam Page', async () => {
      await easeMyTripWorkflows.navigateToEasyDarshanPage();
    });

    await test.step('Search and View Temple Package', async () => {
      await easeMyTripWorkflows.searchAndViewPackage(
        country,
        packageName
      );
    });

    await test.step('View the Package details', async () => {
      await easeMyTripWorkflows.viewPackageDetails();
    });

    await test.step('Fill the Passenger details', async() => {
        await easeMyTripWorkflows.fillbookingDetails(firstName, firstName1, lastName, lastName1, dateOfBirth1, dateOfBirth2, passportNumber1, passportNumber2, passportExpiry1, passportExpiry2, email, mobileno);
    });
  })
})