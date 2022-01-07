require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Site Admin >> SA >> Commitment Statement page
*/
class commitmentStatementScreen {
    
    // get addNewCommitmentBtn () { return $('//div[@class="singlebutton"][2]/form/button')}
    get addNewCommitmentBtn () { return $('/html/body/div[1]/div[3]/div/div/section[1]/div/div/div/div/form/button')}

    get courseDrd () { return $('//select[@name="course"]')}

    get courseValue () { return $('//select[@name="course"]/option[2]')}

    get titleTxtBox () { return $('//input[@id="id_title"]')}

    get descriptionTxtBox () { return $('//textarea[@id="id_description"]')}

    get saveBtn () { return $('//input[@id="id_save"]')}

    get editLinkBtn () { return $('//*[@id="region-main"]/div/div/div/table/tbody/tr[1]/td[4]/a')}

    get successMsg () { return $('//div[@class="alert alert-info alert-block fade in "]')}

    get stmtTitleFromList () { return $('//table[@class="generaltable csstable"]/tbody/tr[1]/td[2]')}

    get stmtDescFromList () { return $('//table[@class="generaltable csstable"]/tbody/tr[1]/td[3]')}


    clickOnAddNewCommitmentBtn () {
        this.addNewCommitmentBtn.waitForExist({timeout: 10000});
        console.log("button is: " + this.addNewCommitmentBtn.getText());
        this.addNewCommitmentBtn.click();
    }

    selectCourse() {
        this.courseDrd.waitForExist({timeout: 10000});
        this.courseDrd.click();
        browser.pause(1000);
        // this.courseDrd.selectByAttribute("value", "3");
        this.courseValue.click();
    }

    enterTitleValue () {
        this.titleTxtBox.waitForExist({timeout: 15000});
        this.titleTxtBox.setValue(process.env.COMMITMENT_TITLE);
    }

    enterDescriptionValue (){
        this.descriptionTxtBox.waitForExist({timeout: 10000});
        this.descriptionTxtBox.setValue(process.env.COMMITMENT_DESC);
    }
    
    enterUpdatedTitleValue () {
        this.titleTxtBox.waitForExist({timeout: 15000});
        this.titleTxtBox.setValue(process.env.UPDATED_COMMITMENT_TITLE);
    }

    enterUpdatedDescValue () {
        this.descriptionTxtBox.waitForExist({timeout: 10000});
        this.descriptionTxtBox.setValue(process.env.UPDATED_COMMITMENT_DESC);
    }

    clickOnSaveBtn () {
        this.saveBtn.waitForExist({timeout: 10000});
        this.saveBtn.click();
    }

    assertSuccessMsg () {
        this.successMsg.waitForExist({timeout: 10000});
        expect(this.successMsg.getText()).to.contains(process.env.COMMITMENT_SUCCESS_MSG);
    }

    clickOnEditLinkBtn () {
        this.editLinkBtn.waitForExist({timeout: 10000});
        this.editLinkBtn.click();
    }

    assertUpdatedCommitmentValue () {
        this.stmtTitleFromList.waitForExist({timeout: 10000});
        expect(this.stmtTitleFromList.getText()).to.equal(process.env.UPDATED_COMMITMENT_TITLE);
        expect(this.stmtDescFromList.getText()).to.equal(process.env.UPDATED_COMMITMENT_DESC);
    }

    addNewCommitment () {
        //following method call will click on "Add new commitment statement" button
        this.clickOnAddNewCommitmentBtn();

        //following will select course from drop down
        this.selectCourse();

        //following method call will enter Title value
        this.enterTitleValue();

        //following method call will enter description value
        this.enterDescriptionValue();

        //following method call will click on Save button
        this.clickOnSaveBtn();
    }

    updateCommitment () {
        //following method call will click on "Edit" link button
        this.clickOnEditLinkBtn();

        //following will update the title value
        this.enterUpdatedTitleValue();

        //following will update the description value
        this.enterUpdatedDescValue();

        //following will click on Save button
        this.clickOnSaveBtn();
    }

}

module.exports = new commitmentStatementScreen();