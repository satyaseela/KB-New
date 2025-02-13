const { When } = require("@cucumber/cucumber");
const loginPageElements = require("./../../businessLogic/loginPage/loginPageElements");
//const { expect, assert } = require("chai");
const homePageElements = require("../../businessLogic/homePage/homePageElements");
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const articleListViewPageElements = require("../../businessLogic/articleListViewPage/articleListViewPageElements")
const allUsersPermissionsPageElements = require("../../businessLogic/permissionsPage/allUsersPermissionsPageElements");
const webdriverIOReferences = require("@puzzel/wdio-references-async");
const commonMethods = require("../../utilities/commonMethods");
const agentPageElements = require("../../businessLogic/agentPage/agentPageElements");
const { expect } = import("chai");
import("chai").then((chai) => {
  const assert = chai.assert;
  const expect = chai.expect;


  async function createCategory(categoryName) {
    const addCategoryButton = $("button[title='Add Category'] span");
    await webdriverIOReferences.clickOnTheElement(addCategoryButton);

    const categoryNameField = $(".form-control.add-category-name");
    await webdriverIOReferences.setValueInTextField(categoryNameField, categoryName);

    const categoryTypeDropdown = $("//div[@id='addCategoryModal']//select[@class='browser-default custom-select au-target']//option[@value='DEFAULT']");
    await webdriverIOReferences.clickOnTheElement(categoryTypeDropdown);

    const createButton = $("//button[normalize-space()='Create']");
    await webdriverIOReferences.clickOnTheElement(createButton);
}
 
When(/^I check if the category "([^"]*)" exists$/, async(givenCategoryName) => {
    const categoryExists = await webdriverIOReferences.elementIsExisting($(`//span[text()='${givenCategoryName}']`));
    browser.sharedData = { categoryExists };
});
	

When(/^I click on Announcement Cancel Button$/, async() => {
    await browser.pause(5000)
	await agentPageElements.announcementRemovebutton.clickOnElement()


});
});