const webdriverIOReferences = require('@puzzel/wdio-references-async');
const { knowledgeBaseBanner } = require('../homePage/homePageElements');

const agentPageElements = {

selectApplicationsbutton: {
    get: async function () {
        return (
         await webdriverIOReferences.findElement("identity-topbar-component")
       ).shadow$(".application-selector.secondary");
     },
     clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },

 
   },

switchingUserApplications: {
    get: async function () {
        return (
         await webdriverIOReferences.findElement("identity-topbar-component")
       ).shadow$("section.dropdown-content a#agentlink");
     },
     clickOnElement: async function () {
        const element = await this.get();
        await webdriverIOReferences.elementWaitForExist(element);
        await webdriverIOReferences.elementWaitForVisible(element);
        await webdriverIOReferences.clickOnTheElement(element)
        // await webdriverIOReferences.rightClickOnTheElement(await this.get())
        // await webdriverIOReferences.clickOnTheElement(await this.get());
    },
    rightClickOnTheElement: async function(element) { await element.click({ button: 'right' }); }
 
   },

   iconTab:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//i[@class='icon-tab']")
    },  
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.elementIsClickable(await this.get(),{ timeout: 5000 })
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
    knowledgeBaseWidget: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("//div[contains(text(),'Knowledgebase')]")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsClickable(await this.get(),{ timeout: 5000 })
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    iframeLocator: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("//iframe[@class='xs-maximize-height widget__external-widget__external-widget au-target']")
        },  
        switchingToIframe: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.switchToIfreameElements(await this.get());
        }
    },
    catgoryNameInWidget: {
        get: async function(givenCategoryNameInWidget) {  
            return await webdriverIOReferences.findElement ("//li[contains(@class, 'category') and .//span[text()='"+ givenCategoryNameInWidget +"']]")
        },  
        clickOnElement: async function (givenCategoryNameInWidget) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryNameInWidget));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryNameInWidget));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryNameInWidget));
        },
    }, 

    articleInTheWidget: {
        get: async function(givenArticleTitleInWidget) {  
            return await webdriverIOReferences.findElement ("//article-preview[.//h3[text()='"+ givenArticleTitleInWidget +"']]")
        },  
        clickOnElement: async function (givenArticleTitleInWidget) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenArticleTitleInWidget));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenArticleTitleInWidget));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenArticleTitleInWidget));
        },
    }, 
    articleTitleToValidate: {
        get: async function(givenArticleTitle) {  
            return await webdriverIOReferences.findElement ("//h3[normalize-space()='"+ givenArticleTitle +"']")
        },  
        clickOnElement: async function (givenArticleTitle) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenArticleTitle));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenArticleTitle));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenArticleTitle));
        },
    },
    articleContentInWidget: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("section[role='contentinfo'] p")
        },  
    },
    bannerTitle: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".notification-title")
        },  
        
    },
    bannerSnippet:{
        get: async function() {  
            return await webdriverIOReferences.findElement (".notification-body.au-target")
        },  
    },
    bannerReadMoreButton: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".read-more.au-target")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    articleOpenedFromBannerOrNotificationsList: {
        get: async function(givenArticleFromBannerOrNotifications) {  
            return await webdriverIOReferences.findElement ("//h2[normalize-space()='"+ givenArticleFromBannerOrNotifications +"']")
        },  
        
    },
    notificationsBell: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".fas.fa-bell")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    announcementHornSymbol:{
        get: async function() {  
        return await webdriverIOReferences.findElement("//div[contains(@class, 'dropdown-menu')]//span[text()='Announcement for Test Automation']/preceding-sibling::i[@class='fas fa-bullhorn']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        },
    },
    newsIconSymbol:{
        get: async function() {  
        return await webdriverIOReferences.findElement("//span[text()='News Article for Test Automation']/preceding-sibling::i[@class='news-icon']/img")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        },
    },
    newsOrAnnouncementInNotificationsList:{
        get: async function(givenTypeOfArticle) {  
        return await webdriverIOReferences.findElement("//div[contains(@class, 'dropdown-menu')]//span[text()='"+ givenTypeOfArticle +"']")
        },
        clickOnElement: async function (givenTypeOfArticle) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenTypeOfArticle));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenTypeOfArticle));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenTypeOfArticle));
        },
    }, 
    articleTitleInWidget:{
        get: async function() {  
        return await webdriverIOReferences.findElement(".article-title")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        },
    },
    articleContentInfoInWidget:{
        get: async function() {  
        return await webdriverIOReferences.findElement("section[role='contentinfo'] p")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        },
    },
    categoryNameToVerifyMappingContent: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("//li[contains(@class, 'au-target category') and @role='none'][.//ul[@id='homeSubmenu3']]")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    announcementRemovebutton: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".fal.fa-times-circle.au-target")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    sectionNameInWidget:{
        get: async function(givenSectionNameInWidget) {  
            return await webdriverIOReferences.findElement ("//span[normalize-space()='"+ givenSectionNameInWidget +"']")
        },  
        clickOnElement: async function (givenSectionNameInWidget) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionNameInWidget));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionNameInWidget));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionNameInWidget));
        },
    }, 
    relatedArticle: {
        get: async function(relatedArticleInWidget) {  
            return await webdriverIOReferences.findElement ("//section[contains(@class, 'related-articles')]//ul/li/a[contains(text(), '"+ relatedArticleInWidget +"')]")
        },  
        clickOnElement: async function (relatedArticleInWidget) {
            await webdriverIOReferences.elementWaitForExist(await this.get(relatedArticleInWidget));
            await webdriverIOReferences.elementWaitForVisible(await this.get(relatedArticleInWidget));
            await webdriverIOReferences.clickOnTheElement(await this.get(relatedArticleInWidget));
        },
    }, 
    openedRealtedArticle: {
        get: async function(givenArticleTitle) {  
            return await webdriverIOReferences.findElement ("//h2[normalize-space()='"+ givenArticleTitle +"']")
        },  
    },
    listOfSectionsDisplayed:{
        get: async function() {  
        return await webdriverIOReferences.findElements("//ul[@id='homeSubmenu14']//li//span[@class='au-target section-title-1']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        },
    },
    sendFeedbackButton: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".fas.fa-comment-alt-edit")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    feedbackTextArea: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("#feedback-text")
        }, 
    },
     feedbackSendButton: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".feedback-send.au-target")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    feedbackInfo:{
        get: async function() {  
        return await webdriverIOReferences.findElement("div[class='au-target row feedback-row'] div[class='feedback-text']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        },
    },
    feedbackDeleteButtonInAgentView: {
        get: async function() {  
            return await webdriverIOReferences.findElement (".btn.btn-link.au-target")
        },  
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
   
};
module.exports = agentPageElements;
