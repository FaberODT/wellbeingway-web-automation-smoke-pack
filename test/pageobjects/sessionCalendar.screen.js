require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Session Calendar page
*/
class sessionCalendarScreen {

    get sessionCalendarLbl () { return $('//div[@role="main"]/h2')}

    get createSessionBtn () { return $('//button[@class="fc-createSingleSession-button fc-button fc-button-primary"]')}

    get unavailableBtn () { return $('//div[@id="session-calendar"]/div/div[3]/button[3]')}

    get reasonDrd () { return $('//select[@name="reason"]')}

    get forSpecificTimeRadioBtn () { return $('//input[@value="period"]')}

    get fromHourDrd () { return $('//select[@name="unavailable_from_hour"]')}

    get toHourDrd () {return $('//select[@name="unavailable_to_hour"]')}

    get updateAvailabilityBtn () { return $('/html/body/div[5]/div[2]/div/div/div[3]/button[1]')}

    get reasonText () { return $('//div[@class="fc-event-title fc-sticky"]')}

    get coachDrd () { return $('//select[@id="id_coachid"]')}

    assertSessionCalendarPage() {
        browser.pause(5000);
        this.sessionCalendarLbl.waitForExist({timeout: 10000});
        expect(this.sessionCalendarLbl.isDisplayed()).to.equal(true);
    }

    clickOnUnavailableBtn () {
        this.unavailableBtn.waitForExist({timeout: 10000});
        console.log("button name: " + this.unavailableBtn.getText());
        this.unavailableBtn.click();
    }

    clickOnCreateSessionBtn () {
        this.createSessionBtn.waitForExist({timeout: 10000});
        console.log("Button name is: " + this.createSessionBtn.getText());
        this.createSessionBtn.click();
    }

    clickOnSpecificTimeRadioBtn () {
        this.forSpecificTimeRadioBtn.waitForExist({timeout: 10000});
        this.forSpecificTimeRadioBtn.click();
    }

    selectFromHour () {
        this.fromHourDrd.waitForExist({timeout: 10000});
        this.fromHourDrd.click();
        browser.pause(1000);
        this.fromHourDrd.selectByAttribute("value", "1");
    }

    selectToHour () {
        this.toHourDrd.waitForExist({timeout: 10000});
        this.toHourDrd.click();
        browser.pause(1000);;
        this.toHourDrd.selectByAttribute("value", "1");
    }

    selectReason () {
        this.reasonDrd.waitForExist({timeout: 10000});
        this.reasonDrd.click();
        browser.pause(1000);
        this.reasonDrd.selectByAttribute("value", process.env.REASON_TEXT);
    }

    clickOnUpdateAvailabilityBtn () {
        this.updateAvailabilityBtn.waitForExist({timeout: 10000});
        this.updateAvailabilityBtn.click();
    }

    assertReasonText () {
        this.reasonText.waitForExist({timeout: 10000});
        expect(this.reasonText.getText()).to.contains(process.env.REASON_TEXT);
    }

    applyUnavailabilityForWholeDay(){
        //following method call will click on "Unavailable" button
        this.clickOnUnavailableBtn();

        //following method call will select the reason as "Annual Leave"
        this.selectReason();

        //following method call will click on Update Unavailability button
        this.clickOnUpdateAvailabilityBtn();
        browser.pause(1000);
    }

    selectCoach () {
        this.coachDrd.waitForExist({timeout: 10000});
        this.coachDrd.selectByVisibleText(process.env.SESSION_COACH);
        browser.pause(5000);
    }

    applyUnavailabilityForSpecificTime () {
        //following method call will click on "Unavailable" button
        this.clickOnUnavailableBtn();

        //following method call will select "For Specific time" radio button
        this.clickOnSpecificTimeRadioBtn();

        //following method call will select From hour
        this.selectFromHour();

        //following method call will select To hour
        this.selectToHour();

        //following method call will select the reason as "Annual Leave"
        this.selectReason();
        browser.pause(1000);

        //following method call will click on Update Unavailability button
        this.clickOnUpdateAvailabilityBtn();
        browser.pause(1000);
    }
}

module.exports = new sessionCalendarScreen();