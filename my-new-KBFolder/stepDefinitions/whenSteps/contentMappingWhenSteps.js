const { When } = require("@cucumber/cucumber");
const loginPageElements = require("./../../businessLogic/loginPage/loginPageElements");
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


  When(/^I map Article by clicking "([^"]*)" button and Mapping the article to "([^"]*)" category$/,async (givenMappingButton,givenCategoryToMap) => {
    await webdriverIOReferences.maximizeBrowserWindow()
    const elementToView = await $("//span[@class='tag badge custom au-target' and @aria-label='Category: Category for author to Test']");
    await webdriverIOReferences.scrollElementIntoView(elementToView);
  await createArticlePageElements.catgoryNameToHoverOver.hoverOverOnElement(10,10);
   const element = await createArticlePageElements.mappCategoryRemoveButton.get() 
  await element.waitForDisplayed({ timeout: 5000 });
  await element.waitForClickable({ timeout: 10000 });
   await element.click()
   await createArticlePageElements.mappingButton.clickOnElement(
    givenMappingButton
  );
  await createArticlePageElements.mapCategoriesDropDownButton.clickOnElement();
  await createArticlePageElements.selectCategoryFromDropDown.clickOnElement(givenCategoryToMap);
  await createArticlePageElements.mapArticleToTheCategorySubmitButton.clickOnElement();

});

When(/^to map an Article to section click on  "([^"]*)" button and Map the article to "([^"]*)" section$/, async(givenMappingButton,givenSectionName) => {
await webdriverIOReferences.moveToElement(
   
    await createArticlePageElements.sectionNameToHoverOver.get());
    const element = await createArticlePageElements.mappSectionRemoveButton.get() 
  await element.waitForDisplayed({ timeout: 5000 });
  await element.waitForClickable({ timeout: 10000 });
   await element.click()
    // await createArticlePageElements.mappSectionRemoveButton.clickOnElement();
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.sectionToAddDropDownButton.clickOnElement();
    await createArticlePageElements.sectionToAddfromDropDown.clickOnElement(givenSectionName);
    await createArticlePageElements.mapArticleToSectionSubmitButton.clickOnElement();
  
});



When(/^I click on "([^"]*)" button and Map Artice to another article$/, async(givenMappingButton) => {

    await createArticlePageElements.mappedArticleListItem.hoverOverOnElement();
      await createArticlePageElements.mappArticleRemoveButton.clickOnElement();
      await createArticlePageElements.mappingButton.clickOnElement(
        givenMappingButton
      );
      await createArticlePageElements.relatedArticleSearcheField.typeInTheValueInTheTextField();
      await createArticlePageElements.relatedArticleSearchButton.clickOnElement();
      await createArticlePageElements.mapArticleCheckBox.clickOnElement()
      await createArticlePageElements.relatedArticleSubmitButton.clickOnElement();
    
});

When(/^open the selected category: Category for Author to Test in widget$/, async() => {
    await agentPageElements.categoryNameToVerifyMappingContent.clickOnElement()
});

When(/^Click on related article "([^"]*)" that is mapped to the article:Article that is for mapping$/, async(relatedArticleInWidget) => {
	await agentPageElements.relatedArticle.clickOnElement(relatedArticleInWidget)
});

});