const webdriverIOReferences = require('@puzzel/wdio-references-async');

const loginPageElements = {
    nextButton: {
        get: async function () {
            return webdriverIOReferences.findElement('.button.submit-button')
        },
        clickOnElement: async function () {
            await webdriverIOReferences.clickOnTheElement(await this.get())
        }
    },
    puzzelID: {
        get: async function () {
            return webdriverIOReferences.findElement('#Input_Username')
        },
        typeInTheValueInTheTextField: async function (value) {
            await webdriverIOReferences.setValueInTextField(await this.get(), value)
        },
    },
    passwordField:{
        get: async function () {
            return webdriverIOReferences.findElement('#Input_Password')
        },
        typeInTheValueInTheTextField: async function (value) {
            await webdriverIOReferences.clearValueInTextField(await this.get())
            await webdriverIOReferences.setValueInTextField(await this.get(),value)
        },
    },
    puzzelLoginButton: {
        get: async function () {
            return webdriverIOReferences.findElement("//button[@class='button submit-button']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.clickOnTheElement(await this.get())
        }
    },
    loginPageText: {
        get: async function () {
            return webdriverIOReferences.findElement(".right-side-grid-text")  
        },
         isVisible: async function () {
                await webdriverIOReferences.elementIsDisplayed(await this.get())
                await webdriverIOReferences.elementGetText(await this.get())
         },
         getTheText:async function () {
            await webdriverIOReferences.elementGetText(await this.get())
         }
    }
};
module.exports = loginPageElements;