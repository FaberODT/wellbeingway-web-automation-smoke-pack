require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashboard.screen');
const forumModerationScreen = require('../pageobjects/forumModeration.screen');

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

    it('C57731 - Verify update status of the moderation', () => {
        //following will click on "Forum Moderation" tab
        dashboardScreen.clickOnForumModerationTab();

        //following will assert the Forum Moderation page
        forumModerationScreen.assertForumModerationPage();

        //following will delete the first post from the list
        forumModerationScreen.deletePost();

        //following will assert the deleted post count after deleting the post
        forumModerationScreen.assertPostCountAfterDelete();

        //following will repost the post
        forumModerationScreen.restorePost();

        //following will assert the post count after repost
        forumModerationScreen.assertPostCountAfterRepost();
    });
});