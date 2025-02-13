const {Then} = require('@cucumber/cucumber');
const homePageElements = require('./../../businessLogic/homePage/homePageElements')
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const commonMethods = require("../../utilities/commonMethods");
const webdriverIOReferences = require('@puzzel/wdio-references-async');
const audienceGroupsPageElements = require('../../businessLogic/audienceGroupsPage/audienceGroupsPageElements');
const allUsersPermissionsPageElements = require("../../businessLogic/permissionsPage/allUsersPermissionsPageElements");
const articleListViewPageElements = require('../../businessLogic/articleListViewPage/articleListViewPageElements');
const permissionsPageElements = require("../../businessLogic/permissionsPage/permissionsPageElements");
const folderPageElements = require('../../businessLogic/foldersPage/foldersPageElements');
const inboxPageElements = require('../../businessLogic/inboxPage/inboxPageElements');
const agentPageElements = require('../../businessLogic/agentPage/agentPageElements');
import('chai').then(chai => {
    const assert = chai.assert;
    const expect = chai.expect;

    

Then(/^the Article is mapped to the "([^"]*)" category$/,async (givenCategoryName) => {
    await browser.waitUntil(
        async () => await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedCategorylistItem.get(givenCategoryName)),
        { timeout: 20000, timeoutMsg: `The article was not displayed within the timeout!` }
     );
    
	const isMappedCategoryDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedCategorylistItem.get(givenCategoryName))
    expect(isMappedCategoryDisplayed).to.equal(true);
    await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedCategorylistItem.get(givenCategoryName))
});

Then(/^the article is mapped to the "([^"]*)" section$/, async(givenSectionName) => {
    await browser.waitUntil(
        async () => await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedSectionListItem.get(givenSectionName)),
        { timeout: 20000, timeoutMsg: `The article was not displayed within the timeout!` }
    );
	const isMappedSectionDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedSectionListItem.get(givenSectionName))
    expect(isMappedSectionDisplayed).to.equal(true);
    await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedSectionListItem.get(givenSectionName))
});

Then(/^the article is mapped another article$/, async() => {
    await browser.waitUntil(
        async () => await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedArticleListItem.get() ),
        { timeout: 20000, timeoutMsg: `The related article was not displayed within the timeout!` }
    );
    const isMappedArticleDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedArticleListItem.get())
    expect(isMappedArticleDisplayed).to.equal(true);
    await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedArticleListItem.get())
});



Then(/^the article "([^"]*)" is mapped to Category: Category for Author to Test in Widget$/, async(givenArticleTitle) => {
    await browser.waitUntil(async function () {
	const isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
    return isItVisible;
}, {timeout: 30000, timeoutMsg: 'mapped category name is not displayed!!!'}) 
const isItVisible = await webdriverIOReferences.elementIsDisplayed(
    await agentPageElements.articleTitleToValidate.get(givenArticleTitle));
    expect(isItVisible).to.equal(true);	

});

Then(/^the article "([^"]*)" is mapped to Section: new bee 1 in Widget$/, async(givenArticleTitle) => {
    await browser.waitUntil(async function () {
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
        return isItVisible;
    }, {timeout: 30000, timeoutMsg: 'mapped category name is not displayed!!!'}) 
    const isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
    expect(isItVisible).to.equal(true);	
 
	
});
Then(/^The related Article is displayed with its title "([^"]*)" and content$/, async (givenArticleTitle) => {
    await browser.waitUntil(
        async () => await webdriverIOReferences.elementIsDisplayed(await agentPageElements.openedRealtedArticle.get(givenArticleTitle)),
        { timeout: 20000, timeoutMsg: `The related article with title "${givenArticleTitle}" was not displayed within the timeout!` }
    );
    const isItVisible = await webdriverIOReferences.elementIsDisplayed(
        await agentPageElements.openedRealtedArticle.get(givenArticleTitle)
    );
    expect(isItVisible).to.equal(true);
    const articleTitle = await webdriverIOReferences.elementGetText(
        await agentPageElements.openedRealtedArticle.get(givenArticleTitle)
    );
    console.log(`Article Title: ${articleTitle}`);

    const articleContent = await webdriverIOReferences.elementGetText(await agentPageElements.articleContentInWidget.get());
    console.log(`Article Content: ${articleContent}`);
});

Then(/^the article "([^"]*)" is mapped to article:Latest Article To Test$/, async (relatedArticleInWidget) => {
    await browser.waitUntil(
        async () => await webdriverIOReferences.elementIsDisplayed(await agentPageElements.relatedArticle.get(relatedArticleInWidget)),
        { timeout: 20000, timeoutMsg: `The related article "${relatedArticleInWidget}" was not displayed within the timeout!` }
    );
    const isItVisible = await webdriverIOReferences.elementIsDisplayed(
        await agentPageElements.relatedArticle.get(relatedArticleInWidget)
    );
    expect(isItVisible).to.equal(true);

    });



});