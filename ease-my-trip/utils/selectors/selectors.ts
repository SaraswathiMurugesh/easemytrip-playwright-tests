export const loginPageSelectors = {
    loginOrSignUpButton: '#divSignInPnl',
    customerLoginButton: '#shwlogn',
    emailInputField: '#txtEmail',
    proceedWithOtpButton: '#shwotp',
    passwordInputField: '#txtEmail2',
    loginButton: '[name="btn_Login"]:not([id])',
    loginSuccessIndicator: '[class$="logsuccess"]',
    closePopUp: '[onclick="closePopup(event)"]',
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
    selectDate: "//td[@data-month='10']//a[text()='30']",
    searchButton: "//input[@id='srcbtn']",
}

export const searchBusPageSelectors = {
    recommendedBusOption: "//span[@id='sldRound']",
    selectSeatButton: "[class='tvcn'] [class='crd-prc ng-binding ng-scope'] a",
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
    busEmailInputField: "//input[@id='trvlEmail']",
    phoneNumberInputField: "//input[@id='TrvlMobileNo']",
}

export const giftCardPageSelectors = {
    birthdayGiftCardOption: '//div[@id="All"]//div[@title="Birthday E-GiftCard"]',
    denominationAmount: '[ng-model="User.Amount"]',
    quantityDropdown: '[ng-model="User.Quantity"]',
    laterButton: '#ltr',
    monthDropdown: '[data-handler="selectMonth"]',
    dateSelection: "//td[@data-month='11']//a[text()='30']",
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
    fromDate: "//td[@data-month='10']//a[text()='25']",
    toDatePicker: 'input#datepicker2',
    toDate: "//td[@data-month='10']//a[text()='30']",
    numOfTravellers: 'input#totalpax',
    addCity: '.bootstrap-tagsinput input[placeholder="Add Cities +"]',
    fname: '#fname',
    lname: '#lname',
    email: '#email',
    mobilenum: '#mobileno',
    remark: '#remark',
}

export const activitiesPageSelectors = {
    whereButton: '#txtcityname',
    activityName: '//div[@id="autolist"]//span[text()="Dubai, United Arab Emirates"]',
    whenButton: '#traveldateSec',
    activityDate: '//div[@class="table-clender"]//span[text()="30"]',
    activitySearchButton: '#srchBtn',
    packageOption: '//a[text()="Package Options"]',
    overviewOption: '//a[text()="Overview"]',
    inclusionOption: '//a[text()="Inclusion"]',
    addressOption: '//a[text()="Address & Map"]',
    bookNowButton: '//a[text()="Book Now"]',
    titleId: '#titleAdult1',
    titleButton: '//li[text()="Ms."]',
    activityFirstName: '#fNameAdult1',
    activityLastName: '#lNameAdult1',
    activityEmail: '#email',
    activityMobile: '#mobile',
    expiryDate: '#PASSPORT_EXPIRYAdult1',
    countryName: '#PASSPORT_NATIONALITYAdult1',
    passportNo: '#PASSPORT_PASSPORT_NOAdult1',
    weight: '#WEIGHTuAdult1',
    travellerWeight: '#WEIGHTAdult1',
    enterPanName: '[placeholder="Enter Name"]',
    panNumber: '[placeholder="Enter PAN No."]',
}

export const cabPageSelectors = {
    hourlyRentalOption: '#li3',
    cabSourceName: '#sourceName',
    inputSource: '#a_FromSector_show',
    cabStartCity: '//div[@id="StartCity"]//div[text()=" chennai"]',
    timePicker: '//div[@id="timePicker"]',
    rentHour: '[id="hrforRent"] [onclick="RentFor(2)"]',
    cabSearch: '[class="srch-btn-c"][onclick="GetList()"]',
    cabBookNow: '//div[@class="list-price"]//div[text()="Book Now "]',
    msLabel: '//label[text()="Ms."]',
    cabFirstName: '#txtfname',
    cabLastName: '#txtlname',
    cabEmail: '#txtemail',
    cabMobile: '#txtmbl',
    pickupLocation: '[placeholder="Enter exact pickup location"]',
    dropLocation: '#txtpadd',
}

export const TrainPageSelectors = {
    radioButtonOneWay: '//label[@id="lbl5"]',
    trainName: '//input[@id="txtTrainNo_V1"]',
    selectTrain: '//strong[text()="Ms Ncj Vb Exp"]',
    departureDate: '//input[@id="txtDate_V1"]',
    selectTrainDate: '//td[@data-month="11"]//a[text()="28"]',
    trainSearch: '//button[@class="cr-btn u-link enabled"]',
    trainBook: '#trainChildWiseSeatClass120627CCGN span:has-text("Book Now")',
    gender: '#ddlPassengerAge0',
    trainFname: '#txtAdultFirstName0',
    trainAge: '#txtAge0',
    irctcID: '#IrctcUserText',
    proceedButton: '//div[@class="irctcbtn"]',
    trainEmail: '//input[@id="txtEmailID"]',
    trainMobile: '//input[@id="txtMobileNo"]',
}

export const FlightPageSelectors = {
    flightFromTextBox: '//input[@id="FromSector_show"]',
    flightFromInputField: '[id="a_FromSector_show"]',
    flightFromSugg: 'li[onclick*="spn2"]',
    flightToInputField: '[id="a_Editbox13_show"]',
    flightTo: '#toautoFill li',
    selectFlightDate: '//li[@id="snd_3_10/12/2025"]',
    flightSearch: '[class="srchBtnSe"]',
    flightBook: '//button[@id="BK_0"]',
    flightTitle: '//select[@id="titleAdult0"]',
    flightFname: '#txtFNAdult0',
    flightLname: '#txtLNAdult0',
    flightEmail: '#txtEmailAdult0',
    flightMobile: '#txtCPhoneAdult0',
    contactEmail: '#txtEmailId',
    contactMobile: '#txtCPhone',
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
    ...activitiesPageSelectors,
    ...cabPageSelectors,
    ...TrainPageSelectors,
    ...FlightPageSelectors,
}
