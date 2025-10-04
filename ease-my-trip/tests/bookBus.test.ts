import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  //Test Data
  const sourceCity = "Chennai";
  test('Test Case #2: Book bus', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Bus Page', async () => {
      await easeMyTripWorkflows.navigateToBusPage();
    });

    await test.step('Search Source City', async () => {
      await easeMyTripWorkflows.searchSourceCity(sourceCity);
    });

    await test.step('Search Destination City', async () => {
      await easeMyTripWorkflows.searchDestinationCity("Coimbatore");
    });

    await test.step('Select Date and Search Buses', async () => {
      await easeMyTripWorkflows.selectJourneyDateAndSearchBuses();
    });

    await test.step('Select Bus and Seat', async () => {
      await easeMyTripWorkflows.selectBusAndSeat();
    });

    await test.step('Fill Passenger Details and Proceed to Payment', async () => {
      await easeMyTripWorkflows.fillPassengerDetails(
        "Miss",
        "Saraswathi",
        "Murugesh",
        "24",
        "saraswathi.murugesh@gmail.com",
        "8743713534"
      );
    });
  })
})