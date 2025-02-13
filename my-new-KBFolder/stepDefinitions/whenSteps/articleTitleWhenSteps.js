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
  When(/^I add the title in "([^"]*)" field$/, async (givenArticleTitle) => {
    await createArticlePageElements.articleTitleField.typeInTheValueInTheTextField(
      givenArticleTitle
    );
    let title = "";
    switch (givenArticleTitle) {
      case "Article title":
        title = commonMethods.Article_Title;
        break;
      case "Rich Text Article Title":
        title = commonMethods.Rich_Text_Article_Title;
        break;
      case "Top Article Title":
        title = commonMethods.Top_Article_Title;
        break;
      case "Delete article Title":
        title = commonMethods.Delete_Article_Title;
        break;
      case "Article With Languages":
        title = commonMethods.Add_Languages_Title;
        break;
      case "Norwegian Article":
        title = commonMethods.Norwegian_Article_Title;
        break;
      case "Audience Groups Title":
        title = commonMethods.Audience_Groups_Title;
        break;
      case "Draft State Article Title" :
        title = commonMethods.Article_Status_Title_Drafts;
        break;
      case "Review State Article Title":
        title = commonMethods.Article_Status_Title_Review;
        break;
      case "Published State Article Title" :
        title = commonMethods.Article_Status_Title_Published;
        break;
      case "Manager User Article Title" :
        title = commonMethods.Article_Title_By_Manager;
        break;
      case "Agent User Article Title" :
          title = commonMethods.Article_Title_By_Agent;
          break;
      case "Expired Article Title" :
            title = commonMethods.Expired_Article_Title;
            break;
      case "News Article Title" :
              title = commonMethods.News_Article_Title;
              break;  
      case "Announcement Article Title" :
              title = commonMethods.Announcement_Article_Title;
              break;  
      default:
        throw new Error(`Invalid article title field: ${givenArticleTitle}`);
    }

    await webdriverIOReferences.setValueInTextField(
      await createArticlePageElements.articleTitleField.get(givenArticleTitle),
      title
    );
    await browser.pause(2000);
  });

});