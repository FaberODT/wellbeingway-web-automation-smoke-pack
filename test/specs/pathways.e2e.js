require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashboard.screen');
const pathWaysScreen = require('../pageobjects/pathways.screen');
const searchedCourseScreen = require('../pageobjects/searchedCourse.screen');
const pathwaysScreen = require('../pageobjects/pathways.screen');
const turnEditingOnScreen = require('../pageobjects/pathways_SearchedCourse_TurnEditingOn.screen');

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

    it('C57619 - Verify Invite User with Email', () => {
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

    it('C57621 - Verify Forget User name', () => {
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

    it('C57622 - Verify Forget Password', () => {
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

    it('C57729 - Verify change role of the User', () => {
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

        //following will select new Role by editing Roles field of First User form user list
        searchedCourseScreen.selectRoleForUserFromUserList();

        //following will assert the updated roles for the first user from the User list
        searchedCourseScreen.assertAssignedRoles();
    });

    it('C57717 - Verify adding course content - Scorm Package', () => {
        //following will click on "Pathways" tab
        dashboardScreen.clickOnPathWaysTab();

        //following will assert that user is on Pathways page
        pathWaysScreen.assertPathWayPage();

        //following will search for the specific course name
        pathWaysScreen.searchCourse();

        //following will click On searched course name
        pathwaysScreen.clickOnSearchedCourseName();

        //following will click on "Turn Editing on" button
        searchedCourseScreen.clickOnTurnEditingOnBtn();

        //following will click on "Add Activity or Resource" link button
        turnEditingOnScreen.clickOnAddActivityOrResourceLinkBtn();

        //following will click on "All" tab
        turnEditingOnScreen.clickOnAllTab();

        //following will add SCORM package
        turnEditingOnScreen.addSCORMPackage();

        //following will assert that SCORM package has been added
        turnEditingOnScreen.assertEnterBtn();
    });

    it('C57718 - Verify adding course content - URL Package', () => {
        //following will click on "Pathways" tab
        dashboardScreen.clickOnPathWaysTab();

        //following will assert that user is on Pathways page
        pathWaysScreen.assertPathWayPage();

        //following will search for the specific course name
        pathWaysScreen.searchCourse();

        //following will click On searched course name
        pathwaysScreen.clickOnSearchedCourseName();

        //following will click on "Turn Editing on" button
        searchedCourseScreen.clickOnTurnEditingOnBtn();

        //following will click on "Add Activity or Resource" link button
        turnEditingOnScreen.clickOnAddActivityOrResourceLinkBtn();

        //following will click on "All" tab
        turnEditingOnScreen.clickOnAllTab();

        //following will add URL package
        turnEditingOnScreen.addURLPackage();

        //following will assert that URL package has been added
        turnEditingOnScreen.assertSavedUrl();
    });

    it('C57719 - Verify adding course content - File Package', () => {
        //following will click on "Pathways" tab
        dashboardScreen.clickOnPathWaysTab();

        //following will assert that user is on Pathways page
        pathWaysScreen.assertPathWayPage();

        //following will search for the specific course name
        pathWaysScreen.searchCourse();

        //following will click On searched course name
        pathwaysScreen.clickOnSearchedCourseName();

        //following will click on "Turn Editing on" button
        searchedCourseScreen.clickOnTurnEditingOnBtn();

        //following will click on "Add Activity or Resource" link button
        turnEditingOnScreen.clickOnAddActivityOrResourceLinkBtn();

        //following will click on "All" tab
        turnEditingOnScreen.clickOnAllTab();

        //following will add File package
        turnEditingOnScreen.addFilePackage()

        //following will assert that File package has been added
        turnEditingOnScreen.assertSavedFile();
    });
});