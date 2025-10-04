import { Page } from "@playwright/test";
import { BasePage } from "../pages/basePage.page";
import { HolidaysPage } from "../pages/holidaysPage.page";
import { TourPackagesPage } from "../pages/tourPackagesPage.page";
import { BusPage } from "../pages/busPage.page";
import { GiftCardPage } from "../pages/giftCardPage.page";
import { DharshanPage } from "../pages/dharshanPage.test";
import { ExploreBharatPage } from "../pages/exploreBharatPage.test";

export class EaseMyTripWorkflows extends BasePage{
    readonly page: Page;
    protected holidaysPage: HolidaysPage;
    protected tourPackagesPage: TourPackagesPage;
    protected busPage: BusPage;
    protected giftCardPage: GiftCardPage;
    protected dharshanPage: DharshanPage;
    protected exploreBharatPage: ExploreBharatPage;
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.holidaysPage = new HolidaysPage(page);
        this.tourPackagesPage = new TourPackagesPage(page);
        this.busPage = new BusPage(page);
        this.giftCardPage = new GiftCardPage(page);
        this.dharshanPage = new DharshanPage(page);
        this.exploreBharatPage = new ExploreBharatPage(page);
    }

    /**
     * Search and View Holiday Package
     * @param country Country Name
     * @param packageName Package Name
     */
    public async searchAndViewPackage(country: string, packageName: string) {
        await this.holidaysPage.searchHolidaysPackage(country);
        await this.tourPackagesPage.viewTourPackage(packageName);
    }

    /**
     * Download Holiday Package PDF
     */
    public async downloadHolidayPackagePDF() {
        await this.tourPackagesPage.downloadTourPackagePDF();
    }

    /**
     * Search Holiday Package
     * @param country Country Name
     */
    public async searchHolidayPackage(country: string) {
        await this.holidaysPage.searchHolidaysPackage(country);
    }

    /**
     * Add Holiday Package to Compare
     */
    public async CompareTourPackages() {
        await this.tourPackagesPage.addTourPackagesToCompare();
    }

    /**
     * Search Source City
     * @param sourceCity Source City Name
     */
    public async searchSourceCity(sourceCity: string) {
        await this.busPage.fromCity(sourceCity);
    }

    /**
     * Search Destination City
     * @param destinationCity Destination City Name
     */
    public async searchDestinationCity(destinationCity: string) {
        await this.busPage.toCity(destinationCity);
    }   

    /**
     * Select Journey Date and Search Buses
     */
    public async selectJourneyDateAndSearchBuses() {
        await this.busPage.selectJourneyDate();
    }

    /**
     * Select Bus and Seat
     */
    public async selectBusAndSeat() {
        await this.busPage.selectBusAndSeat();
    }

    /**
     * Fill Passenger Details
     * @param title Title
     * @param firstName First Name
     * @param lastName Last Name
     * @param age Age
     * @param email Email
     * @param phoneNumber Phone Number
     */
    public async fillPassengerDetails(title: string, firstName: string, lastName: string, age: string, email: string, phoneNumber: string) {
        await this.busPage.fillPassengerDetails(title, firstName, lastName, age, email, phoneNumber);
    }

    /**
     * Select Birthday Gift Voucher
     */
    public async selectBirthdayGiftVoucher() {
        await this.giftCardPage.selectBirthdayGiftVoucher();
    }

    /**
     * Buy Gift Card
     * @param amount Gift Card Amount
     * @param quantity Quantity of Gift Cards
     * @param month Month of Gift Card Validity
     * @param senderName Name of the Sender
     * @param senderEmail Email of the Sender    
     * @param senderMobile Mobile Number of the Sender
     * @param receiverName Name of the Receiver
     * @param receiverEmail Email of the Receiver    
     * @param receiverMobile Mobile Number of the Receiver
     */
    public async giftCardDetails(amount: string, quantity: string, month: string, senderName: string, senderEmail: string, senderMobile: string, receiverName: string, receiverEmail: string, receiverMobile: string){
        await this.giftCardPage.buyGiftCard(amount, quantity, month, senderName, senderEmail, senderMobile, receiverName, receiverEmail, receiverMobile);
    }

    /**
     * select each tab and view the details
     */
    public async viewPackageDetails(){
        await this.dharshanPage.packageDetails();
    }

    /**
     * Fill the booking details
     * @param firstName first name     
     * @param lastName last name
     * @param dateOfBirth date of birth
     * @param passportNumber passport number
     * @param passportExpiry passport expiry
     * @param email email id
     * @param mobileno mobile number
     */
    public async fillbookingDetails(firstName : string, firstName1: string, lastName: string, lastName1: string, dateOfBirth1:string, dateOfBirth2: string, passportNumber1: string, passportNumber2: string, passportExpiry1: string, passportExpiry2: string, email: string, mobileno: string){
        await this.dharshanPage.bookingDetails(firstName, firstName1, lastName, lastName1, dateOfBirth1, dateOfBirth2, passportNumber1, passportNumber2, passportExpiry1, passportExpiry2, email, mobileno);

    }

    /**
     * Choose the package and submit the query
     * @param travellers no.of.travellers
     * @param city add the city
     * @param fname First name
     * @param lname Last name
     * @param email email id
     * @param mobileNumber mobile number
     * @param remark remark
     */
    public async choosePackageToQuery(travellers: string, city : string, fname: string, lname: string, email: string, mobileNumber: string, remark: string){
        await this.exploreBharatPage.choosePackage(travellers, city, fname, lname, email, mobileNumber, remark);
    }
}