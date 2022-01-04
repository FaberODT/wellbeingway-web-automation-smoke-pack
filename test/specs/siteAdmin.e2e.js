require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashboard.screen');
const pathWaysScreen = require('../pageobjects/pathways.screen');
const searchedCourseScreen = require('../pageobjects/searchedCourse.screen');
const { path } = require('chromedriver');
const pathwaysScreen = require('../pageobjects/pathways.screen');
const siteAdminScreen = require('../pageobjects/siteAdmin.screen');
const addNewUserScreen = require('../pageobjects/siteAdmin_Users_AddNewUser.screen');
const enrollUserScreen = require('../pageobjects/enrolUsers.screen');
const browseListOfUsersScreen = require('../pageobjects/siteAdmin_Users_BrowseListOfUsers.screen');

describe('verify the test cases relating Site Administrator Menu', () => {

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

    // it('C57620 - Verify Enroll Patient', () => {
    //     //following will click on "Site Administrator" menu 
    //     dashboardScreen.clickOnSiteAdminMenu();

    //     //following will assert that user is on Site Admin page
    //     siteAdminScreen.assertSiteAdminPage();

    //     //following will click on "Users" tab
    //     siteAdminScreen.clickOnUsersTab();

    //     //following will click on "Add a new user" link button
    //     siteAdminScreen.clickOnAddNewUserLinkBtn();

    //     //following will create New User
    //     addNewUserScreen.createNewUser();

    //     //following will assert the success message for newly added user
    //     addNewUserScreen.assertSuccessMsg();

    //     //following will click on "Pathways" tab
    //     dashboardScreen.clickOnPathWaysTab();

    //     //following will assert that user is on Pathways page
    //     pathWaysScreen.assertPathWayPage();

    //     //following will search for the specific course name
    //     pathWaysScreen.searchCourse();

    //     //following will click On searched course name
    //     pathwaysScreen.clickOnSearchedCourseName();

    //     //following will click On "Participant" menu option
    //     searchedCourseScreen.clickOnParticipantTab();

    //     //following will click on "Enroll user" button
    //     searchedCourseScreen.clickOnEnrolUsersBtn();

    //     //following will assert that Enroll User pop-up is displaying
    //     enrollUserScreen.assertEnrolUsersPopUp();

    //     //following will enroll newly added user
    //     enrollUserScreen.enrollNewUser();

    //     //following will assert the success message
    //     enrollUserScreen.assertSuccessMsg();
    // });

    it('C57623 - Verify User Management', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();

        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Users" tab
        siteAdminScreen.clickOnUsersTab();

        //following will click on "Browse list of Users" link button
        siteAdminScreen.clickOnBrowseListOfUsersLinkBtn();

        //following will add User Name filter
        browseListOfUsersScreen.addUserNameFilter();

        //following will assert the fetched records
        browseListOfUsersScreen.assertFetchedRecords();
    });
});