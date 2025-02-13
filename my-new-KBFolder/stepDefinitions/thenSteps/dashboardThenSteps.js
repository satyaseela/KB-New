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
const dashboardPageElements = require('../../businessLogic/dashboardPage/dashboardPageElements');
import('chai').then(chai => {
    const assert = chai.assert;
    const expect = chai.expect;


    Then(/^Key metrics in a dashbord are displayed$/,async () => {
        await webdriverIOReferences.elementIsDisplayed(await dashboardPageElements.metricTilesNames.get())
    });
    
    
    Then(/^I verify the articles published total count must increase by 1$/, async() => {
        let initialPublishedCount = 0;
        let updatedPublishedCount = 0;
        await webdriverIOReferences.elementIsDisplayed(await dashboardPageElements.articlePublishedTotalCount.get())
        updatedPublishedCount = await webdriverIOReferences.elementGetText(await dashboardPageElements.articlePublishedTotalCount.get())
        assert.strictEqual(updatedPublishedCount, initialPublishedCount + 1, 'Published count did not increase by 1');
});
    
    


});