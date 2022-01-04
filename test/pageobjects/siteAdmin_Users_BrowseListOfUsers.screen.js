require('dotenv').config();
const expect = require("chai").expect;


x = Math.floor((Math.random() * 10000000) + 1);
emailValueForNewUser = "test" + Math.floor((Math.random() * 10000000) + 1) + "@test.com";
userNameValue = "nimeshb" + Math.floor((Math.random() * 10000000) + 1);
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class browseListOfUsersScreen {

    get userNameTxtBox () { return $('//input[@id="id_username"]')}

    get addFilterBtn () { return $('//input[@id="id_addfilter"]')}

    get totalRecords () { return $$('//*[@id="users"]/tbody/tr')}

    enterUserName() {
        this.userNameTxtBox.waitForExist({timeout: 10000});
        this.userNameTxtBox.setValue("nimeshb");
    }

    clickOnAddFilterBtn () {
        this.addFilterBtn.waitForExist({timeout: 10000});
        this.addFilterBtn.click();
        browser.pause(3000);
    }

    assertFetchedRecords () {
        expect((this.totalRecords.length)>1).to.equal(true);
    }

    addUserNameFilter () {
        //following method call will enter value into User name filter text box
        this.enterUserName();

        //following will click on Add Filter button
        this.clickOnAddFilterBtn();
    }

}

module.exports = new browseListOfUsersScreen();