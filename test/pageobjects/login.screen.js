const expect = require("chai").expect;
global.tag = process.argv[3];
/**
* object containing all methods, selectors and functionality of login screen
*/
class loginScreen {
    
    get emailTxtBox () { return $('//input[@id="username"]')}

    get passwordTxtBox () { return $('//input[@id="password"]')}

    get loginBtn () { return $('//button[@id="loginbtn"]')}


    enterEmailValue (emailId) {
        this.emailTxtBox.waitForExist({timeout: 60000});
        this.emailTxtBox.setValue(emailId);
    }

    enterPasswordValue (password) {
        this.passwordTxtBox.waitForExist({timeout: 60000});
        this.passwordTxtBox.setValue(password);
    }

    clickOnLoginBtn () {
        this.loginBtn.waitForExist({timeout: 60000});
        this.loginBtn.click();
    }

    loginIntoSite(emailId, password) {
        this.enterEmailValue(emailId);
        this.enterPasswordValue(password);
        this.clickOnLoginBtn();
    }

    assertLoginScreen () {
        this.loginBtn.waitForExist({timeout: 60000});
        expect(this.loginBtn.isDisplayed()).to.equal(true);
    }
}

module.exports = new loginScreen();