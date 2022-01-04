require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class siteAdminScreen {

    get siteAdminTab ()  { return $('//a[@href="#linkroot"]')}
    
    get usersTab () { return $('//a[@href="#linkusers"]')}

    get addNewUserLinkBtn () { return $('//*[@id="linkusers"]/div/div[2]/div[2]/ul/li[3]/a')}

    get browseListOfUsersLinkBtn () { return $('//*[@id="linkusers"]/div/div[2]/div[2]/ul/li[1]/a')}

    assertSiteAdminPage () {
        this.siteAdminTab.waitForExist({timeout: 10000});
        expect(this.siteAdminTab.isDisplayed()).to.equal(true);
    }

    clickOnUsersTab () {
        this.usersTab.waitForExist({timeout: 10000});
        this.usersTab.click();
    }

    clickOnAddNewUserLinkBtn () {
        this.addNewUserLinkBtn.waitForExist({timeout: 10000});
        this.addNewUserLinkBtn.click();
    }

    clickOnBrowseListOfUsersLinkBtn () {
        this.browseListOfUsersLinkBtn.waitForExist({timeout: 10000});
        this.browseListOfUsersLinkBtn.click();
    }

    
}

module.exports = new siteAdminScreen();