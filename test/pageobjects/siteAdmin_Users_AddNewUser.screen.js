require('dotenv').config();
const expect = require("chai").expect;


x = Math.floor((Math.random() * 10000000) + 1);
emailValueForNewUser = "test" + Math.floor((Math.random() * 10000000) + 1) + "@test.com";
userNameValue = "nimeshb" + Math.floor((Math.random() * 10000000) + 1);
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class addNewUserScreen {

    get userNameTxtBox () { return $('//input[@id="id_username"]')}

    get enterTextLinkBtn () { return $('//span[@data-passwordunmask="displayvalue"]')}

    get enterPasswordTxtBox () { return $('//input[@id="id_newpassword"]')}

    get firstNameTxtBox () { return $('//input[@id="id_firstname"]')}

    get surNameTxtBox () { return $('//input[@id="id_lastname"]')}

    get emailTxtBox () { return $('//input[@id="id_email"]')}

    get createUser () { return $('//input[@id="id_submitbutton"]')}

    get successMsg () { return $('//span[@id="user-notifications"]/div')}


    enterUserName () {
        this.userNameTxtBox.waitForExist({timeout: 10000});
        this.userNameTxtBox.setValue(userNameValue);
    }

    clickOnEnterTextLinkBtn () {
        this.enterTextLinkBtn.waitForExist({timeout: 10000});
        this.enterTextLinkBtn.click();
    }

    enterPassword() {
        this.enterPasswordTxtBox.waitForExist({timeout: 10000});
        this.enterPasswordTxtBox.setValue("P@ssw0rd");
    }

    enterFirstName () {
        this.firstNameTxtBox.waitForExist({timeout: 10000});
        this.firstNameTxtBox.setValue("Nimesh");
    }

    enterSurName () {
        this.surNameTxtBox.waitForExist({timeout: 10000});
        this.surNameTxtBox.setValue("Bhatt");
    }

    enterEmail () {
        this.emailTxtBox.waitForExist({timeout: 10000});
        console.log("Email while creating new user is: " + emailValueForNewUser);
        this.emailTxtBox.setValue(emailValueForNewUser);
    }

    clickOnCreateUserBtn () {
        this.createUser.waitForExist({timeout: 10000});
        this.createUser.click();
    }

    assertSuccessMsg (){
        this.successMsg.waitForExist({timeout: 10000});
        expect(this.successMsg.getText()).to.contains("Changes saved");
    }

    createNewUser () {
        //following method call will enter "UserName"
        this.enterUserName();

        //following method calls will enter "New Password"
        this.clickOnEnterTextLinkBtn();
        this.enterPassword();

        //following method call will enter "First Name"
        this.enterFirstName();

        //following method call will enter "Sur Name"
        this.enterSurName();

        //following method call will enter "Email"
        this.enterEmail();

        //following method call will click on "Create user" button
        this.clickOnCreateUserBtn();
    }
}

module.exports = new addNewUserScreen();