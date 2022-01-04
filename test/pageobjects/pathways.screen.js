require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class pathWaysScreen {

    get searchTxtBox () { return $('//input[@placeholder="Search courses"]')}

    get courseName () { return $('//h4[@class="course-title"]/a')}

    get firstUser () { return $('//tr[@id="user-index-participants-17_r0"]/th/a')}

    get forgotUserNameLinkBtn () { return $('//a[@title="Forgot username"]')}

    get forgotPasswordLinkBtn () { return $('//a[@title="Forgot password"]')}

    get forgotUserNameSuccessMsg () { return $('//span[@id="user-notifications"]/div')}

    assertPathWayPage () {
        this.searchTxtBox.waitForExist({timeout: 10000});
        expect(this.searchTxtBox.isDisplayed()).to.equal(true);
    }

    searchCourse () {
        this.searchTxtBox.waitForExist({timeout: 10000});
        this.searchTxtBox.setValue(process.env.COURSE_NAME);
        browser.keys('Enter');
    }

    clickOnSearchedCourseName () {
        this.courseName.waitForExist({timeout: 10000});
        this.courseName.click();
    }

    clickOnFirstUser () {
        this.firstUser.waitForExist({timeout: 10000});
        this.firstUser.click();
    }

    clickOnForgotUserNameLinkBtn () {
        this.forgotUserNameLinkBtn.waitForExist({timeout: 10000});
        this.forgotUserNameLinkBtn.click();
    }

    clickOnForgotPasswordLinkBtn () {
        this.forgotPasswordLinkBtn.waitForExist({timeout: 10000});
        this.forgotPasswordLinkBtn.click();
    }

    assertFogotUserNameMsg () {
        this.forgotUserNameSuccessMsg.waitForExist({timeout: 10000});
        expect(this.forgotUserNameSuccessMsg.getText()).to.contains("The username has been sent by email to the user.");
    }

    assertForgotPasswordMsg () {
        this.forgotUserNameSuccessMsg.waitForExist({timeout: 10000});
        expect(this.forgotUserNameSuccessMsg.getText()).to.contains("The password reset link has been sent by email to the user.");
    }

}

module.exports = new pathWaysScreen();