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




    Then(/^"([^"]*)" view title and content should be inherited from Default view$/, async(givenView) => {
        const defaultViewTitle = commonMethods.Audience_Groups_Title;
        const defaultViewContent = commonMethods.Audience_Groups_Content;
        await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.articleTitleField.get())
        const alternativeViewsTitle = await webdriverIOReferences.elementGetValue(await createArticlePageElements.articleTitleField.get())
        const alternativeViewsContent = await webdriverIOReferences.elementGetText(await createArticlePageElements.ckEditorTextArea.get())
        assert.strictEqual(alternativeViewsTitle, defaultViewTitle, 'Title does not match Default View')
        assert.strictEqual(alternativeViewsContent, defaultViewContent, 'Content does not match Default View')
});


Then(/^the "([^"]*)" View title and content in Widget should match those inherited from the Default View in Admin$/, async(givenView) => {
	const defaultViewTitle = commonMethods.Audience_Groups_Title;
    const defaultViewContent = commonMethods.Audience_Groups_Content;
    await agentPageElements.articleTitleInWidget.isVisible();
    const alternativeViewsTitleInWidget = await webdriverIOReferences.elementGetText(await agentPageElements.articleTitleInWidget.get())
    const alternativeViewsContentInWidget= await webdriverIOReferences.elementGetText(await agentPageElements.articleContentInfoInWidget.get())
    assert.strictEqual(alternativeViewsTitleInWidget, defaultViewTitle, 'Title does not match Default View')
    assert.strictEqual(alternativeViewsContentInWidget, defaultViewContent, 'Content does not match Default View')
});

Then(/^The "([^"]*)" view is removed next to the Default view$/, async(givenView) => {
	const isAlternativeViewsDisplayed = await webdriverIOReferences.elementIsExisting(await audienceGroupsPageElements.audienceViews.get(givenView))
    expect(isAlternativeViewsDisplayed).to.equal(false)
});

Then(/^"([^"]*)" View and Mobile views are not displayed$/, async(givenView) => {
    const isItVisible = await webdriverIOReferences.elementIsExisting(await audienceGroupsPageElements.audienceViews.get(givenView))
        expect(isItVisible).to.equal(false)

});

});