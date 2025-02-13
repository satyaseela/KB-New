const webdriverIOReferences = require('@puzzel/wdio-references-async');
const loginPageElements = require("./loginPageElements")
const users = require("../../utilities/users");


module.exports = {
    login: async function (role) {
        const { username, password } = users[role];

        await loginPageElements.puzzelID.typeInTheValueInTheTextField(username);
        await loginPageElements.nextButton.clickOnElement();
        await loginPageElements.passwordField.typeInTheValueInTheTextField(password);
        await loginPageElements.puzzelLoginButton.clickOnElement();
    }
};
