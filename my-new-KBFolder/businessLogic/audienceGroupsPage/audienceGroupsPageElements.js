const webdriverIOReferences = require('@puzzel/wdio-references-async');
const commonMethods = require('../../utilities/commonMethods');

const audienceGroupsPageElements = {
    addAlternativeViewModelBoxElement: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("(//h5[normalize-space()='Add alternative view'])")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
        getTheText:async function () {
            await webdriverIOReferences.elementGetText(await this.get())
        }
        },
    addOrRemoveAlternativeViewButton:  {
        get: async function(addOrRemoveViewButton) {  
            return await webdriverIOReferences.findElement ("//div[@alt='Add or remove alternative view']")
        },
        clickOnElement: async function (addOrRemoveViewButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    alternativeViewsCheckBoxes:{
        get: async function(givenAudienceView) {  
            return await webdriverIOReferences.findElement ("//tbody/tr[td[text()='"+ givenAudienceView+"']]/td/input[@type='checkbox']")
        },
        clickOnElement: async function (givenAudienceView) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenAudienceView));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenAudienceView));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenAudienceView));
        },
        isItSelected: async function (givenAudienceView) {
            await webdriverIOReferences.elementIsSelected(await this.get(givenAudienceView));
        }
    },
    addAlternativeViewSaveButton: {
        get: async function(givenButton) {  
            return await webdriverIOReferences.findElement (".btn.btn-primary.add-alt-view.au-target")
        },
        clickOnElement: async function (givenButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    addedAlternativeViews:{
        get: async function(givenAddedView) {  
            return await webdriverIOReferences.findElement ("//button[normalize-space()='" + givenAddedView +"']")
        },
        isVisible: async function (givenAddedView) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenAddedView));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenAddedView));
           return await webdriverIOReferences.elementIsDisplayed(await this.get(givenAddedView))
        },
        clickOnElement:async function (givenAddedView) {
            await webdriverIOReferences.clickOnTheElement(await this.get(givenAddedView));
        },
        getTheText:async function (givenAddedView) {
            await webdriverIOReferences.elementGetText(await this.get(givenAddedView))
        }
    },
    settingsPageTabs:{
        get: async function(givenTabs) {  
            return await webdriverIOReferences.findElement ("//button[normalize-space()='" + givenTabs +"']")
            },
            isVisible: async function (givenTabs) {
                await webdriverIOReferences.elementWaitForExist(await this.get(givenTabs));
                await webdriverIOReferences.elementWaitForVisible(await this.get(givenTabs));
               return await webdriverIOReferences.elementIsDisplayed(await this.get(givenTabs))
            },
            clickOnElement:async function (givenTabs) {
                await webdriverIOReferences.clickOnTheElement(await this.get(givenTabs));
            },
            getTheText:async function (givenTabs) {
                await webdriverIOReferences.elementGetText(await this.get(givenTabs))
            }
        },
    createAudienceButton:    {
        get: async function(givenButton) {  
            return await webdriverIOReferences.findElement ("button[class='create-btn'] span")
        },
        clickOnElement: async function (givenButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    createAudienceNameField: {
        get: async function(givenElementName) {  
            return await webdriverIOReferences.findElement ("//input[@value.bind='newAudienceGroup.name']")
        },
        isVisible: async function (givenElementName) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    includeInlineStylingCheckBox:{
        get: async function() {  
            return await webdriverIOReferences.findElement ("//input[@checked.bind='newAudienceGroup.useInlineStyling']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    createAudienceSaveButton:{
        get: async function() {  
            return await webdriverIOReferences.findElement ("//button[@class='btn add au-target'][normalize-space()='Add']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    audienceTableInSettingsTab:{
        get: async function(givenAudienceView) {  
            return await webdriverIOReferences.findElement ("//td[text()='"+ givenAudienceView +"']")
        },
        isVisible: async function (givenAudienceView) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenAudienceView));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenAudienceView));
           return await webdriverIOReferences.elementIsDisplayed(await this.get(givenAudienceView))
        },
    },
    inlineStylingStatusButtonON:{
        get: async function() {  
            return await webdriverIOReferences.findElement ("//tr[td[text()='Customer1']]//span[text()='On']")
        },
        isItDisplayed: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    inlineStylingStatusButtonOFF:{
        get: async function() {  
            return await webdriverIOReferences.findElement ("//tr[td[text()='Customer2']]//span[text()='Off']")
        },
        isItDisplayed: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    audienceDeleteButton:{
        get: async function(givenAudienceViewAction) {  
            return await webdriverIOReferences.findElement ("//tr[td[text()='"+ givenAudienceViewAction +"']]//i[@class='fal fa-trash-alt']")
        },
        clickOnElement: async function (givenAudienceViewAction) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenAudienceViewAction));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenAudienceViewAction));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenAudienceViewAction));
        },
    }, 
    deleteAudienceModalBoxDeleteButton :{
        get: async function() {  
            return await webdriverIOReferences.findElement ("//div[@class='modal-content']//button[@class='btn add au-target' and text()='Delete']")
        },
        clickOnElement: async function (givenAudienceViewAction) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenAudienceViewAction));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenAudienceViewAction));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenAudienceViewAction));
        },
    }, 
    audienceEditButton:{
    get: async function(givenAudienceViewAction) {  
        return await webdriverIOReferences.findElement ("//tr[td[text()='"+ givenAudienceViewAction +"']]//i[@class='fa fa-pencil-alt']")
    },
    clickOnElement: async function (givenAudienceViewAction) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenAudienceViewAction));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenAudienceViewAction));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenAudienceViewAction));
    },
}, 
    editAudienceNameFieldInModalBox:{
        get: async function() {  
            return await webdriverIOReferences.findElement ("//input[@value.bind='markedItemForAction.name']")
        },
    typeInTheValueInTheTextField:async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clearValueInTextField(await this.get())
        await webdriverIOReferences.setValueInTextField(await this.get(), commonMethods.Changed_Audience_Name)
      }
    },
    editAudienceModalBoxDoneButton: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("//button[normalize-space()='Done']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    audienceViews: {
        get: async function(givenView) {  
            return await webdriverIOReferences.findElement ("//button[normalize-space()='"+ givenView +"']")
        },
        clickOnElement: async function (givenView) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenView));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenView));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenView));
        },
    },
    audienceRemoveButton: {
        get: async function() {  
            return await webdriverIOReferences.findElement ("//button[@class='btn btn-primary add-alt-view au-target']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
};
module.exports = audienceGroupsPageElements;