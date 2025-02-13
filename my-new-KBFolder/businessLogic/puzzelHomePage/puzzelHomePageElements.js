const webdriverIOReferences = require('@puzzel/wdio-references-async');

const puzzelHomePageElements = {
    puzzelBanner: {
        get: async function() {
            return( await webdriverIOReferences.findElement("identity-topbar-component")).shadow$('topbar-logo')
        },
        isVisible: async function () {
            const element = await this.get(); 
            return await webdriverIOReferences.elementIsDisplayed(element);
        },
        getTheText:async function () {
                await webdriverIOReferences.elementGetText(await this.get())
        }
    },
    puzzelHome: {
        get: async function (buttonAriaLabel) {
         return webdriverIOReferences.findElement(
           'li[aria-label="' + buttonAriaLabel + '"]'
           );
         },
       
     
     
        clickTheElement: async function (buttonAriaLabel) {
         await webdriverIOReferences.elementWaitForExist(await this.get(buttonAriaLabel));
         await webdriverIOReferences.elementWaitForVisible(await this.get(buttonAriaLabel));
         await webdriverIOReferences.clickOnTheElement(await this.get(buttonAriaLabel));
         },
       },

    puzzelOpenProfileButton: {
        get: async function() {
        return( await webdriverIOReferences.findElement("identity-topbar-component")).shadow$('button[aria-label="Profile"]')
    },
    isVisible: async function () {
        const element = await this.get(); 
        return await webdriverIOReferences.elementIsDisplayed(element);
    },
    clickOnElement: async function () {
        await webdriverIOReferences.elementWaitForExist(await this.get());
        await webdriverIOReferences.elementWaitForVisible(await this.get());
        await webdriverIOReferences.clickOnTheElement(await this.get());
    },
},
    signOutButton: {
        get: async function() {
        return( await webdriverIOReferences.findElement("identity-topbar-component")).shadow$('#logouteventlink')
    },
    isVisible: async function () {
        const element = await this.get(); 
        return await webdriverIOReferences.elementIsDisplayed(element);
    },
    clickOnElement: async function () {
        const element = await this.get(); 
        await webdriverIOReferences.elementWaitForExist(element);
        await webdriverIOReferences.elementWaitForVisible(element);
        await webdriverIOReferences.clickOnTheElement(element);
    },
},
};  
module.exports = puzzelHomePageElements;