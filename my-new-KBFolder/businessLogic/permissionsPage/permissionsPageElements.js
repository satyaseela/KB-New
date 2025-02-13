const webdriverIOReferences = require('@puzzel/wdio-references-async');
const commonMethods = require('../../utilities/commonMethods')

const permissionsPageElements ={

createAndManageAccessLevelsButton:  {
    get: async function(givenAccessLevelButton) {  
        return await webdriverIOReferences.findElement ("//span[normalize-space()='"+ givenAccessLevelButton +"']")
    },
    clickOnElement: async function (givenAccessLevelButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenAccessLevelButton));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenAccessLevelButton));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenAccessLevelButton));
    },
},
multiSelectDropDownButton:  {
    get: async function(givenTypeOfValueDropDownButton) {  
        return await webdriverIOReferences.findElement ("//multiselect-dropdown[@value.bind='"+ givenTypeOfValueDropDownButton +"']//div[@class='search-component']")
    },
    clickOnElement: async function (givenTypeOfValueDropDownButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenTypeOfValueDropDownButton));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenTypeOfValueDropDownButton));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenTypeOfValueDropDownButton));
    },
},
mulitiSelectDropDownForAllRequiredElements:  {
    get: async function(givenElementFromDropDown) {  
        return await webdriverIOReferences.findElement ("//div[@class='au-target multiselect-dropdown dropdown-expanded']//span[@class='au-target'][normalize-space()='"+ givenElementFromDropDown +"']")
    },
    clickOnElement: async function (givenElementFromDropDown) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenElementFromDropDown));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenElementFromDropDown));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenElementFromDropDown));
    },
},
groupsRadioButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//input[@id='groupsRadio']")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
usersRadioButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//input[@id='usersRadio']")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},

assignToGroupsOrUsersDropDownButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//multiselect-dropdown[@value.bind='selectedUsersAndGroups']//div[@class='search-component']")
    },

    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},

selectingGroupsOrUsersFromDropDown:  {
    get: async function(givenSourceUser) {  
        return await webdriverIOReferences.findElement ("//div[@class='au-target multiselect-dropdown dropdown-expanded']//span[@class='au-target'][normalize-space()='"+ givenSourceUser +"']")
    },
    clickOnElement: async function (givenSourceUser) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSourceUser));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSourceUser));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSourceUser));
    },
},
selectResourcesDropDownButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[contains(@class, 'multiselect-dropdown') and div[contains(text(), 'Select Categories and Sections')]]")
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
typeOfAccessLevel:  {
    get: async function(givenAccessLevel) {  
        return await webdriverIOReferences.findElement ("//div[@class='header-sub-tabs']//button[text()='"+ givenAccessLevel +"']")
    },
    clickOnElement: async function (givenAccessLevel) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenAccessLevel));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenAccessLevel));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenAccessLevel));
    },
},
createAccessLevelsSaveButton:  {
    get: async function(givenButton) {  
        return await webdriverIOReferences.findElement ("//button[@class='save au-target']")
    },
    clickOnElement: async function (givenButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
accessLevelsInRows:  {
    get: async function(givenSelectedResource) {  
        return await webdriverIOReferences.findElement ("//tr[@class='au-target content-access-view' and td[contains(text(), '"+ givenSelectedResource +"')]] ")
    },
    isVisible: async function (givenSelectedResource) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSelectedResource));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSelectedResource));
       return await webdriverIOReferences.elementIsDisplayed(await this.get(givenSelectedResource))
    },
},
completeAuhtorAccessLevelInRow:  {
    get: async function(givenSelectedResource) {  
        return await webdriverIOReferences.findElement ("//tr[.//span[text()='kb:author'] and .//td[text()='Satya Author Puli'] and .//td[text()='"+ givenSelectedResource +"']]")
    },
    isVisible: async function (givenSelectedResource) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSelectedResource));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSelectedResource));
       return await webdriverIOReferences.elementIsDisplayed(await this.get(givenSelectedResource))
    },
},   
accessLevelDeleteButton:  {
    get: async function(givenSelectedResource) {  
        return await webdriverIOReferences.findElement ("//tr[@class='au-target content-access-view' and td[contains(text(), '"+ givenSelectedResource +"')]]//button[@title='Delete'] ")
    },
    clickOnElement: async function (givenSelectedResource) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenSelectedResource));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenSelectedResource));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenSelectedResource));
    },
},
deleteContentAccessDeleteButton:  {
    get: async function(givenButton) {  
        return await webdriverIOReferences.findElement ('//div[@class="modal-footer"]//button[text()="Delete"]')
    },
    clickOnElement: async function (givenButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
globalAccessLevelClientApplicationDropDownButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[@class='au-target multiselect-dropdown dropdown-expanded']//div[@class='search-component']")
    },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },

addPermissionSchemeButton:  {
    get: async function(givenAddPermiissionButton) {  
        return await webdriverIOReferences.findElement (".add-permission-scheme[data-toggle='modal']")
    },
    clickOnElement: async function (givenAddPermiissionButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
addPermissionSchemeModelBox:{
    get: async function() {  
        return await webdriverIOReferences.findElement ("//h5[normalize-space()='Add Permission Scheme']")
    },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
           return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
        getTheText:async function () {
        await webdriverIOReferences.elementGetText(await this.get())
    },
    
customePermissionSchemeInputPlaceHolder:{
    get: async function(givenInputFiled) {  
        return await webdriverIOReferences.findElement ("//input[@placeholder='Custom permission scheme']")
    },
    isVisible: async function (givenInputFiled) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
       return await webdriverIOReferences.elementIsDisplayed(await this.get())
    },
},
   
permissionSchemeDescriptionTextArea:{
    get: async function(givenTextArea) {  
        return await webdriverIOReferences.findElement ("//textarea[@value.bind='newPermissionSchemeDescription']")
    },
    isVisible: async function (givenTextArea) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
       return await webdriverIOReferences.elementIsDisplayed(await this.get())
    },
},
addPermissionsSchemeModelBoxAddButton:{
    get: async function(givenAddButton) {  
        return await webdriverIOReferences.findElement (".btn.add-permission-scheme.au-target")
    },
    clickOnElement: async function (givenAddButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
permissionsSchemeElementInManagePermissionsSchemeTab:{
    get: async function(givenElement) {  
        return await webdriverIOReferences.findElement ("div[class='header-table'] span")
    },
    isVisible: async function (givenElement) {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
       return await webdriverIOReferences.elementIsDisplayed(await this.get())
    },
},
permissionSchemeInTheList:{
    get: async function(givenPermissionScheme) {  
        return await webdriverIOReferences.findElement ("//span[normalize-space()='"+ givenPermissionScheme +"']")
    },
    isVisible: async function (givenPermissionScheme) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenPermissionScheme));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenPermissionScheme));
       return await webdriverIOReferences.elementIsDisplayed(await this.get(givenPermissionScheme))
    },
},
permissionSchmeDeleteButton:{
    get: async function(givenPermissionSchemeDeleteButton) {  
        return await webdriverIOReferences.findElement ("//li[span[text()='"+ givenPermissionSchemeDeleteButton +"']]//button[@title='Delete']")
    },
    clickOnElement: async function (givenPermissionSchemeDeleteButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenPermissionSchemeDeleteButton));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenPermissionSchemeDeleteButton));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenPermissionSchemeDeleteButton));
    },
},    
permissionSchmeEditButton:{
    get: async function(givenPermissionSchemeEditButton) {  
        return await webdriverIOReferences.findElement ("//li[span[text()='"+ givenPermissionSchemeEditButton +"']]//button[@title='Edit']")
    },
    clickOnElement: async function (givenPermissionSchemeEditButton) {
        await webdriverIOReferences.elementWaitForExist(await this.get(givenPermissionSchemeEditButton));
        await webdriverIOReferences.elementWaitForVisible(await this.get(givenPermissionSchemeEditButton));
        await webdriverIOReferences.clickOnTheElement(await this.get(givenPermissionSchemeEditButton));
    },
}, 
selectFoldersDropDownButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//div[contains(@class, 'multiselect-dropdown') and div[contains(text(), 'Select Folders')]]")
    },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 

selectResourceTypeFilterDropdownButton:  {
    get: async function() {  
        return await webdriverIOReferences.findElement ("//select[@value.bind='resourceTypeFilter']")
    },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
selectResourceTypeFilterFromDropdown:  {
    get: async function(givenResourceAccessType) {  
        return await webdriverIOReferences.findElement ("//multiselect-dropdown-item[.//span[contains(text(), '"+ givenResourceAccessType +"')]]")
    },
        clickOnElement: async function (givenResourceAccessType) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenResourceAccessType));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenResourceAccessType));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenResourceAccessType));
        },
    }, 
 selectUserGroupFilterDropDownButton:  {
        get: async function() {  
            return await webdriverIOReferences.findElement ("//select[@value.bind='userOrGroupFilter']")
        },
            clickOnElement: async function () {
                await webdriverIOReferences.elementWaitForExist(await this.get());
                await webdriverIOReferences.elementWaitForVisible(await this.get());
                await webdriverIOReferences.clickOnTheElement(await this.get());
            },
        }, 
 filterUsersFromDropDown:  {
    get: async function(givenUserName) {  
        return await webdriverIOReferences.findElement ("//select[@value.bind='userOrGroupFilter']/option[text()='"+ givenUserName +"']")

    },
        clickOnElement: async function (givenUserName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenUserName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenUserName));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenUserName));
        },
    },
agentAccessLevelInARow:  {
    get: async function(givenResource) {  
        return await webdriverIOReferences.findElement ("//tr[.//span[text()='kb:agent'] and .//td[text()='Satya Agent Puli'] and .//td[text()='"+ givenResource +"']]")

    },
    isVisible: async function (givenResource) {
    await webdriverIOReferences.elementWaitForExist(await this.get(givenResource));
    await webdriverIOReferences.elementWaitForVisible(await this.get(givenResource));
   return await webdriverIOReferences.elementIsDisplayed(await this.get(givenResource))

},   
},

}
module.exports = permissionsPageElements;
