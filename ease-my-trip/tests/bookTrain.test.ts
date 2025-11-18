import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  //Test Data
  const searchTrainName = "Ms Ncj Vb Exp";
  const irctcID = 'Saraswathi';
  const trainEmail = 'Saraswathi.Murugesh28@gmail.com';
  const trainMobile = '8015106724';

  test('Test Case #9: Book Train', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Train Page', async () => {
      await easeMyTripWorkflows.navigateToTrainPage();
    });

    await test.step('Search for Train', async () => {
      await easeMyTripWorkflows.searchTrain(searchTrainName);
    });

    await test.step('Book the Train with Passenger details', async () => {
      await easeMyTripWorkflows.bookTrainWithDetails(trainEmail, trainMobile, irctcID);
    });
  });
})