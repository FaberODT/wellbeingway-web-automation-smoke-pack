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

    get eventName () { return $$('//div[@class="fc-event-title fc-sticky"]')}

    get cancelSessionsBtn () { return $('//button[@class="btn btn-danger"]')}

    get cancelSingleSessionBtn () { return $('//button[@rel="cancel-single"]')}

    get cancelWholeSessionBtn () { return $('//button[@rel="cancel-day"]')}

    eventName_Flag = false;
    event ="";

    clickOnEventName () {
        browser.pause(3000);
        this.eventName[0].waitForExist({timeout: 10000});
        console.log("total dsplayed events are: " + this.eventName.length);
        for(let i = 0; i < this.eventName.length; i++){
            console.log("event names are: " + this.eventName[i].getText());
            console.log("env value is: " + process.env.CREATE_SESSION_TITLE);
            this.event = this.eventName[i].getText()
            if(expect(this.event).to.contains(process.env.CREATE_SESSION_TITLE)) {
                this.eventName_Flag = true;
                this.eventName[i].click();
                break;
            }
            else{
                this.eventName_Flag = false;
            }
        }
        if(this.eventName_Flag == true){
            expect(true).to.equal(true);
            console.log("Clicked on session");
        }else{
            expect(true).to.equal(false);
            console.log("Such session is not displaying on the Calendar");
        }
    }

    clickOnCancelSessionBtn () {
        this.cancelSessionsBtn.waitForExist({timeout: 10000});
        this.cancelSessionsBtn.click();
        browser.pause(2000);
    }

    clickOnCancelSingleSessionBtn () {
        this.cancelSingleSessionBtn.waitForExist({timeout: 10000});
        this.cancelSingleSessionBtn.click();
        browser.pause(2000);
    }

    clickOnCancelWholeDaySessionBtn () {
        this.cancelWholeSessionBtn.waitForExist({timeout: 10000});
        this.cancelWholeSessionBtn.click();
    }

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
        browser.pause(2000);
        this.reasonDrd.selectByAttribute("value", process.env.SESSION_REASON_TEXT);
    }

    clickOnUpdateAvailabilityBtn () {
        this.updateAvailabilityBtn.waitForExist({timeout: 10000});
        this.updateAvailabilityBtn.click();
    }

    assertReasonText () {
        this.reasonText.waitForExist({timeout: 10000});
        expect(this.reasonText.getText()).to.contains(process.env.SESSION_REASON_TEXT);
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