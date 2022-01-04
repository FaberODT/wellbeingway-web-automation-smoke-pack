require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class dashboardScreen {
    
    get dashboardTab () { return $('//a[@data-key="myhome"]')}

    get pathWaysTab () { return $('//*[@id="header"]/div[2]/div/div/ul/li[2]/a')}

    get siteAdminMenu () { return $('//a[@data-key="sitesettings"]')}

    get actionMenuToggle () { return $('//a[@id="action-menu-toggle-1"]')}

    get logoutOpt () { return $('//span[@id="actionmenuaction-3"]')}

    assertDahsboradPage () {
        this.dashboardTab.waitForExist({timeout: 10000});
        expect(this.dashboardTab.isDisplayed()).to.equal(true);
    }

    clickOnPathWaysTab () {
        this.pathWaysTab.waitForExist({timeout: 10000});
        this.pathWaysTab.click();
    }

    clickOnSiteAdminMenu () {
        this.siteAdminMenu.waitForExist({timeout: 10000});
        this.siteAdminMenu.click();
    }

    clickOnActionMenu () {
        this.actionMenuToggle.waitForExist({timeout: 10000});
        this.actionMenuToggle.click();
    }

    clickOnLogoutOption () {
        this.logoutOpt.waitForExist({timeout: 10000});
        this.logoutOpt.click();
    }

    performLogout () {
        //following method call will click on Action menu
        this.clickOnActionMenu();
        //following method call will click on Logout option
        this.clickOnLogoutOption();
    }
}

module.exports = new dashboardScreen();