require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Session Calendar >> Create Session page
*/
class createSessionScreen {

    get titleTxtBox () { return $('//input[@id="id_title"]')}

    get locationTxtBox () { return $('//textarea[@id="id_location"]')}

    get notesTxtBox () { return $('//textarea[@id="id_session_notes"]')}

    // get allocatedCoursesDrd () { return $('/html/body/div[2]/div[3]/div/div/section/div/div/div/div/form/fieldset[3]/div/div/div[2]/div[3]/span')}
    get allocatedCoursesDrd () { return $$('//div[@class="d-md-inline-block mr-md-2 position-relative"][1]/span')}

    // get allocatedCoachDrd () { return $$('//div[@class="d-md-inline-block mr-md-2 position-relative"][2]/span')}

    get createSessionBtn () { return $('//input[@id="id_submitbutton"]')}

    get successMsg () { return $('//div[@id="modal-body"]/p')}

    get viewCalendarBtn () { return $$('//div[@class="singlebutton"][1]/form/button')}

    get eventName () { return $$('//div[@class="fc-event-title fc-sticky"]')}

    eventName_Flag = false;


    enterTitleValue () {
        this.titleTxtBox.waitForExist({timeout: 10000});
        this.titleTxtBox.setValue(process.env.CREATE_SESSION_TITLE);
    }

    enterLocationValue () {
        this.locationTxtBox.waitForExist({timeout: 10000});
        this.locationTxtBox.setValue(process.env.CREATE_SESSION_LOCATION);
    }

    enterNotesValue () {
        this.notesTxtBox.waitForExist({timeout: 10000});
        this.notesTxtBox.setValue(process.env.CREATE_SESSION_NOTES);
    }

    selectCourse () {
        this.allocatedCoursesDrd[0].waitForExist({timeout: 20000});
        this.allocatedCoursesDrd[0].click();
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        this.notesTxtBox.click();
        browser.pause(5000);
    }

    selectCoach () {
        this.allocatedCoursesDrd[1].waitForExist({timeout: 20000});
        this.allocatedCoursesDrd[1].click();
        browser.pause(1000);
        browser.keys('Enter');
        browser.pause(1000);
        this.notesTxtBox.click();
        browser.pause(5000);
    }

    clickOnCreateSessionBtn () {
        this.createSessionBtn.waitForExist({timeout: 20000});
        this.createSessionBtn.click();
    }

    assertSuccessMsg () {
        this.successMsg.waitForExist({timeout: 10000});
        expect(this.successMsg.getText()).to.contains(process.env.CREATE_SESSION_SUCCESS_MSG);
    }

    clickOnViewCalendarBtn () {
        this.viewCalendarBtn[0].waitForExist({timeout: 10000});
        console.log("Button name is: " + this.viewCalendarBtn[0].getText());
        this.viewCalendarBtn[0].click();
    }

    assertEventName () {
        browser.pause(3000);
        this.eventName[0].waitForExist({timeout: 10000});
        console.log("total dsplayed events are: " + this.eventName.length);
        for(let i = 0; i < this.eventName.length; i++){
            console.log("event names are: " + this.eventName[i].getText());
        //     if((this.eventName[i].getText()).to.contains(process.env.CREATE_SESSION_TITLE)) {
        //         this.eventName_Flag = true;
        //         break;
        //     }
        //     else{
        //         this.eventName_Flag = false;
        //     }
        // }
        // if(this.eventName_Flag == true){
        //     expect(true).to.equal(true);
        //     console.log("Added session is displaying on the Calendar");
        // }else{
        //     expect(true).to.equal(false);
        //     console.log("Added session is not displaying on the Calendar");
        // }
        }
    }

    addSession () {
        //following method call will enter Session title
        this.enterTitleValue();

        //following method call will enter Session Location
        this.enterLocationValue();

        //following method call will enter Session Notes
        this.enterNotesValue();

        //following method call will select the course
        this.selectCourse();

        //following method call will select coach
        this.selectCoach();

        //following method call will click on "Create Session" button
        this.clickOnCreateSessionBtn();

        //following method call will assert the success message
        this.assertSuccessMsg();

        //following method call will click on "View Calendar" button
        this.clickOnViewCalendarBtn();
        browser.pause(5000);
    }
}

module.exports = new createSessionScreen();