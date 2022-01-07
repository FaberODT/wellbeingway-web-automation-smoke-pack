require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashboard.screen');
const sessionCalendarScreen = require('../pageobjects/sessionCalendar.screen');

describe('verify the test cases relating Site Calendar Tab', () => {

    beforeEach('Login functions only', () => {
        //following will open browser and load the url
        browser.url(process.env.URL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.ADMIN_USER, process.env.ADMIN_PASSWORD);

        //following will assert that user is on Dashboard page
        dashboardScreen.assertDahsboradPage();
    });

    afterEach('Logout functions only', () => {
        //following will click on Action toggle menu
        dashboardScreen.performLogout();
    });

    it('C57724 - Verify create unavailability for whole day', () => {
        //following will click on "Session Canledar" tab
        dashboardScreen.clickOnSessionCalendarTab();

        //following will assert that user is on Session Calendar page
        sessionCalendarScreen.assertSessionCalendarPage();

        //following will apply unavailability for the whole day
        sessionCalendarScreen.applyUnavailabilityForWholeDay();

        //following will assert that unavailability has been applied
        sessionCalendarScreen.assertReasonText();
    });

    it('C57725 - Verify create unavailability for specific time', () => {
        //following will click on "Session Canledar" tab
        dashboardScreen.clickOnSessionCalendarTab();

        //following will assert that user is on Session Calendar page
        sessionCalendarScreen.assertSessionCalendarPage();

        //following will apply unavailability for the whole day
        sessionCalendarScreen.applyUnavailabilityForSpecificTime();

        //following will assert that unavailability has been applied
        sessionCalendarScreen.assertReasonText();
    });
});