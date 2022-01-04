require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashboard.screen');
const pathWaysScreen = require('../pageobjects/pathways.screen');
const searchedCourseScreen = require('../pageobjects/searchedCourse.screen');
const { path } = require('chromedriver');
const pathwaysScreen = require('../pageobjects/pathways.screen');

describe('verify the test cases relating Pathways tab', () => {

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

    it('Verify Invite User with Email', () => {
        //following will click on "Pathways" tab
        dashboardScreen.clickOnPathWaysTab();

        //following will assert that user is on Pathways page
        pathWaysScreen.assertPathWayPage();

        //following will search for the specific course name
        pathWaysScreen.searchCourse();

        //following will click On searched course name
        pathwaysScreen.clickOnSearchedCourseName();

        //following will click On "Participant" menu option
        searchedCourseScreen.clickOnParticipantTab();

        //following will click on "Invite Patient" button
        searchedCourseScreen.clickOnInvitePatientButton();

        //following will fill out details for Inviting patient by email
        searchedCourseScreen.addPatientByEmail();

        //following will assert the success message
        searchedCourseScreen.getSuccessMsg();
    });

    it('Verify Forget User name', () => {
        //following will click on "Pathways" tab
        dashboardScreen.clickOnPathWaysTab();

        //following will assert that user is on Pathways page
        pathWaysScreen.assertPathWayPage();

        //following will search for the specific course name
        pathWaysScreen.searchCourse();

        //following will click On searched course name
        pathwaysScreen.clickOnSearchedCourseName();

        //following will click On "Participant" menu option
        searchedCourseScreen.clickOnParticipantTab();

        //following will select the very first User from the list
        pathwaysScreen.clickOnFirstUser();

        //following will click on "Forgot Username" link button
        pathWaysScreen.clickOnForgotUserNameLinkBtn();

        //following will assert the success message on the page
        pathWaysScreen.assertFogotUserNameMsg();

    });

    it('Verify Forget Password', () => {
        //following will click on "Pathways" tab
        dashboardScreen.clickOnPathWaysTab();

        //following will assert that user is on Pathways page
        pathWaysScreen.assertPathWayPage();

        //following will search for the specific course name
        pathWaysScreen.searchCourse();

        //following will click On searched course name
        pathwaysScreen.clickOnSearchedCourseName();

        //following will click On "Participant" menu option
        searchedCourseScreen.clickOnParticipantTab();

        //following will select the very first User from the list
        pathwaysScreen.clickOnFirstUser();

        //following will click on "Forgot Password" link button
        pathWaysScreen.clickOnForgotPasswordLinkBtn();

        //following will assert the success message on the page
        pathWaysScreen.assertForgotPasswordMsg();

    });
});