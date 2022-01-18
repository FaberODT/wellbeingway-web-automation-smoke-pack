require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Site Admin >> SA >> Challenges Library page
*/
class challengesLibraryScreen {
    
    get addChallengeBtn () { return $('/html/body/div[1]/div[3]/div/div/section[1]/div/div/div/div[1]/form/button')}

    get titleTxtBox () { return $('//input[@id="id_title"]')}

    get descTxtBox () { return $('//textarea[@id="id_description"]')}

    get saveBtn () { return $('//input[@id="id_save"]')}

    get successMsg () { return $('//div[@data-aria-autofocus="true"]')}

    get editIconBtn () { return $$('//i[@title="Edit"]')}

    get yesEditBtn () { return $('//button[@data-action="save"]')}

    clickOnAddChallengeBtn () {
        this.addChallengeBtn.waitForExist({timeout:10000});
        this.addChallengeBtn.click();
    }

    enterTitle () {
        this.titleTxtBox.waitForExist({timeout: 10000});
        this.titleTxtBox.setValue(process.env.CHALLENGE_TITLE);
    }

    editTitle () {
        this.titleTxtBox.waitForExist({timeout: 10000});
        this.titleTxtBox.setValue(process.env.CHALLENGE_TITLE1);
    }

    enterDescription () {
        this.descTxtBox.waitForExist({timeout: 10000});
        this.descTxtBox.setValue(process.env.CHALLENGE_DESC);
    }

    clickOnSaveBtn () {
        this.saveBtn.waitForExist({timeout: 10000});
        this.saveBtn.click();
    }

    assertSuccessMsg () {
        this.successMsg.waitForExist({timeout: 10000});
        expect(this.successMsg.getText()).to.contains(process.env.LIBRARY_SUCCESS_MSG);
    }

    clickOnEditLinkBtn () {
        this.editIconBtn[0].waitForExist({timeout: 10000});
        this.editIconBtn[0].click();
    }

    clickOnYesEditBtn () {
        this.yesEditBtn.waitForExist({timeout: 10000});
        this.yesEditBtn.click();
    }

    addNewChallenge () {
        //following method call will click on "Add Challenge" button
        this.clickOnAddChallengeBtn();

        //following method call will enter value into Title text box
        this.enterTitle();

        //following method call will enter value into Description text box
        this.enterDescription();

        //following method call will click on Save button
        this.clickOnSaveBtn();
    }

    editChallenge() {
        //following method call will click on "Edit" icon button of first challenge
        this.clickOnEditLinkBtn();

        //following method call will click on "Yes Edit" button from confirmation pop-up
        this.clickOnYesEditBtn();

        //following will update the title value
        this.editTitle();

        //following will click on "Save" button
        this.clickOnSaveBtn();
    }
}

module.exports = new challengesLibraryScreen();