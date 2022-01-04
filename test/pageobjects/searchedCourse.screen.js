require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Searched course page
*/
class searchedCourseScreen {

    get participantTab () { return $('//*[@id="nav-drawer"]/nav[1]/ul/li[2]/a/div/div/span[2]')}

    get invitePatientBtn () { return $('//input[@value="Invite patient"]')}

    get enrolUsersBtn () { return $('//input[@value="Enrol users"]')}

    get cohortSelection () { return $('//select[@id="id_cohortid"]')}

    get groupSelection () { return $('//select[@id="id_groupid"]')}

    get firstNameTxtBox () { return $('//input[@id="id_firstname"]')}

    get lastNameTxtBox () { return $('//input[@id="id_lastname"]')}

    get emailTxtBox () { return $('//input[@id="id_email"]')}

    get serviceNumberTxtBox () { return $('//input[@id="id_serviceusernumber"]')}

    get inviteByEmailBtn () { return $('//input[@id="id_emailinvite"]')}

    get successMsg () { return $('//div[@id="modal-body"]/p')}

    x = Math.floor((Math.random() * 10000000) + 1);
    emailValue = "test" + this.x + "@test.com";

    clickOnParticipantTab () {
        this.participantTab.waitForExist({timeout: 10000});
        this.participantTab.click();
    }

    clickOnInvitePatientButton () { 
        this.invitePatientBtn.waitForExist({timeout: 10000});
        this.invitePatientBtn.click();
    }

    clickOnEnrolUsersBtn () {
        this.enrolUsersBtn.waitForExist({timeout: 10000});
        this.enrolUsersBtn.click();
    }

    /**
     * Following method will select "Testcourseone one" from cohort drop down
     */
    selectCohort () {
        this.cohortSelection.waitForExist({timeout: 10000});
        this.cohortSelection.click();
        browser.pause(1000);
        this.cohortSelection.selectByAttribute("value", "14");
    }

    /**
     * Following method will select "Trial - LCD Dig - Trial group" from group drop down
     */
    selectGroup () { 
        this.groupSelection.waitForExist({timeout: 10000});
        this.groupSelection.click();
        browser.pause(1000);
        this.groupSelection.selectByAttribute("value", "19");
    }

    enterFirstName () {
        this.firstNameTxtBox.waitForExist({timeout: 10000});
        this.firstNameTxtBox.setValue("Nimesh");
    }

    enterLastName () {
        this.lastNameTxtBox.waitForExist({timeout: 10000});
        this.lastNameTxtBox.setValue("Bhatt");
    }

    enterEmail () {
        this.emailTxtBox.waitForExist({timeout: 10000});
        this.emailTxtBox.setValue(this.emailValue);
    }

    enterServiceNumber () {
        this.serviceNumberTxtBox.waitForExist({timeout: 10000});
        this.serviceNumberTxtBox.setValue("service123");
    }

    clickOnInviteByEmailBtn () {
        this.inviteByEmailBtn.waitForExist({timeout: 10000});
        this.inviteByEmailBtn.click();
    }

    addPatientByEmail () {
        //following method call will select Cohort "Testcourseone one"
        this.selectCohort();

        //following method call will select Group "Trial - LCD Dig - Trial group"
        this.selectGroup();

        //following method call will enter "First Name"
        this.enterFirstName();

        //following method call will enter "Last Name"
        this.enterLastName();

        //following method call will enter "email"
        this.enterEmail();

        //following method call will enter "Service number"
        this.enterServiceNumber();

        //following method call will click on "Invite Patient by Email" button
        this.clickOnInviteByEmailBtn();
    }

    getSuccessMsg () {
        this.successMsg.waitForExist({timeout: 10000});
        expect(this.successMsg.getText()).to.equal("Invitation successfully sent");
    }
}

module.exports = new searchedCourseScreen();