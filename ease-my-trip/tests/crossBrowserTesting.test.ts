import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  // Test data
  const travellers = '2';
  const city = 'Valparai';
  const fname = 'Saraswathi';
  const lname = 'Murugesh';
  const email = 'saraswathimurugesh28@gmail.com';
  const mobileNumber = '8015106724';
  const remark = 'Are there any particular regulations or guidelines visitors should know?';

  test('Test Case #11: Cross Browser Testing @cross', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Explore Bharat Page', async () => {
      await easeMyTripWorkflows.navigateToExploreBharatPage();
    });

    await test.step('Submit the Query', async() => {
        await easeMyTripWorkflows.choosePackageToQuery(travellers, city, fname, lname, email, mobileNumber, remark);
    });
  })
})