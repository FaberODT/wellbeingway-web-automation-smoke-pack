require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class siteAdminScreen {

    get siteAdminTab ()  { return $('//a[@href="#linkroot"]')}
    
    get usersTab () { return $('//a[@href="#linkusers"]')}

    get reportsTab () { return $('//*[@id="region-main"]/div/div/div/ul/li[8]/a')}

    get addNewUserLinkBtn () { return $('//*[@id="linkusers"]/div/div[2]/div[2]/ul/li[3]/a')}

    get browseListOfUsersLinkBtn () { return $('//*[@id="linkusers"]/div/div[2]/div[2]/ul/li[1]/a')}

    get siteAdministratorLinkBtn () { return $('//*[@id="linkusers"]/div/div[3]/div[2]/ul/li[2]/a')}

    get commitmentStatementLinkBtn () { return $('//*[@id="linkroot"]/div/div[2]/div[2]/ul/li[1]/a')}

    get icsReportingQueriesLinkBtn () { return $('//*[@id="linkreports"]/div/div/div[2]/ul/li[5]/a')}

    get challengesLibraryLinkBtn () { return $('//*[@id="linkroot"]/div/div[3]/div[2]/ul/li[1]/a')}

    get challengeCourseLinkBtn () { return $('//*[@id="linkroot"]/div/div[3]/div[2]/ul/li[2]/a')}

    assertSiteAdminPage () {
        this.siteAdminTab.waitForExist({timeout: 10000});
        expect(this.siteAdminTab.isDisplayed()).to.equal(true);
    }

    clickOnUsersTab () {
        this.usersTab.waitForExist({timeout: 10000});
        this.usersTab.click();
    }

    clickOnReportsTab () {
        this.reportsTab.waitForExist({timeout: 10000});
        this.reportsTab.click();
    }

    clickOnAddNewUserLinkBtn () {
        this.addNewUserLinkBtn.waitForExist({timeout: 10000});
        this.addNewUserLinkBtn.click();
    }

    clickOnBrowseListOfUsersLinkBtn () {
        this.browseListOfUsersLinkBtn.waitForExist({timeout: 10000});
        this.browseListOfUsersLinkBtn.click();
    }

    clickOnSiteAdministratorLinkBtn () {
        this.siteAdministratorLinkBtn.waitForExist({timeout: 10000});
        this.siteAdministratorLinkBtn.click();
    }

    clickOnCommitmentStatementLinkBtn () {
        this.commitmentStatementLinkBtn.waitForExist({timeout: 10000});
        this.commitmentStatementLinkBtn.click();
    }

    clickOnICSReportingQueriesLinkBtn () {
        this.icsReportingQueriesLinkBtn.waitForExist({timeout: 10000});
        this.icsReportingQueriesLinkBtn.click();
    }

    clickOnChallengesLibraryLinkBtn () {
        this.challengesLibraryLinkBtn.waitForExist({timeout: 10000});
        this.challengesLibraryLinkBtn.click();
    }

    clickOnChallengeCourseLinkBtn () {
        this.challengeCourseLinkBtn.waitForExist({timeout: 10000});
        this.challengeCourseLinkBtn.click();
    }
}

module.exports = new siteAdminScreen();