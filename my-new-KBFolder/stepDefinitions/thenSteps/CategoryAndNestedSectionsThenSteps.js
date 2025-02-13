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
    
 Then(/^I create the category "([^"]*)" if it does not exist$/, async(givenCategoryName) => {
    const { categoryExists } = browser.sharedData;
    if (!categoryExists) {
        await createCategory(givenCategoryName);
        browser.sharedData.categoryExists = true;
    }
});
    

Then(/^the category "([^"]*)" is displayed in the list view of categories$/, async(givenCategoryName) => {
    const categoryExists = await webdriverIOReferences.elementIsExisting($(`//span[text()='${givenCategoryName}']`));
    expect(categoryExists).to.be.true;
	
});

Then(/^the category "([^"]*)" is displayed in the widget$/, async(givenCategoryNameInWidget) => {
    await webdriverIOReferences.scrollElementIntoView(agentPageElements.catgoryNameInWidget.get(givenCategoryNameInWidget));
    const isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.catgoryNameInWidget.get(givenCategoryNameInWidget))
    expect(isItVisible).to.be.true;
	
});


Then(/^I check if the 10 sections already exist within the category$/, async() => {
    const sectionsExist = await webdriverIOReferences.elementIsExisting($("//span[contains(text(),'Test Section 1')]"));
    browser.sharedData = { sectionsExist };
});
Then(/^I create 10 sections within the category if they do not exist$/, async() => {
    const { sectionsExist } = browser.sharedData;
    if (!sectionsExist) {
    for (let i = 1; i <= 10; i++) {
        const sectionName = `Test Section ${i}`;
     await homePageElements.pluseButton.clickOnElement();
    expect(await homePageElements.sectionModalBoxTitle.isVisible()).to.be.true;
    await homePageElements.sectionNamePlaceHolder.typeInTheValueInTheTextField(sectionName);
    await homePageElements.addSectionNameButton.clickOnElement()
}
    }
      
});

Then(/^the 10 sections are displayed in the widget$/,async () => {
	const sectionTitles = await agentPageElements.listOfSectionsDisplayed.get()
    for (const title of sectionTitles) {
        const text = await webdriverIOReferences.elementGetText(await agentPageElements.listOfSectionsDisplayed.get(title))
        console.log(`Section title found: ${text}`);
    }
});


});