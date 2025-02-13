const { When } = require("@cucumber/cucumber");
const loginPageElements = require("./../../businessLogic/loginPage/loginPageElements");
//const { expect, assert } = require("chai");
const homePageElements = require("../../businessLogic/homePage/homePageElements");
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const webdriverIOReferences = require("@puzzel/wdio-references-async");
const commonMethods = require("../../utilities/commonMethods");
const { expect } = import("chai");
import("chai").then((chai) => {
  const assert = chai.assert;
  const expect = chai.expect;


When(/^I add "([^"]*)" in CK Editor text area$/,async(givenContent) => {
    await createArticlePageElements.ckEditorTextArea.typeInTheValueInTheTextField(givenContent);
    let content = "";
    switch (givenContent) {
      case "Rich Text Content":
        content = commonMethods.Rich_Text_Article_Content;
        break;
      case "Top Article Content":
        content = commonMethods.Top_Article_Content;
        break;
      case "Delete Article Content":
        content = commonMethods.Delete_Article_Content;
        break; 
      case "Engilsh Content" :
        content = commonMethods.Add_Languages_Content;
        break;
      case "Norwegian Content":
        content = commonMethods.Norwegian_Article_Content;
        break;
      case "Audience Groups Content":
        content = commonMethods.Audience_Groups_Content;
        break;
      case "Draft State Article Content" :
        content = commonMethods.Article_Status_Content_Drafts;
        break;
      case "Review State Article Content" :
        content = commonMethods.Article_Status_Content_Review;
        break;
      case "Published State Article Content" :
        content = commonMethods.Article_Status_Content_Published;
        break;
      case "Manager User Article Content":
        content = commonMethods.Article_Content_By_Manager;
        break;
      case "Agent User Article Content":
          content = commonMethods.Article_Content_By_Agent;
          break; 
      case "Expired Article Content":
            content = commonMethods.Expired_Article_Content;
            break;
      case "News Article Content":
            content = commonMethods.News_Article_Content;
            break;
      case "Announcement Article Content":
              content = commonMethods.Announcement_Article_Content;
              break;
      default:
        throw new Error(`Invalid article Content text area: ${givenContent}`);
    }
    await webdriverIOReferences.setValueInTextField(
      await createArticlePageElements.ckEditorTextArea.get(givenContent),
      content);
  });

  });