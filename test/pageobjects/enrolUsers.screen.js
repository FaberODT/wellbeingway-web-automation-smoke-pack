require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Searched course page
*/
class searchedCourseScreen {

    get enrolUsersPopUp () { return $('//h5[@class="modal-title"]')}

    get selectUserTxtBox () { return $('/html/body/div[5]/div[2]/div/div/div[2]/form/fieldset/div/div[1]/div[2]/div[3]/input')}
    
    get selectUserSuggestion () { return $('//ul[@class="form-autocomplete-suggestions"]/li/span/span[1]')}
    // /html/body/div[5]/div[2]/div/div/div[2]/form/fieldset/div/div[1]/div[2]/ul/li/span/span[1]
    // /html/body/div[8]/div[2]/div/div/div[2]/form/fieldset/div/div[1]/div[2]/ul/li/span/span[1]

    get showMoreLinkBtn () { return $('//a[@class="moreless-toggler"]')}

    get enrolUserBtn () { return $('//button[@data-action = "save"]')}

    get successMsg () { return $('//div[@class="toast-message px-1"]')}

    assertEnrolUsersPopUp () {
        this.enrolUsersPopUp.waitForExist({timeout: 10000});
        browser.pause(2000);
        expect(this.enrolUsersPopUp.isDisplayed()).to.equal(true);
    }

    enterUserName () {
        this.selectUserTxtBox.waitForExist({timeout: 10000});
        console.log("Email while enrolling newly added user is: " + emailValueForNewUser);
        this.selectUserTxtBox.setValue(emailValueForNewUser);
        browser.pause(5000);
        browser.keys('Enter');
    }

    clickOnSelectUserSuggestion () {
        this.selectUserSuggestion.waitForExist({timeout: 10000});
        this.selectUserSuggestion.click();
    }

    clickOnShowMoreLinkBtn () {
        this.showMoreLinkBtn.waitForExist({timeout: 10000});
        this.showMoreLinkBtn.click();
    }


    clickOnEnrolBtn () {
        this.enrolUserBtn.waitForExist({timeout: 10000});
        this.enrolUserBtn.click();
    }

    assertSuccessMsg () {
        this.successMsg.waitForExist({timeout: 50000});
        expect(this.successMsg.getText()).to.contains("1 enrolled users");
    }

    enrollNewUser (){
        //following method call will select user from suggestion text box
        this.enterUserName();
        // this.clickOnSelectUserSuggestion();

        //following method call will click on "Show More" link button
        this.clickOnShowMoreLinkBtn();

        //following will click on Enrol button
        this.clickOnEnrolBtn();
    }
}

module.exports = new searchedCourseScreen();