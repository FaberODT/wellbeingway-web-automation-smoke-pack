require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Site Admin >> Users >> Site Administrator page
*/
class siteAdministratorScreen {

    get searchTxtBox () { return $('//input[@id="addselect_searchtext"]')}

    get searchedUser () { return $('//select[@id="addselect"]/optgroup/option[1]')}

    get addBtn () { return $('//input[@id="add"]')}

    get confirmationMsg () { return $('//div[@id="modal-body"]')}

    // get continueBtn () { return $('//div[@class="singlebutton"][1]/form[1]/button[0]')}
    get continueBtn () { return $('/html/body/div[1]/div[3]/div/div/section[1]/div/div/div/div/div/div[3]/div/div[1]/form/button')}

    get siteAdminList () { return $$('//select[@id="removeselect"]/optgroup[2]/option')}
    
    siteAdmin_flag = false;

    enterSearchValue () {
        this.searchTxtBox.waitForExist({timeout: 10000});
        this.searchTxtBox.setValue(process.env.SEARCHADMINISTRATOR);
        browser.pause(5000);
    }

    selectSearchedAdmin () {
        this.searchedUser.waitForExist({timeout: 10000});
        this.searchedUser.click();
        browser.pause(500);
    }

    clickOnAddBtn () {
        this.addBtn.waitForExist({timeout: 10000});
        this.addBtn.click();
    }

    assertConfirmationMsg () {
        this.confirmationMsg.waitForExist({timeout: 10000});
        expect(this.confirmationMsg.isDisplayed()).to.equal(true);
    }

    clickOnContinueBtn () {
        this.continueBtn.waitForExist({timeout: 10000});
        console.log("Button name: " + this.continueBtn.getText());
        this.continueBtn.click();
    }

    assertNewlyAddedSiteAdmin () {
        for (var i = 0; i < this.siteAdminList.length; i++){
            console.log("Admin list: " + this.siteAdminList[i].getText());
            if((this.siteAdminList[i].getText()).includes(process.env.SEARCHADMINISTRATOR)){
                this.siteAdmin_flag = true;
                break;
            }else{
                this.siteAdmin_flag = false;
            }
        }
        if(this.siteAdmin_flag == true){
            console.log("User added in Site Admin list");
            expect(true).to.equal(true);
        }else{
            console.log("User not added in Site Admin list");
            expect(false).to.equal(true);
        }
    }

    addNewSiteAdmin (){
        //following will enter user name into search text box
        this.enterSearchValue();

        //following will select the searched user
        this.selectSearchedAdmin();

        //following method call will click on "Add" button
        this.clickOnAddBtn();

        //following method call will assert confirmation message
        this.assertConfirmationMsg();

        //following method call will click on "Continue" button
        this.clickOnContinueBtn();
    }

}

module.exports = new siteAdministratorScreen();