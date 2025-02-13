const webdriverIOReferences = require('@puzzel/wdio-references-async');

const articleListViewPageElements = {

articleInDraftState:{
    get: async function() {  
    return await webdriverIOReferences.findElement("//p[@class='article-title' and contains(text(), 'Sample article in Draft state')]/ancestor::li//div[contains(@class, 'article-status draft')]")
    },
    isVisible: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
       return await webdriverIOReferences.elementIsDisplayed(await this.get());
    },
    getTheText:async function () {
        await webdriverIOReferences.elementGetText(await this.get())
}
},

articleInReviewState:{
    get: async function() {  
    return await webdriverIOReferences.findElement("//p[@class='article-title' and contains(text(), 'Sample article in Review state')]/ancestor::li//div[contains(@class, 'article-status review')]")
    },
    isVisible: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
       return await webdriverIOReferences.elementIsDisplayed(await this.get());
    },
    getTheText:async function () {
        await webdriverIOReferences.elementGetText(await this.get())
}
},

articleInPublishedState:{
    get: async function() {  
    return await webdriverIOReferences.findElement("//p[@class='article-title' and contains(text(), 'Published article')]/ancestor::li//div[contains(@class, 'article-status published')]")
    },
    isVisible: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
       return await webdriverIOReferences.elementIsDisplayed(await this.get());
    },
    getTheText:async function () {
        await webdriverIOReferences.elementGetText(await this.get())
}
},
listViewOfArticles:{
    get: async function() {  
    return await webdriverIOReferences.findElements("//section[@class='category articles-list']/ul[@id='category-list']/li/article-preview/article")
    },
    isVisible: async function () {
            const articles = await this.get();
            if (articles.length === 0) {
                return false;
            }
            return articles[0].isDisplayed(); 
    },
},
articleIsInPublishedState:{
    get: async function(givenArticleState) {  
    return await webdriverIOReferences.findElement("//li[.//p[@class='article-title' and text()='Test Article']]//div[contains(@class, 'article-status') and contains(text(), '"+ givenArticleState +"')]")

    },
    isVisible: async function (givenArticleState) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenArticleState));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenArticleState));
       return await webdriverIOReferences.elementIsDisplayed(await this.get(givenArticleState));
    },
},
};
module.exports = articleListViewPageElements;