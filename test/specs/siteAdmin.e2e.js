require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashboard.screen');
const pathWaysScreen = require('../pageobjects/pathways.screen');
const searchedCourseScreen = require('../pageobjects/searchedCourse.screen');
const pathwaysScreen = require('../pageobjects/pathways.screen');
const siteAdminScreen = require('../pageobjects/siteAdmin.screen');
const addNewUserScreen = require('../pageobjects/siteAdmin_Users_AddNewUser.screen');
const enrollUserScreen = require('../pageobjects/enrolUsers.screen');
const browseListOfUsersScreen = require('../pageobjects/siteAdmin_Users_BrowseListOfUsers.screen');
const siteAdministratorScreen = require('../pageobjects/siteAdmin_Users_SiteAdministrator.screen');
const commitmentStatementScreen = require('../pageobjects/siteAdmin_SA_CommitmentStatement.screen');
const icsReportingQueriesScreen = require('../pageobjects/siteAdmin_Reports_ICSReportingQueries.screen');
const challengesLibraryScreen = require('../pageobjects/siteAdmin_SA_ChallengesLibrary.screen');
const challengesCourseScreen = require('../pageobjects/siteAdmin_SA_ChallengesCourse.screen');

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

    it('C57620 - Verify Enroll Patient', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();

        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Users" tab
        siteAdminScreen.clickOnUsersTab();

        //following will click on "Add a new user" link button
        siteAdminScreen.clickOnAddNewUserLinkBtn();

        //following will create New User
        addNewUserScreen.createNewUser();

        //following will assert the success message for newly added user
        addNewUserScreen.assertSuccessMsg();

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

        //following will click on "Enroll user" button
        searchedCourseScreen.clickOnEnrolUsersBtn();

        //following will assert that Enroll User pop-up is displaying
        enrollUserScreen.assertEnrolUsersPopUp();

        //following will enroll newly added user
        enrollUserScreen.enrollNewUser();

        //following will assert the success message
        enrollUserScreen.assertSuccessMsg();
    });

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

    it('C57624 - Verify registration of other Site Admin', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();

        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Users" tab
        siteAdminScreen.clickOnUsersTab();

        //following will click on "Site Administrator" link button
        siteAdminScreen.clickOnSiteAdministratorLinkBtn();

        //following will add a searched user into Site Admin list
        siteAdministratorScreen.addNewSiteAdmin();

        //following will assert newly added user is in Site Admin list
        siteAdministratorScreen.assertNewlyAddedSiteAdmin();
    });

    it('C57625 - Verify commitment statement', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();

        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Commitment statement" link button
        siteAdminScreen.clickOnCommitmentStatementLinkBtn();

        //following will add new commitment
        commitmentStatementScreen.addNewCommitment();

        //following will assert the success message
        commitmentStatementScreen.assertSuccessMsg();

        //following will update the commitment
        commitmentStatementScreen.updateCommitment();

        //following will assert the success message
        commitmentStatementScreen.assertSuccessMsg();

        //following will assert the update value of Title and Description field of commitment
        commitmentStatementScreen.assertUpdatedCommitmentValue();
    });

    it('C57730 Verify failed to book sessions report', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();
            
        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Reports" tab
        siteAdminScreen.clickOnReportsTab();

        //following will click on "ICS Reporting Queries" link button
        siteAdminScreen.clickOnICSReportingQueriesLinkBtn();

        //following will click on "Session Booking" link button
        icsReportingQueriesScreen.clickOnSessionBookingLinkBtn();

        //following will click on "Failed to book session" link button
        icsReportingQueriesScreen.clickOnFailedBookSessionLinkBtn();

        //following will assert Failed to book session report
        icsReportingQueriesScreen.assertFailedBookSessionReport();
    });

    it('C57732 - Verify adding new challenge library', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();
            
        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Challenge Library" link button
        siteAdminScreen.clickOnChallengesLibraryLinkBtn();

        //following will add new "Challenege"
        challengesLibraryScreen.addNewChallenge();

        //following will assert the success message
        challengesLibraryScreen.assertSuccessMsg();

        //following will edit the very first challenge
        challengesLibraryScreen.editChallenge();

        //following will assert the success message
        challengesLibraryScreen.assertSuccessMsg();
    });

    it('C57733 - Verify course specific challenges settings', () => {
        //following will click on "Site Administrator" menu 
        dashboardScreen.clickOnSiteAdminMenu();
            
        //following will assert that user is on Site Admin page
        siteAdminScreen.assertSiteAdminPage();

        //following will click on "Challenge Course" link button
        siteAdminScreen.clickOnChallengeCourseLinkBtn();

        //following will select the course
        challengesCourseScreen.selectCourse();

        //following will drag and drop the challenge to Diet category
        challengesCourseScreen.addChallenges();

        //following will click "Save" button
        challengesCourseScreen.clickOnSaveBtn();

        //following will click on "Save" button from confirmation pop-up
        challengesCourseScreen.clickOnConfirmationPopupSaveBtn();

        //following will assert the success message
        challengesCourseScreen.assertSuccessMsg();
    });
});