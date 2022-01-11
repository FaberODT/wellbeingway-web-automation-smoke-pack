const expect = require("chai").expect;
global.tag = process.argv[3];
/**
* object containing all methods, selectors and functionality of Forum Moderation page
*/
class forumModerationPage {
    
    get forumModerationHeader () { return $('//div[@class="page-header-headings"]/h1')}

    get firstStatusDrd () { return $('/html/body/div[1]/div[3]/div/div/section/div/div/div/div/div/div[3]/table/tbody/tr[1]/td[5]/select')}

    get reasonTextArea () { return $('//textarea[@name="reason"]')}

    get saveChangesBtn () { return $('//button[@data-action="save"]')}

    get deletedPostBtn () { return $('//form[@method="get"]/button')}

    get totalDeletedPosts () { return $$('//div[@class="deleted-posts"]/div')}

    get restorePostLinkBtn () { return $$('//a[@class="restore-post"]')}

    postCountBeforeDelete = 0;
    postCountAfterDelete = 0;

    assertForumModerationPage () {
        this.forumModerationHeader.waitForExist({timeout: 10000});
        expect(this.forumModerationHeader.isDisplayed()).to.equal(true);
    }

    selectDeleteFromStautsDrd () { 
        this.firstStatusDrd.waitForExist({timeout: 10000});
        this.firstStatusDrd.click();
        browser.pause(1000);
        this.firstStatusDrd.selectByAttribute("value", "0");
    }

    enterReasonText () {
        this.reasonTextArea.waitForExist({timeout: 10000});
        this.reasonTextArea.setValue(process.env.REASON_TEXT);
    }

    clickOnSaveChangesBtn() {
        this.saveChangesBtn.waitForExist({timeout: 10000});
        this.saveChangesBtn.click();
    }

    clickOnDeletedPostBtn () {
        this.deletedPostBtn.waitForExist({timeout: 10000});
        this.deletedPostBtn.click();
    }

    totalPostCountBeforeDelete () {
        this.totalDeletedPosts[0].waitForExist({timeout: 10000});
        this.postCountBeforeDelete = this.totalDeletedPosts.length;
    }

    totalPostCountAfterDelete () {
        this.totalDeletedPosts[0].waitForExist({timeout: 10000});
        this.postCountAfterDelete = this.totalDeletedPosts.length;
    }

    assertPostCountAfterDelete () {
        this.totalDeletedPosts[0].waitForExist({timeout: 10000});
        expect(this.postCountBeforeDelete).to.equal(this.postCountAfterDelete - 1);
    }

    clickOnRestorePostLinkBtn () {
        this.restorePostLinkBtn[0].waitForExist({timeout: 10000});
        this.restorePostLinkBtn[0].click();
    }

    assertPostCountAfterRepost() {
        this.totalDeletedPosts[0].waitForExist({timeout: 10000});
        expect(this.postCountBeforeDelete).to.equal(this.postCountAfterDelete);
    }

    deletePost(){
        //following method calls will check total deleted post before delete
        this.clickOnDeletedPostBtn();
        this.totalPostCountBeforeDelete();
        browser.back();

        //following method call will select "Deleted" for the first post
        this.selectDeleteFromStautsDrd();

        //following method call will enter Deleted reason
        this.enterReasonText();

        //following method call will click on "Save changes" button
        this.clickOnSaveChangesBtn();
        browser.pause(3000);

        //following method calls will check total deleted post after delete
        this.clickOnDeletedPostBtn();
        browser.pause(3000);
        this.totalPostCountAfterDelete();
    }

    restorePost() {
        //following method call will click on "Restore post" link button of first post
        this.clickOnRestorePostLinkBtn();

        //following method call will click on "Save" button
        this.clickOnSaveChangesBtn();
        browser.pause(7000);

        //following will count the posts after repost
        this.totalPostCountAfterDelete();
    }
}

module.exports = new forumModerationPage();