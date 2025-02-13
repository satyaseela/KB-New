const webdriverIOReferences = require('@puzzel/wdio-references-async');
const commonMethods = require('../../utilities/commonMethods')

const folderPageElements = {
    foldersMenuItem: {
        get: async function() {
            return await webdriverIOReferences.findElement("//i[@class='fa fa-folders fa-3x']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 

    createFolderButton: {
        get: async function(givenCreateFolderButton) {
            return await webdriverIOReferences.findElement("//div[@aria-label='"+ givenCreateFolderButton +"']//div[@class='dx-button-content']");
        },
        clickOnElement: async function(givenCreateFolderButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCreateFolderButton));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCreateFolderButton));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenCreateFolderButton));
        }
    },
    newFolderTextBox: {
        get: async function() {
            return await webdriverIOReferences.findElement("//input[@role='textbox']");
        },
        typeInTheValueInTheTextField: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
        }
    },
    newDirectoryModalBoxCreateButton: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@aria-label='Create']//div[@class='dx-button-content']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    folderDeleteButton : {
        get: async function() {
            return await webdriverIOReferences.findElement("div[class='dx-toolbar-before'] div[aria-label='Delete'] span[class='dx-button-text']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    folderModalBoxDeleteButton: {
        get: async function() {
            return await webdriverIOReferences.findElement("div[class='dx-toolbar-after'] div[aria-label='Delete'] span[class='dx-button-text']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    folderRenameButton : {
        get: async function() {
            return await webdriverIOReferences.findElement("div[aria-label='Rename'] span[class='dx-button-text']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    folderModalBoxRenameSaveButton: {
        get: async function() {
            return await webdriverIOReferences.findElement("div[aria-label='Save'] div[class='dx-button-content']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    }, 
    mainFolder: {
        get: async function() {
            return await webdriverIOReferences.findElement("div[class='dx-item dx-treeview-item dx-filemanager-focused-item'] div[class='dx-item-content dx-treeview-item-content']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    createdFolderName  : {
        get: async function(givenFolderName) {
            return await webdriverIOReferences.findElement("//div[@class='dx-filemanager-thumbnails-item-name' and text()='"+ givenFolderName +"']");
        },
        isVisible:async function (givenFolderName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenFolderName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenFolderName));
            await webdriverIOReferences.elementIsDisplayed(await this.get(givenFolderName))
        },
        clickOnElement: async function (givenFolderName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenFolderName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenFolderName));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenFolderName));
        }
    },
    listOfFilesThumbnailsInsideTheFolder: {
        get: async function(givenFolderName) {
            return await webdriverIOReferences.findElement("//div[@class='dx-filemanager-thumbnails-view-port dx-widget dx-collection']//div[@class='dx-scrollable-content']");
        },
        isVisible:async function (givenFolderName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenFolderName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenFolderName));
            await webdriverIOReferences.elementIsDisplayed(await this.get(givenFolderName))
        },
    },
    editedFolderName: {
        get: async function() {
            return await webdriverIOReferences.findElement("//li[contains(@class, 'dx-treeview-node') and contains(@class, 'dx-treeview-node-is-leaf') and contains(@data-item-id, 'FIK_New%20Test') and @role='treeitem']");
        },
        isVisible:async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    renameOptionFromRightClickOnFolderName: {
        get: async function() {
            return await webdriverIOReferences.findElement("//span[@class='dx-menu-item-text'][normalize-space()='Rename']");
        },
        
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    addAnewFileButton: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@role='button' and @aria-label='Add new file']");
        },
        
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    fileMangerErrorMessage: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='dx-filemanager-progress-box']//div[@class='dx-filemanager-progress-box-error'][normalize-space()='Cannot create directory.']");
        },

    },
    fileManagerErrorForbiddenMessage: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='dx-filemanager-progress-box']//div[@class='dx-filemanager-progress-box-error'][normalize-space()='Forbidden']");
        },

    },
    itemNotRenamedNotificationText: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='dx-filemanager-notification-common']");

        },
        getTheText: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementGetText(await this.get());
        },
    },
    fileNameThatToBeAttached: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[contains(@class, 'dx-filemanager-thumbnails-item') and .//div[@class='dx-filemanager-thumbnails-item-name' and text()='filetotest.docx']]");
        },
        
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    attachFilesButton: {
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='modal-footer']//button[@type='button' and contains(text(), 'Attach Files')]");
        },
        
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    
}
    module.exports = folderPageElements;