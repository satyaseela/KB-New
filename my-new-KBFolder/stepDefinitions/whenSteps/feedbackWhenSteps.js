const { When } = require("@cucumber/cucumber");
const loginPageElements = require("./../../businessLogic/loginPage/loginPageElements");
const homePageElements = require("../../businessLogic/homePage/homePageElements");
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const articleListViewPageElements = require("../../businessLogic/articleListViewPage/articleListViewPageElements")
const webdriverIOReferences = require("@puzzel/wdio-references-async");
const commonMethods = require("../../utilities/commonMethods");
const agentPageElements = require("../../businessLogic/agentPage/agentPageElements");
const { expect } = import("chai");
import("chai").then((chai) => {
  const assert = chai.assert;
  const expect = chai.expect;


 
When(/^I navigate back to the KB Admin$/, async() => {
 await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/admin/knowledgeadmin/")
   await browser.pause(5000)



})
});