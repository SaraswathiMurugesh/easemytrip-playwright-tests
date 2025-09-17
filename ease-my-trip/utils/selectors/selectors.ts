export const loginPageSelectors = {
    loginOrSignUpButton: '#divSignInPnl',
    customerLoginButton: '#shwlogn',
    emailInputField: '#txtEmail',
    proceedWithOtpButton: '#shwotp',
    passwordInputField: '#txtEmail2',
    loginButton: '[name="btn_Login"]:not([id])',
    loginSuccessIndicator: '[class$="logsuccess"]',
}

export const holidaysPageSelectors = {
    holidaySearchInputField: '#txtDesCity',
    holidaySearchLoader: '#holnewloderdv > div',
    holidaysCityOptions: (cityName: string) => `[ng-show="citytrue"] li:has-text("${cityName}")`,
    searchHolidaysButton: 'button[class="subm_btn"]',
}

export const tourPackagesSelectors = {
    packageName: (packageName: string) => `//div[text()="${packageName}"]/ancestor::div[@class="pckg-card ng-scope"]`,
    viewDetailsButton: '[class="pricesecabs"] [ng-click="GoDetail(lst)"] a',
    downloadPDFButton: '#pdfContainer + div img[alt="PDF"]',
}

export const pageSelectors = {
    ...loginPageSelectors,
    ...holidaysPageSelectors,
    ...tourPackagesSelectors
}
