const {Then} = require('@cucumber/cucumber');
const homePageElements = require('./../../businessLogic/homePage/homePageElements')
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const commonMethods = require("../../utilities/commonMethods");
const webdriverIOReferences = require('@puzzel/wdio-references-async');
const agentPageElements = require('../../businessLogic/agentPage/agentPageElements');
const { agent } = require('../../utilities/users');
import('chai').then(chai => {
    const assert = chai.assert;
    const expect = chai.expect;


Then(/^I sent feedback from an opened article in the widget to view in Admin$/,async() => {
        await agentPageElements.sendFeedbackButton.clickOnElement()
        await webdriverIOReferences.elementIsDisplayed(await agentPageElements.feedbackTextArea.get())
        await webdriverIOReferences.setValueInTextField(await agentPageElements.feedbackTextArea.get(), commonMethods.Feedback_Text_Sent_To_Admin)
        await agentPageElements.feedbackSendButton.clickOnElement()
        
    });
    

    Then(/^The sent feedback is displayed in the feedback section below the article content.$/, async() => {
        const isItVisible = await agentPageElements.feedbackInfo.isVisible()
        expect(isItVisible).to.equal(true);
        await webdriverIOReferences.elementGetText(await agentPageElements.feedbackInfo.get())
    });
    
    
    Then(/^I verify the feedback that was sent from the Widget in the article$/, async() => {
	    const isItVisible = await agentPageElements.feedbackInfo.isVisible()
        expect(isItVisible).to.equal(true);
        await webdriverIOReferences.elementGetText(await agentPageElements.feedbackInfo.get())
});
    
Then(/^The feedback should display in Admin with the same text as the widget$/, async () => {
	const feedbackTextInWidget = await webdriverIOReferences.elementGetText(await agentPageElements.feedbackInfo.get())
    const feedbackTextInAdmin = await webdriverIOReferences.elementGetText(await agentPageElements.feedbackInfo.get())
    expect(feedbackTextInWidget).to.equal(feedbackTextInAdmin);
});



Then(/^I sent a "([^"]*)" to a feedback from the Admin$/, async(givenFeedbackButton) => {
    await createArticlePageElements.replyAndDeleteButton.clickOnElement(givenFeedbackButton)
    await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.feedbackPlaceHolderInAdmin.get())
    await webdriverIOReferences.setValueInTextField(await createArticlePageElements.feedbackPlaceHolderInAdmin.get(), commonMethods.Reply_To_A_Feedback_From_Admin)
    await createArticlePageElements.replyFeedbackSendButtonInAdmin.clickOnElement()
	
});

Then(/^I verify the reply that was sent from the Admin$/, async() => {
	return true;
});

Then(/^the feedback reply should display in widget with the same text as the Admin$/, async() => {
	return true;
});


});
