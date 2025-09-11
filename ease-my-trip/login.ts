import { KeyboardActions, TimeOut } from "./utils/constants/constants";
import { pageSelectors } from "./utils/selectors/selectors";

const { chromium, expect } = require('@playwright/test');
const path = require('path');

async function runLogin() {
    const storagePath = path.join(__dirname, 'authArtifacts', 'storageState.json');
    const browser = await chromium.launch({
    args: ['--start-maximized'],    
    headless: false
});
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.setViewportSize({width: 1920, height: 1080});
await page.goto('https://www.easemytrip.com/', { waitUntil: 'domcontentloaded' });
await page.locator(pageSelectors.loginOrSignUpButton).waitFor({state: 'attached', timeout: TimeOut.LoadTimeOut});
await page.locator(pageSelectors.loginOrSignUpButton).click();
await page.locator(pageSelectors.customerLoginButton).click();
await page.locator(pageSelectors.emailInputField).fill('jananimurugesh28@gmail.com');
await page.keyboard.press(KeyboardActions.Enter);
await page.locator(pageSelectors.proceedWithOtpButton).click();
await page.locator(pageSelectors.passwordInputField).fill('Janani@007');
await page.keyboard.press(KeyboardActions.Enter);
await page.locator(pageSelectors.loginButton).click();
await expect(page.locator(pageSelectors.loginSuccessIndicator)).toBeVisible({timeout: TimeOut.LoadTimeOut});
console.log('##Successfully logged into EaseMyTrip');
console.log('##Saving login cookies');
await page.context().storageState({path: storagePath});
await browser.close();
console.log('##Login has been COMPLETED!!');
}

runLogin().catch(console.error);
