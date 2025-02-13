const webdriverIOReferences = require('@puzzel/wdio-references-async');
const {Given} = require('@cucumber/cucumber');
const loginPageElements = require('./../../businessLogic/loginPage/loginPageElements')
const {
    login,
  } = require("./../../businessLogic/loginPage/loginPageHelperElements");
  const puzzelHomePageElements = require('./../../businessLogic/puzzelHomePage/puzzelHomePageElements')
  const homePageElements = require('./../../businessLogic/homePage/homePageElements')
  const agentPageElements = require('../../businessLogic/agentPage/agentPageElements')


Given(/^I am logged in as a (admin|manager|author|agent)$/, async(role) => {
	 await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/admin/")
    await browser.waitUntil(async function () {
        return await webdriverIOReferences.customElementIsVisible(await loginPageElements.loginPageText.get()) === true;
    }, {timeout: 20000, timeoutMsg: 'Puzzel login form is not displayed!!!'})
    await loginPageElements.loginPageText.getTheText()
    await login(role);

    
    
});

Given(/^I wait "([^"]*)" seconds$/, async(givenTimePeriod) => {
	await webdriverIOReferences.wait(givenTimePeriod)
});


Given(/^I accessd "([^"]*)" application from the admin main menu$/, async(buttonAriaLabel) => {
    await puzzelHomePageElements.puzzelHome.clickTheElement(buttonAriaLabel);
    
	
});


Given(/^I am on knowledgebase admin home page$/, async() => {
	await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/admin/knowledgeadmin/")
    await browser.waitUntil(async () => {
        return await homePageElements.knowledgeBaseBanner.isVisible();
    }, {timeout: 20000, timeoutMsg: 'KB Banner is not displayed!!!'}) 
    await homePageElements.knowledgeBaseBanner.getTheText()
});


Given(/^I am on knowledgebase Inbox page$/, async() => {
	await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/admin/knowledgeadmin/inbox/Feedback")
});



Given(/^I am on the Permissions page in the knowledgebaseadmin application$/, async() => {
	await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/admin/knowledgeadmin/permissions")
});

Given(/^I am on Inbox menu Item Page in the Knowledgebase admin application$/, async() => {
	await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/admin/knowledgeadmin/inbox/Feedback")
});


Given(/^I am on the agnet Application$/, async() => {
	await agentPageElements.selectApplicationsbutton.clickOnElement()
    await agentPageElements.switchingUserApplications.clickOnElement()
    await browser.pause(5000)
    await agentPageElements.iconTab.clickOnElement()
    await agentPageElements.knowledgeBaseWidget.clickOnElement()
    await agentPageElements.iframeLocator.switchingToIframe()
    
});


Given(/^I am on Knowledgebase Widget application$/, async() => {
	await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/agent/")
});


Given(/^I am on knowledgebase dashbord page$/, async() => {
	await webdriverIOReferences.goToUrl("https://stagapp.puzzel.com/knowledgeadmin/dashboard")
});
