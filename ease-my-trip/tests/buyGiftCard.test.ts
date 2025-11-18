import { test } from '@playwright/test';
import { EaseMyTripWorkflows } from '../workflows/easeMyTripWorkflows';

test.describe.serial('Ease My Trip', () => {
  let easeMyTripWorkflows: EaseMyTripWorkflows;

  //Test Data
  const amount = "10000";
  const quantity = "2";
  const month = "11";
  const senderName = "Saraswathi";
  const senderEmail = "SaraswathiMurugesh28@gmail.com";
  const senderMobile = "8015106724";
  const receiverName = "Bhuvanesh"
  const receiverEmail = "Bhuvaneshwaran18@gmail.com"
  const receiverMobile = "8923762323"
  test('Test Case #6: Buy Gift Card', async ({ page }) => {
    easeMyTripWorkflows = new EaseMyTripWorkflows(page);
    
    await test.step('Navigate to Home Page', async () => {
    await easeMyTripWorkflows.navigateToHomePage();
    });

    await test.step('Navigate to Gift Card Page', async () => {
      await easeMyTripWorkflows.navigateToGiftCardPage();
    });

    await test.step('Select Birthday Gift Voucher', async() => {
        await easeMyTripWorkflows.selectBirthdayGiftVoucher();
    })

    await test.step('Fill Details to Buy Gift Card', async() => {
        await easeMyTripWorkflows.giftCardDetails(amount, quantity, month, senderName, senderEmail, senderMobile, receiverName, receiverEmail, receiverMobile);
    })
  })
})