const { When } = require("@cucumber/cucumber");
const homePageElements = require("../../businessLogic/homePage/homePageElements");
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const articleListViewPageElements = require("../../businessLogic/articleListViewPage/articleListViewPageElements")
const allUsersPermissionsPageElements = require("../../businessLogic/permissionsPage/allUsersPermissionsPageElements");
const dashboardPageElements = require('../../businessLogic/dashboardPage/dashboardPageElements');
const webdriverIOReferences = require("@puzzel/wdio-references-async");
const commonMethods = require("../../utilities/commonMethods");
const agentPageElements = require("../../businessLogic/agentPage/agentPageElements");
const { expect } = import("chai");
import("chai").then((chai) => {
  const assert = chai.assert;
  const expect = chai.expect;


When(/^I Select the category "([^"]*)" fron the sections and categories dropdown$/,async(givenCategoryfromDashboard) => {
    await dashboardPageElements.searchComponentbutton.clickOnElement()
    await dashboardPageElements.selectCategoryFromDropDownInDashboard.clickOnElement(givenCategoryfromDashboard)
    await dashboardPageElements.searchComponentbutton.clickOnElement()

});


When(/^I capture the articles published total count$/, async() => {
	let initialPublishedCount = 0;
    let updatedPublishedCount = 0;

    await webdriverIOReferences.elementIsDisplayed(await dashboardPageElements.articlePublishedTotalCount.get())
    const countElement = await webdriverIOReferences.elementGetText(await dashboardPageElements.articlePublishedTotalCount.get())
    initialPublishedCount = parseInt(await countElement, 10);
});

    
});