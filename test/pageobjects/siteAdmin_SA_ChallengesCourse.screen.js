require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Site Admin >> SA >> Challenges Course page
*/
class challengesCourseScreen {

    get courseDrd () {return $('//select[@name="course"]')}

    get challengesLibraryList () { return $$('//div[@class="challenges-lib list-container"]/ul/li')}

    get categories () { return $$('//ul[@class="ui-sortable"]')}

    get saveBtn () { return $('//*[@id="region-main"]/div/div/div/div/div[2]/a')};

    get saveBtnOfConfirmationPopUp () { return $('//button[@data-action="save"]')}

    get successMsg () { return $('//div[@data-aria-autofocus="true"]')}

    selectCourse () {
        this.courseDrd.waitForExist({timeout: 10000}) ;
        this.courseDrd.click();
        browser.pause(1000);
        this.courseDrd.selectByAttribute("value", "2");
    }

    addChallenges () {
        this.challengesLibraryList[0].waitForExist({timeout: 10000});
        this.challengesLibraryList[0].dragAndDrop(this.categories[0]);
        this.challengesLibraryList[0].dragAndDrop(this.categories[1]);
        this.challengesLibraryList[0].dragAndDrop(this.categories[2]);
    }

    clickOnSaveBtn () {
        this.saveBtn.waitForExist({timeout: 10000});
        this.saveBtn.click();
    }

    clickOnConfirmationPopupSaveBtn () {
        this.saveBtnOfConfirmationPopUp.waitForExist({timeout: 10000});
        this.saveBtnOfConfirmationPopUp.click();
    }

    assertSuccessMsg () {
        this.successMsg.waitForExist({timeout: 10000});
        expect(this.successMsg.getText()).to.contains(process.env.SUCCESS_MSG);
    }
}

module.exports = new challengesCourseScreen();