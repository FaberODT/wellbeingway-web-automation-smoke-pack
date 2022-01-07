require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Site Admin >> Reports >> ICS ReportingQueries page
*/
class icsReportingQueriesScreen {
    
    get sessionBookingLinkBtn () { return $('/html/body/div[1]/div[3]/div/div/section[1]/div/div/div/div[4]/h2/a')}

    get failedBookSession () { return $('/html/body/div[1]/div[3]/div/div/section[1]/div/div/div/div[4]/div/p[1]/a[1]')}

    get failedBookSessionReport () { return $$('//table[@id="report_customsql_results"]/tbody/tr')}

    clickOnSessionBookingLinkBtn () { 
        this.sessionBookingLinkBtn.waitForExist({timeout: 10000});
        this.sessionBookingLinkBtn.click();
    }

    clickOnFailedBookSessionLinkBtn () {
        this.failedBookSession.waitForExist({timeout: 10000});
        this.failedBookSession.click();
    }

    assertFailedBookSessionReport () {
        this.failedBookSessionReport[0].waitForExist({timeout: 20000});
        expect((this.failedBookSessionReport.length)>0).to.equal(true);
    }
}

module.exports = new icsReportingQueriesScreen();