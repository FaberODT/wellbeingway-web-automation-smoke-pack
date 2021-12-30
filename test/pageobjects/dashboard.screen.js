require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Dashboard page
*/
class dashboardScreen {
    
    get dashboardTab () { return $('//a[@data-key="myhome"]')}

    get pathWaysTab () { return $('//*[@id="header"]/div[2]/div/div/ul/li[2]/a')}

    get searchTxtBox () { return $('//input[@id="searchinput-61cd88455e52661cd88455b9bc3"]')}

    get courseName () { return $('//h4[@class="course-title"]/a')}

    assertDahsboradPage () {
        this.dashboardTab.waitForExist({timeout: 60000});
        expect(this.dashboardTab.isDisplayed()).to.equal(true);
    }

    clickOnPathWaysTab () {
        this.pathWaysTab.waitForExist({timeout: 60000});
        this.pathWaysTab.click();
    }

    assertPathWayPage () {
        this.searchTxtBox.waitForExist({timeout: 60000});
        expect(this.searchTxtBox.isDisplayed()).to.equal(true);
    }

    searchCourse () {
        this.searchTxtBox.waitForExist({timeout: 60000});
        this.searchTxtBox.setValue(process.env.COURSE_NAME);
        browser.keys('Enter');
    }

    clickOnSearchedCourseName () {
        this.searchCourse.waitForExist({timeout: 60000});
        this.searchCourse.click();
    }

}

module.exports = new dashboardScreen();