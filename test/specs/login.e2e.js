require('dotenv').config();
const { assert, expect } = require('chai');
const loginScreen = require('../pageobjects/login.screen');

describe('verify the google browser page', () => {

    it('Login test case - testing', () => {
        // //following will open browser and load the url
        browser.url(process.env.URL);

        // //following will perform login 
        loginScreen.loginIntoSite(process.env.ADMIN_USER, process.env.ADMIN_PASSWORD);
    });
});