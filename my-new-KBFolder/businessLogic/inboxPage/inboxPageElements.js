const webdriverIOReferences = require('@puzzel/wdio-references-async');

const inboxPageElements = {

    inboxPageMenuItems:{
        get: async function(givenMenuFolder) {  
        return await webdriverIOReferences.findElement("//li[@class='category']/a[@title='"+ givenMenuFolder +"']")
        },
        clickOnElement: async function (givenMenuFolder) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMenuFolder));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMenuFolder));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMenuFolder));
        }
    },
    expiryDateAndTimeOfTheArticle:  {
        get: async function(articleStatus,expiryDateTime) {  
            return await webdriverIOReferences.findElement (`//p[contains(text(),'${articleStatus}: ${expiryDateTime}')]`)
        }, 
            isVisible:async function (articleStatus,expiryDateTime) {
                await webdriverIOReferences.elementWaitForExist(await this.get(articleStatus,expiryDateTime));
                await webdriverIOReferences.elementWaitForVisible(await this.get(articleStatus,expiryDateTime));
                await webdriverIOReferences.elementIsDisplayed(await this.get(articleStatus,expiryDateTime))

}
    },
    

};
module.exports = inboxPageElements;