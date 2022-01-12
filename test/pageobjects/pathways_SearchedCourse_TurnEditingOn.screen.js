require('dotenv').config();
const expect = require("chai").expect;
/**
* object containing all methods, selectors and functionality of Pathways >> Searched course >> Turn Editing On page
*/
class turnEditingOnScreen {

    get addActivityOrResourceLinkBtn () { return $$('//button[@data-action="open-chooser"][1]/span')}

    get allTab () { return $('//a[@aria-label="Default activities"]')}

    get scormPackage () { return $('//a[@title="Add a new SCORM package"]')}

    get urlPackage () { return $$('//a[@title="Add a new URL"]')}

    get filePackage () { return $$('//a[@title="Add a new File"]')}

    get scormNameTxtBox () { return $('//input[@id="id_name"]')}

    get uploadFileBtn () { return $('//a[@title="Add..."]')}

    get serverFileTab () { return $$('//div[@role="tablist"]/div[1]')}

    get selectThisFileBtn () { return $('/html/body/div[12]/div[3]/div/div[2]/div/div[2]/form/div[4]/div/button[1]')}

    get selectThisFileFileBtn () { return $('/html/body/div[13]/div[3]/div/div[2]/div/div[2]/form/div[4]/div/button[1]')}

    get firstFolder () { return $$('//div[@class="fp-iconview"]/a')}

    get saveAndDisplayBtn () { return $('//input[@id="id_submitbutton"]')}

    get enterBtn () { return $('//input[@value="Enter"]')}

    get urlNameTxtBox () { return $('//input[@id="id_name"]')}

    get externalUrlTxtBox () { return $('//input[@id="id_externalurl"]')}

    get resourceTypes () { return $('//select[@id="id_types"]')}

    get savedUrl () { return $('//div[@class="urlworkaround"]/a')}

    get savedFile () { return $('//div[@role="main"]/h2')}

    clickOnAddActivityOrResourceLinkBtn () {
        this.addActivityOrResourceLinkBtn[0].waitForExist({timeout: 10000});
        this.addActivityOrResourceLinkBtn[0].click();
    }

    clickOnAllTab () {
        this.allTab.waitForExist({timeout: 10000});
        this.allTab.click();
    }

    clickOnSCORMPackage () {
        this.scormPackage.waitForExist({timeout: 10000});
        this.scormPackage.click();
    }

    clickOnURLPackage () {
        browser.pause(2000);
        this.urlPackage[1].waitForExist({timeout: 10000});
        this.urlPackage[1].click();
    }

    clickOnFilePackage () {
        this.filePackage[1].waitForExist({timeout: 10000});
        this.filePackage[1].click();
    }

    enterScormName () {
        this.scormNameTxtBox.waitForExist({timeout: 10000});
        this.scormNameTxtBox.setValue(process.env.SCORM_NAME);
    }

    clickOnUploadFileBtn () {
        this.uploadFileBtn.waitForExist({timeout: 10000});
        browser.pause(10000);
        this.uploadFileBtn.click();
    }

    clickOnServerFileTab () {
        this.serverFileTab[0].waitForExist({timeout: 10000});
        this.serverFileTab[0].click();
    }

    selectFile () {
        browser.pause(5000);
        this.firstFolder[0].waitForExist({timeout: 10000});
        this.firstFolder[0].doubleClick();
        browser.pause(5000);
        this.firstFolder[0].doubleClick();
        browser.pause(2000);
    }

    clickOnSelectThisFileBtn () {
        this.selectThisFileBtn.waitForExist({timeout: 10000});
        this.selectThisFileBtn.click();
        browser.pause(5000);
    }

    clickOnSelectThisFileFileBtn () {
        this.selectThisFileFileBtn.waitForExist({timeout: 10000});
        this.selectThisFileFileBtn.click();
        browser.pause(5000);
    }

    clickOnSaveAndDisplayBtn () {
        this.saveAndDisplayBtn.waitForExist({timeout: 10000});
        this.saveAndDisplayBtn.click();
    }

    assertEnterBtn () {
        this.enterBtn.waitForExist({timeout: 15000});
        expect(this.enterBtn.isDisplayed()).to.equal(true);
    }

    enterUrlName () {
        this.urlNameTxtBox.waitForExist({timeout: 10000});
        this.urlNameTxtBox.setValue(process.env.URL_NAME);
    }

    enterUrlExternalLink () {
        this.externalUrlTxtBox.waitForExist({timeout: 10000});
        this.externalUrlTxtBox.setValue(process.env.URL_EXTERNAL_LINK);
    }

    selectResourcetype () {
        this.resourceTypes.waitForExist({timeout: 10000});
        this.resourceTypes.selectByAttribute("value", "video");
    }

    assertSavedUrl () {
        this.savedUrl.waitForExist({timeout: 10000});
        expect(this.savedUrl.getText()).to.contains(process.env.URL_EXTERNAL_LINK);
    }

    assertSavedFile () {
        this.savedFile.waitForExist({timeout: 10000});
        expect(this.savedFile.getText()).to.contains(process.env.SCORM_NAME);
    }

    addSCORMPackage() {
        //following method call will click on "SCORM Package" package 
        this.clickOnSCORMPackage();

        //following method call will enter name for the package
        this.enterScormName();

        //following method call will click on "Upload File" button
        this.clickOnUploadFileBtn();

        //following methodcall will click on "Server Files" tab
        this.clickOnServerFileTab();

        //following method call will select a file
        this.selectFile();

        //following will click on "Select this file" button
        this.clickOnSelectThisFileBtn();
        
        //following method call will click on Save and Display button
        this.clickOnSaveAndDisplayBtn();
    }

    addURLPackage () {
        //following method call will click on "URL " package
        this.clickOnURLPackage();

        //following method call will enter URL Name
        this.enterUrlName();

        //following method call will enter External URL
        this.enterUrlExternalLink();

        //following method call will select the resource tyep
        this.selectResourcetype();

        //following method call will click on Save and Display button
        this.clickOnSaveAndDisplayBtn();
    }

    addFilePackage () {
        //following method call will click on "File" package
        this.clickOnFilePackage();

        //following method call will enter name for the package
        this.enterScormName();

        //following method call will click on "Upload File" button
        this.clickOnUploadFileBtn();

        //following methodcall will click on "Server Files" tab
        this.clickOnServerFileTab();

        //following method call will select a file
        this.selectFile();

        //following will click on "Select this file" button
        this.clickOnSelectThisFileFileBtn();
        
        //following method call will select the resource tyep
        this.selectResourcetype();

        //following method call will click on Save and Display button
        this.clickOnSaveAndDisplayBtn();
    }

}

module.exports = new turnEditingOnScreen();