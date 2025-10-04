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
    addToCompareCheckbox: "//div[contains(@class,'pckslt')]//label[@class='checkbxin bgclradd']",
    compareButton: "//div[@class='blubx d-flex align-items-center gap-10 justify-content-center ng-binding ng-scope']",
}

export const comparePageSelectors = {
    viewPackageButton: "//td[@class='ng-scope']/a[@class='view-btn']",
}

export const busPageSelectors = {
    fromCityInputField: "//input[@id='txtSrcCity']",
    sourceCityOptions: (sourceCity: string) => `//div[text()="${sourceCity}"]/ancestor::div[@ng-show="sourceDiv"]`,
    destinationOptions: (destinationCity: string) => `//div[text()="${destinationCity}"]/ancestor::div[@ng-show="desDiv"]`,
    toCityInputField: "//input[@id='txtDesCity']",
    datePicker: "//input[@id='datepicker']",
    nextButton: "a.ui-datepicker-next.ui-corner-all",
    selectDate: "//td[@data-month='10']//a[text()='4']",
    searchButton: "//input[@id='srcbtn']",
}

export const searchBusPageSelectors = {
    recommendedBusOption: "//span[@id='sldRound']",
    selectSeatButton: "[class='card'] [class='rght-ac'] a",
    seatSelectionFrame: '[class="table-center"]  [class="sl_available tooltipnv2"]',
    boardingPointRadioButton: '[ng-click="SelectBordingOther(listbrd.bdid)"]  [name="brdg-pnt"]',
    droppingPointRadioButton: '[ng-click="SelectDroppingOther(listdrp.dpId)"]  [name="drp-pnt"]',
    continueToPaymentButton: '[class="smbt-n mt-10"] [class="slt-st py-12 w-100"]'
}

export const busPaymentPageSelectors = {
    titleDropdown: '#title0',
    firstNameInputField: '#firstname0',
    lastNameInputField: '#lastname0',
    ageInputField: '#age0',
    emailInputField: "//input[@id='trvlEmail']",
    phoneNumberInputField: "//input[@id='TrvlMobileNo']",
}

export const giftCardPageSelectors = {
    birthdayGiftCardOption: '//div[@id="All"]//div[@title="Birthday E-GiftCard"]',
    denominationAmount: '[ng-model="User.Amount"]',
    quantityDropdown: '[ng-model="User.Quantity"]',
    laterButton: '#ltr',
    monthDropdown: '[data-handler="selectMonth"]',
    dateSelection: "//td[@data-month='10']//a[text()='4']",
    senderNameInputField: '[ng-model="User.SenderName"]',
    senderEmailInputField: '[ng-model="User.SenderEmail"]',
    senderMobileInputField: '[ng-model="User.SenderMobile"]',
    receiversNameInputField: '[ng-model="User.ReceiverName"]',
    receiversEmailInputField: '[ng-model="User.ReceiverEmail"]',
    retypeEmailInputField: '[ng-model="User.RetypeReceiverEmail"]',
    receiversMobileInputField: '[ng-model="User.ReceiverMobile"]',
    termsAndConditionsCheckbox: '[ng-model="User.Term"]',
}

export const darshanPageSelectors = {
    overviewButton: '//span[text()="Overview"]',
    itineraryButton: '//span[text()="Day wise Itinerary "]',
    inclusionButton: '//span[text()="Inclusion/Exclusions"]',
    additionalInfo: '//span[text()="Additional Info"]',
    bookButton: '//a[@class="bookbtn"]',
    selectVisitDate: '[ng-click="SetCallDate(co)"]',
    calculateAmount: 'div[ng-click="CalculateAmount()"]',
    continueBooking: 'div[class="bt-hol-contue"]',
    mrLabel: '//label[@for="mr0"]',
    mrsLabel: '//label[@for="mrs1"]',
    firstName: '[ng-model="tr.FName"]',
    lastName: '[ng-model="tr.LName"]',
    dateOfBirth: '[placeholder="Enter DOB"]',
    passportNumber: '[ng-model="tr.PassNo"]',
    passportExpiry: '[ng-model="tr.PassExp"]',
    mealsPreference: '[ng-model="tr.Meal"]',
    emailAddress: '[placeholder="Enter Email Address"]',
    mobileNumber: '[placeholder="Enter Phone Number"]',
}

export const exploreBharatPageSelectors = {
    wildLifeHaven: '//p[text()="Wildlife Haven "]',
    safariPackage: '//p[text()="Safari Splendor"]',
    fromDatePicker: 'input#datepicker',
    fromDate: "//td[@data-month='9']//a[text()='15']",
    toDatePicker: 'input#datepicker2',
    toDate: "//td[@data-month='9']//a[text()='22']",
    numOfTravellers: 'input#totalpax',
    addCity: '.bootstrap-tagsinput input[placeholder="Add Cities +"]',
    fname: '#fname',
    lname: '#lname',
    email: '#email',
    mobilenum: '#mobileno',
    remark: '#remark',
}

export const pageSelectors = {
    ...loginPageSelectors,
    ...holidaysPageSelectors,
    ...tourPackagesSelectors,
    ...comparePageSelectors,
    ...busPageSelectors,
    ...searchBusPageSelectors,
    ...busPaymentPageSelectors,
    ...giftCardPageSelectors,
    ...darshanPageSelectors,
    ...exploreBharatPageSelectors,
}
