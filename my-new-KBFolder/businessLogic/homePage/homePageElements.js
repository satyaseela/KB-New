const webdriverIOReferences = require('@puzzel/wdio-references-async');
const { articleInTheListView } = require('../createArticlePage/createArticlePageElements');

const homePageElements = {
    knowledgeBaseBanner: {
        get: async function() {
            return( await webdriverIOReferences.findElement("identity-topbar-component")).shadow$('.application-name')
        },
        isVisible: async function () {
            const element = await this.get(); // Get the element
            return await webdriverIOReferences.elementIsDisplayed(element);
        },
        getTheText:async function () {
                await webdriverIOReferences.elementGetText(await this.get())
        }
    },
    
    editMenu: {
        get: async function(givenMenuButton) {
            return webdriverIOReferences.findElement('//span[normalize-space()="' + givenMenuButton + '"]')
        },
        clickOnElement: async function (givenMenuButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMenuButton));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMenuButton));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMenuButton));
        },
    },
    addCategory: {
        get: async function(givenCategory) {
            return  webdriverIOReferences.findElement('//span[normalize-space()="' + givenCategory + '"]')
            // ('//li[@class="add-category category au-target"]//button[@title="'+ givenCategory + '"]')
        },
        isVisible: async function (givenCategory) {
            await webdriverIOReferences.elementIsDisplayed(await this.get(givenCategory))
        },
        clickOnElement: async function (givenCategory) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCategory));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategory));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenCategory));
        },
        getTheText:async function (givenCategory) {
            await webdriverIOReferences.elementGetText(await this.get(givenCategory))
    }

    },
    
    categoryModalBoxTitle:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@id='addCategoryModal']//h5[@id='exampleModalLabel']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
        getTheText:async function () {
                await webdriverIOReferences.elementGetText(await this.get())
        }
    },

    categoryModalBoxNamePlaceholder: {
        get: async function() {  
        return await webdriverIOReferences.findElement(".form-control.add-category-name")
        },
        typeInTheValueInTheTextField: async function () {
            await webdriverIOReferences.setValueInTextField(await this.get(), 'Testing Category')
        }
    },

    categoryModalBoxDropDrown: {
        get: async function() {  
        return await webdriverIOReferences.findElement("//div[@id='addCategoryModal']//select[@class='browser-default custom-select au-target']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    modalBoxDropDownOptions: {
        get: async function(givenType) {  
        return await webdriverIOReferences.findElement("//div[@id='addCategoryModal']//option[@value='DEFAULT'][normalize-space()='" + givenType + "']")
    },
    clickOnElement: async function (givenType) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenType));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenType));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenType));
    }
},
addCategoryTypeFromDropdown: {
    get: async function(givenCategoryType) {  
    return await webdriverIOReferences.findElement("//div[@id='addCategoryModal']//select[@class='browser-default custom-select au-target']//option[@value='"+ givenCategoryType +"']")
    },
    clickOnElement: async function (givenCategoryType) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryType));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryType));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryType));
    }
},

    modalBoxCreateButton: {
        get: async function(givenElement) {  
        return await webdriverIOReferences.findElement("//button[normalize-space()='"+givenElement+"']")
        },
        clickOnElement: async function (givenElement) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenElement));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenElement));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenElement));
        }
    },
    createdCategoryName: {
        get: async function() {  
        return await webdriverIOReferences.findElement("a[class='au-target collapsed cat-23'] span")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
        clickOnElement:async function () {
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    

    },
    pluseButton:{
        get: async function() {  
        return await webdriverIOReferences.findElement("//span[text()='Testing Category']/preceding-sibling::i[contains(@class, 'special-category-icon')]/following-sibling::div[contains(@class, 'actions')]/button[contains(@class, 'add-section')]/i[contains(@class, 'fa-plus-circle')]")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    sectionModalBoxTitle:{
        get: async function() {  
        return await webdriverIOReferences.findElement("//div[@id='addSectionModal']//h5[@id='exampleModalLabel']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        }
    },
    sectionNamePlaceHolder:{
        get: async function() {  
        return await webdriverIOReferences.findElement("//input[@placeholder='Section name']")
        },
        typeInTheValueInTheTextField: async function (sectionName) {
            await webdriverIOReferences.clickOnTheElement(await this.get());
            await webdriverIOReferences.setValueInTextField(await this.get(), sectionName) ;
        }
    },
    addSectionNameButton:{
        get: async function() {  
        return await webdriverIOReferences.findElement("//button[normalize-space()='Add']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    sectionName:{
        get: async function() {  
        return await webdriverIOReferences.findElement("a[class='au-target sec-29'] span[class='au-target section-title-1']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    sectionPluseButton:{
        get: async function() {  
        return await webdriverIOReferences.findElement("a[class='au-target sec-29'] i[class='fal fa-plus-circle add-section-icon']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    knowledgebaseMenuItems:{
        get: async function(givenMenuButton) {  
        return await webdriverIOReferences.findElement("//span[contains(text(),'"+ givenMenuButton +"')]")
        },
        clickOnElement: async function (givenMenuButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMenuButton));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMenuButton));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMenuButton));
        }
    },
    inboxFolderMenuItems:{
        get: async function(givenMenuFolder) {  
        return await webdriverIOReferences.findElement("//li[@class='category']/a[@title='"+ givenMenuFolder +"']")
        },
        clickOnElement: async function (givenMenuFolder) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMenuFolder));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMenuFolder));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMenuFolder));
        }
    },
    compareWithPreviousVersionButton:{
        get: async function(givenButton) {  
        return await webdriverIOReferences.findElement("button[class='btn btn-primary inline au-target'] span")
    },
    clickOnElement: async function (givenButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    }
},
    readOnlyModeVersion:{
        get: async function(givenVersion) {  
        return await webdriverIOReferences.findElement("div[class='text-left mt-2 mb-4'] h6[class='text-left mt-2']")
        },
        getTheText:async function (givenVersion) {
            await webdriverIOReferences.elementGetText(await this.get())
        },
        isVisible: async function (givenVersion) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        }
    },
    latestVersionElement:{
        get: async function() {  
        return await webdriverIOReferences.findElement("div[class='compare-previous-version mt-2 mb-4 text-right'] h6[class='text-left mt-2']")
        },
        getTheText:async function () {
            await webdriverIOReferences.elementGetText(await this.get())
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get());
        }
    },
    selectVersionDropDownButton:{
        get: async function() {  
        return await webdriverIOReferences.findElement(".browser-default.custom-select.w-auto.au-target")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    selectVersionFromDropDown:{
        get: async function() {  
            return await webdriverIOReferences.findElement('//select[@class="browser-default custom-select w-auto au-target"]/option[contains(text(), "Version 1")]')
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },


   readOnlyModeEditor: {
    get: async function(givenVersion) {  
        return await webdriverIOReferences.findElement('.ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-read-only.ck-column-resize_disabled')
    },
    clickOnElement: async function (givenVersion) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    }
},
categoryDeleteButton:{
    get: async function(givenCategoryName) {  
        return await webdriverIOReferences.findElement ("//a[span[text()='"+ givenCategoryName +"']]//button[@class='au-target delete-category']")
    }, 
    clickOnElement: async function (givenCategoryName) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryName));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryName));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryName));
    },
}, 
modalBoxDeleteButton:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//button[contains(text(),'Yes, Delete')]")
    },  
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
categoryEditButton:{
    get: async function(givenCategoryName) {  
        return await webdriverIOReferences.findElement ("//a[span[text()='"+ givenCategoryName +"']]//button[@class='edit-category au-target']")
    }, 
    clickOnElement: async function (givenCategoryName) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryName));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryName));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryName));
    },
}, 
editCategoryModelBoxNameInputField:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[@id='editCategoryModal']//input[@placeholder='New name here']")
    },  
    clearValueOfTextField:async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clearValueInTextField(await this.get())
       
      }
    },
editCategoryModalBoxSaveButton:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[@id='editCategoryModal']//button[@type='button'][normalize-space()='Save']")
    },  
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 


sectionName:{
    get: async function(givenSectionName) {  
        return await webdriverIOReferences.findElement ("//ul[@id='homeSubmenu0']//span[text()='"+ givenSectionName +"']/ancestor::a")
    },
    clickOnElement: async function (givenSectionName) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionName));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionName));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionName));
    },
},
sectionNameEditButton:{
    get: async function(givenSectionEditButton) {  
        return await webdriverIOReferences.findElement ("//ul[@id='homeSubmenu0']//a[span[text()='"+ givenSectionEditButton +"']]//button[@class='edit-section au-target']")
    }, 
    clickOnElement: async function (givenSectionEditButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionEditButton));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionEditButton));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionEditButton));
    },
}, 
editSectionNameInputPlaceholder:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[@id='editSectionModal']//input[@placeholder='New name here']")
    },  
    clearValueOfTextField:async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clearValueInTextField(await this.get())
       
      }
    },
editSectionNameSaveButton:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[@id='editSectionModal']//button[@type='button'][normalize-space()='Save']")
    },  
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
deleteScetionButton:   {
    get: async function(givenSectionDeleteButton) {  
        return await webdriverIOReferences.findElement ("//span[text()='"+ givenSectionDeleteButton +"']/ancestor::a//button[@class='au-target delete-section']")
    },  
    clickOnElement: async function (givenSectionDeleteButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionDeleteButton));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionDeleteButton));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionDeleteButton));
    },
}, 
updatedSectionName:   {
    get: async function() {  
        return await webdriverIOReferences.findElement (`//span[text()='${global.uniqueSectionName}']`)
    }
},
sectionNametoBeEdited:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//a[@class='au-target sec-41']//i[@class='fas fa-pen edit-section-icon']")
    },  
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
pluseSymbolNextToCategoryName:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//span[text()='Category for author to test']/following::button[@class='au-target add-section']")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
agentUserSectionName:   {
    get: async function(givenSectionName) {  
        return await webdriverIOReferences.findElement ("//span[normalize-space()='"+ givenSectionName +"']")
    },  
    clickOnElement: async function (givenSectionName) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionName));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionName));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionName));
    },
}, 
agentUserSectionToBeEditButton:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//a[@class='au-target sec-3']//i[@class='fas fa-pen edit-section-icon']")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
pluseSymboleNextToCategoryNameInAgentUser:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//menu-category[a/span[text()='Satya Test']]//button[@title='Add section']")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
sectionNameInAgentUserDeleteButton:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//a[@class='au-target sec-58']//i[@class='fal fa-trash-alt delete-section-icon']")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
articleListViewUnderSections:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//section[@class='section articles-list']")
    },
isVisible: async function () {
    await webdriverIOReferences.elementWaitForExist(await this.get());
    await webdriverIOReferences.elementWaitForVisible(await this.get());
   return await webdriverIOReferences.elementIsDisplayed(await this.get());
}
},
specificArticleInTheListView:   {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//li[.//p[@class='article-title' and text()='Test Article']]")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
}, 
sectionNameForManagerUser:   {
    get: async function(givenSectionNameForManagerUser) {  
        return await webdriverIOReferences.findElement ("//span[text()='"+ givenSectionNameForManagerUser +"']/ancestor::a[@role='menuitem']/ancestor::menu-section")
    },
    clickOnElement: async function (givenSectionNameForManagerUser) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionNameForManagerUser));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionNameForManagerUser));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionNameForManagerUser));
}
},
createArticleType:   {
    get: async function(articleCreationType) {  
        return await webdriverIOReferences.findElement ("//span[normalize-space()='"+ articleCreationType +"']")
    },
    clickOnElement: async function (articleCreationType) {
        await webdriverIOReferences.elementWaitForExist(await this.get(articleCreationType));
        await webdriverIOReferences.elementWaitForVisible(await this.get(articleCreationType));
        await webdriverIOReferences.clickOnTheElement(await this.get(articleCreationType));
    },
}, 

};  
module.exports = homePageElements;