const { When } = require("@cucumber/cucumber");
const loginPageElements = require("./../../businessLogic/loginPage/loginPageElements");
//const { expect, assert } = require("chai");
const homePageElements = require("../../businessLogic/homePage/homePageElements");
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const audienceGroupsPageElements = require("../../businessLogic/audienceGroupsPage/audienceGroupsPageElements");
const permissionsPageElements = require("../../businessLogic/permissionsPage/permissionsPageElements");
const articleListViewPageElements = require("../../businessLogic/articleListViewPage/articleListViewPageElements")
const allUsersPermissionsPageElements = require("../../businessLogic/permissionsPage/allUsersPermissionsPageElements");
const webdriverIOReferences = require("@puzzel/wdio-references-async");
const commonMethods = require("../../utilities/commonMethods");
const agentPageElements = require("../../businessLogic/agentPage/agentPageElements");
const { expect } = import("chai");
import("chai").then((chai) => {
  const assert = chai.assert;
  const expect = chai.expect;


  
When(/^I switch to "([^"]*)" view in "([^"]*)"$/, async(givenView,givenApplication) => {
 await audienceGroupsPageElements.audienceViews.clickOnElement(givenView)
});




When(/^open the Article "([^"]*)" in the widget$/, async(givenArticleTitle) => {
    await agentPageElements.articleTitleToValidate.clickOnElement(givenArticleTitle)
});



When(/^I uncheck the "([^"]*)" view checkbox$/, async(givenAudienceView) => {
	switch (givenAudienceView) {
        case "Agent":
          await audienceGroupsPageElements.alternativeViewsCheckBoxes.clickOnElement(
            givenAudienceView
          );
          break;
        case "Mobile":
          await audienceGroupsPageElements.alternativeViewsCheckBoxes.clickOnElement(
            givenAudienceView
          );
          break;
        default:
          throw new Error(`Invalid checkbox option: ${givenAudienceView}`);
      }
});


When(/^I click on "([^"]*)" button to remove the added view$/, async(givenButton) => {
    await audienceGroupsPageElements.addAlternativeViewSaveButton.clickOnElement();
    await audienceGroupsPageElements.audienceRemoveButton.clickOnElement()
});


});
