const { When } = require("@cucumber/cucumber");
const loginPageElements = require("./../../businessLogic/loginPage/loginPageElements");
const {
  login,
} = require("./../../businessLogic/loginPage/loginPageHelperElements");
const homePageElements = require("../../businessLogic/homePage/homePageElements");
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const audienceGroupsPageElements = require("../../businessLogic/audienceGroupsPage/audienceGroupsPageElements");
const permissionsPageElements = require("../../businessLogic/permissionsPage/permissionsPageElements");
const articleListViewPageElements = require("../../businessLogic/articleListViewPage/articleListViewPageElements")
const allUsersPermissionsPageElements = require("../../businessLogic/permissionsPage/allUsersPermissionsPageElements");
const inboxPageElements = require("../../businessLogic/inboxPage/inboxPageElements")
const folderPageElements = require("../../businessLogic/foldersPage/foldersPageElements")
const webdriverIOReferences = require("@puzzel/wdio-references-async");
const commonMethods = require("../../utilities/commonMethods");
const path = require('path');
const users = require("../../utilities/users");
const { create } = require("domain");
const agentPageElements = require("../../businessLogic/agentPage/agentPageElements");
const { expect } = import("chai");
import("chai").then((chai) => {
  const assert = chai.assert;
  const expect = chai.expect;

  When(
    /^I click on "([^"]*)" to Edit the Category list view$/,
    async (givenMenuButton) => {
      await homePageElements.editMenu.clickOnElement(givenMenuButton);
    }
  );

  When(/^I click on "([^"]*)" button$/, async (givenCategory) => {
    await homePageElements.addCategory.clickOnElement(givenCategory);
  });

  When(/^I enter the category name in model box displayed$/, async () => {
    await homePageElements.categoryModalBoxNamePlaceholder.typeInTheValueInTheTextField();
    await homePageElements.categoryModalBoxDropDrown.clickOnElement();
  });


  When(/^I enter the News category name in model box displayed$/, async () => {
    await webdriverIOReferences.setValueInTextField(await homePageElements.categoryModalBoxNamePlaceholder.get(), 'Test News Category');
    await homePageElements.categoryModalBoxDropDrown.clickOnElement();
  });

  When(/^I enter the Announcements category name in model box displayed$/, async () => {
    await webdriverIOReferences.setValueInTextField(await homePageElements.categoryModalBoxNamePlaceholder.get(), 'Test Announcements Category');
    await homePageElements.categoryModalBoxDropDrown.clickOnElement();
  });

  When(
    /^I select the category type "([^"]*)" from dropdown options$/,
    async (givenCategoryType) => {
      await homePageElements.addCategoryTypeFromDropdown.clickOnElement(givenCategoryType);
    }
  );

  When(
    /^I click on "([^"]*)" button that creates a category$/,
    async (givenElement) => {
      await homePageElements.modalBoxCreateButton.clickOnElement(givenElement);
    }
  );

  When(/^I click on the selcted category$/, async () => {
    await homePageElements.createdCategoryName.clickOnElement();
  });

  When(
    /^I click on "([^"]*)" button to create an Article$/,
    async (givenArticleButton) => {
      await createArticlePageElements.createArticleButton.clickOnElement(
        givenArticleButton
      );
    }
  );

  When(
    /^change the type of the text to "([^"]*)" option from the dropdown$/,
    async (givenTextType) => {
      await browser.execute(() => { 
        const modalBackdrop = document.querySelector('.modal-backdrop'); 
        if (modalBackdrop) { modalBackdrop.remove();

         } });
    await createArticlePageElements.textTypeDropDownButton.clickOnElement();

      await createArticlePageElements.textType.clickOnElement(givenTextType);
    }
  );

  When(
    /^I choose language "([^"]*)" from the language dropdown$/,
    async (givenLanguage) => {
      await createArticlePageElements.chooseLanguageDropDownButton.clickOnElement();
      await createArticlePageElements.chooseLanguageOptions.clickOnElement(
        givenLanguage
      );
    }
  );

  When(
    /^tick mark the visibility check box as "([^"]*)"$/,
    async (givenVisiblity) => {
      const isCheckBoxSelected = await createArticlePageElements.visibilityCheckBoxButton.isSelected(givenVisiblity)
      if (givenVisiblity === "Visible" && !isCheckBoxSelected) {
        await createArticlePageElements.visibilityCheckBoxButton.clickOnElement(
          givenVisiblity
        );
      } else if (givenVisiblity === "Not Visible" && isCheckBoxSelected) {
        await createArticlePageElements.visibilityCheckBoxButton.clickOnElement(
          givenVisiblity
        );
      }
    });
  
  When(
    /^I click the "([^"]*)" button to save the article$/,
    async (givenOption) => {
      await createArticlePageElements.articleCreationSaveButton.clickOnElement();
    }
  );

  When(/^I add articles content in "([^"]*)"$/, async (givenContent) => {
    await createArticlePageElements.editorTextArea.typeInTheValueInTheTextField();
  });

  When(/^I click on sections to create subsection$/, async () => {
    await homePageElements.sectionName.clickOnElement();
  });

  When(
    /^I Edit article favourite status by clicking on a star mark$/,
    async () => {
      await createArticlePageElements.topArticleStarSymbol.clickOnElement();
    }
  );

  When(/^I click on "([^"]*)" menu item$/, async (givenCategory) => {
    await createArticlePageElements.givenMenuCategory.clickOnElement();
  });

  When(
    /^I open the article "([^"]*)" from the list view and I Delete the article$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
      await createArticlePageElements.articleDeleteButton.clickOnElement();
      await createArticlePageElements.deleteButtonInModalBox.clickOnElement();
    }
  );

  When(
    /^I open the article "([^"]*)" to add language articles$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
    }
  );

  When(
    /^I click on "([^"]*)" Button next to English language article$/,
    async (givenLanguage) => {
      await createArticlePageElements.addLanguageButton.clickOnElement();
    }
  );

  When(
    /^I click on choose language dropdown and choose language "([^"]*)" from the language dropdown$/,
    async (givenLanguage) => {
      
      await createArticlePageElements.addLanguageDropdownButton.clickOnElement();
      await browser.pause(2000);
      await createArticlePageElements.addLanguageFromDropDown.clickOnElement(
        givenLanguage
      );
    }
  );

  When(/^I will click on "([^"]*)" Button$/, async (givenButton) => {
    await createArticlePageElements.addLanguageAddButton.clickOnElement();
  });

  When(
    /^I open the article "([^"]*)" to add alaternative views$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
    }
  );

  When(/^I Click on "([^"]*)" Symbol$/, async (addOrRemoveViewButton) => {
    await audienceGroupsPageElements.addOrRemoveAlternativeViewButton.clickOnElement();
  });

  When(/^I Check the "([^"]*)" view checkbox$/, async (givenAudienceView) => {
    switch (givenAudienceView) {
      case "Agent":
        await audienceGroupsPageElements.alternativeViewsCheckBoxes.clickOnElement(
          givenAudienceView
        );
        break;
      case "Mobile":
        await audienceGroupsPageElements.alternativeViewsCheckBoxes.clickOnElement(
          givenAudienceView
        );
        break;
      default:
        throw new Error(`Invalid checkbox option: ${givenAudienceView}`);
    }
  });

  When(/^I click on "([^"]*)" button to add the view$/, async (givenButton) => {
    await audienceGroupsPageElements.addAlternativeViewSaveButton.clickOnElement();
  });

  When(/^I navigated to "([^"]*)" page$/, async (givenMenuButton) => {
    await homePageElements.knowledgebaseMenuItems.clickOnElement(
      givenMenuButton
    );
    await browser.pause(5000)
  });

  When(/^I click on "([^"]*)" to create an Audience$/, async (givenButton) => {
    await audienceGroupsPageElements.createAudienceButton.clickOnElement();
  });

  When(/^I create a new audience "([^"]*)"$/, async (givenElementName) => {
    await audienceGroupsPageElements.createAudienceNameField.isVisible();
    let audienceName = "";
    switch (givenElementName) {
      case "Audience1":
        nameOfTheAudience = commonMethods.Audience1_Name;
        break;
      case "Audience2":
        nameOfTheAudience = commonMethods.Audience2_Name;
        break;
      case "Audience3":
        nameOfTheAudience = commonMethods.Audience3_Name;
        break;
      default:
        throw new Error(`Invalid Audience Name: ${givenElementName}`);
    }
    await webdriverIOReferences.setValueInTextField(
      await audienceGroupsPageElements.createAudienceNameField.get(
        givenElementName
      ),
      nameOfTheAudience
    );
  });

  When(
    /^I include Inline Styling ON with checkbox clicked and Save$/,
    async () => {
      await audienceGroupsPageElements.includeInlineStylingCheckBox.clickOnElement();
      await audienceGroupsPageElements.createAudienceSaveButton.clickOnElement();
    }
  );

  When(/^I dont include Inline Styling and Save$/, async () => {
    await audienceGroupsPageElements.includeInlineStylingCheckBox.clickOnElement();
    await audienceGroupsPageElements.createAudienceSaveButton.clickOnElement();
  });

  When(/^I delete the audience "([^"]*)"$/, async (givenAudienceViewAction) => {
    await browser.waitUntil(async function () {
    const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await audienceGroupsPageElements.audienceDeleteButton.get(givenAudienceViewAction))
    return isDisplayed;
      }, {timeout: 20000, timeoutMsg: 'Delete Button is not displayed!!!'}) 
    await audienceGroupsPageElements.audienceDeleteButton.clickOnElement(
      givenAudienceViewAction
    );
    await audienceGroupsPageElements.deleteAudienceModalBoxDeleteButton.clickOnElement(
      givenAudienceViewAction
    );
  });

  When(
    /^I edit the Audience "([^"]*)" to change audience name to "([^"]*)" and Save$/,
    async (givenAudienceViewAction, givenAudienceName) => {
      await browser.waitUntil(async function () {
        const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await audienceGroupsPageElements.audienceEditButton.get(givenAudienceViewAction))
        return isDisplayed;
          }, {timeout: 20000, timeoutMsg: 'EDIT Button is not displayed!!!'}) 
      await audienceGroupsPageElements.audienceEditButton.clickOnElement(
        givenAudienceViewAction
      );
      await audienceGroupsPageElements.editAudienceNameFieldInModalBox.typeInTheValueInTheTextField();
      await audienceGroupsPageElements.editAudienceModalBoxDoneButton.clickOnElement();
    }
  );

  When(/^I set article status to "([^"]*)" state$/, async (articleStatusValue) => {
    await createArticlePageElements.statusDropDownButton.clickOnElement();
    await createArticlePageElements.selectStatusFromDropDown.clickOnElement(
      articleStatusValue
    );
  });

  When(
    /^I set the article "([^"]*)" status to "([^"]*)"$/,
    async (givenArticle, articleStatusValue) => {
      await createArticlePageElements.statusDropDownButton.clickOnElement();
      await createArticlePageElements.selectStatusFromDropDown.clickOnElement(
        articleStatusValue
      );
    }
  );

  When(/^I see the list view of articles$/, async () => {
    const isItVisible = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.articlesInListView.get())
    expect(isItVisible).to.equal(true);
  });

  When(
    /^I open the article "([^"]*)" to edit the status of the article$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
    }
  );

  When(/^I open "([^"]*)" menu item folder$/, async (givenMenuFolder) => {
    await homePageElements.inboxFolderMenuItems.clickOnElement(givenMenuFolder);
  });

  When(
    /^I open the article "([^"]*)" under For Review inbox folder$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
    }
  );

  When(
    /^I open the article "([^"]*)" to compare current active versions with previous versions$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
    }
  );

  When(
    /^I click on "([^"]*)" button in the "([^"]*)" view$/,
    async (givenButton, givenVersion) => {
      await homePageElements.compareWithPreviousVersionButton.clickOnElement();
    }
  );

  When(
    /^I click on versions dropdown and select the version to compare with latest version$/,
    async () => {
      await homePageElements.selectVersionDropDownButton.clickOnElement();
      await homePageElements.selectVersionFromDropDown.clickOnElement();
    }
  );

  When(
    /^I compare the "([^"]*)" text in the editor with "([^"]*)" version$/,
    (args1, args2) => {
      console.log(args1, args2);
      return true;
    }
  );

  When(
    /^I click on the "([^"]*)" button to create an access level$/,
    async (givenAccessLevelButton) => {
      await permissionsPageElements.createAndManageAccessLevelsButton.clickOnElement(
        givenAccessLevelButton
      );
    }
  );

  When(
    /^I click on "([^"]*)" Select Permission Scheme dropdown and select Permission Scheme "([^"]*)"$/,
    async (givenTypeOfValueDropDownButton, givenElementFromDropDown) => {
      await permissionsPageElements.multiSelectDropDownButton.clickOnElement(
        givenTypeOfValueDropDownButton
      );
      await permissionsPageElements.mulitiSelectDropDownForAllRequiredElements.clickOnElement(
        givenElementFromDropDown
      );
      await permissionsPageElements.multiSelectDropDownButton.clickOnElement(
        givenTypeOfValueDropDownButton
      );
    }
  );

  When(
    /^I assign a Source "([^"]*)" to a User "([^"]*)"$/,
    async (givenTypeOfValueDropDownButton, givenElementFromDropDown) => {
      await permissionsPageElements.multiSelectDropDownButton.clickOnElement(
        givenTypeOfValueDropDownButton
      );
      await permissionsPageElements.mulitiSelectDropDownForAllRequiredElements.clickOnElement(
        givenElementFromDropDown
      );
      await permissionsPageElements.multiSelectDropDownButton.clickOnElement(
        givenTypeOfValueDropDownButton
      );
    }
  );

  When(/^I select users radio button to select the puzzelID user$/, async () => {
    await permissionsPageElements.usersRadioButton.clickOnElement()
  });

  When(
    /^I click on "([^"]*)" Puzzel Client Application dropdown and slecet client application "([^"]*)"$/,
    async (givenTypeOfValueDropDownButton, givenElementFromDropDown) => {
      await permissionsPageElements.multiSelectDropDownButton.clickOnElement(
        givenTypeOfValueDropDownButton
      );
      await permissionsPageElements.mulitiSelectDropDownForAllRequiredElements.clickOnElement(
        givenElementFromDropDown
      );
      await permissionsPageElements.multiSelectDropDownButton.clickOnElement(
        givenTypeOfValueDropDownButton
      );
    }
  );


  When(/^I click on Select Categories and Sections dropdown and select "([^"]*)"$/, async (givenResourceAccessType) => {
    await permissionsPageElements.selectResourcesDropDownButton.clickOnElement();
    await permissionsPageElements.selectResourceTypeFilterFromDropdown.clickOnElement(
      givenResourceAccessType
    );
    await permissionsPageElements.selectResourcesDropDownButton.clickOnElement();
  }
  );

  When(/^click on the "([^"]*)" button$/, async (givenButton) => {
    await permissionsPageElements.createAccessLevelsSaveButton.clickOnElement(
      givenButton
    );
    await browser.pause(3000)
  });

  When(
    /^I click on "([^"]*)" access level for resource "([^"]*)" delete button$/,
    async (givenElement, givenSelectedResource) => {
      await permissionsPageElements.accessLevelDeleteButton.clickOnElement(
        givenSelectedResource
      );
    }
  );

  When(
    /^I click on delete button in the delete content access pop up$/,
    async () => {
      await permissionsPageElements.deleteContentAccessDeleteButton.clickOnElement();
    }
  );

  When(
    /^I click on "([^"]*)" button to add a permissions Scheme$/,
    async (givenAccessLevelButton) => {
      await permissionsPageElements.createAndManageAccessLevelsButton.clickOnElement(
        givenAccessLevelButton
      );
    }
  );

  When(
    /^I click on "([^"]*)" button to add a Custom Permission Scheme$/,
    async (givenAddPermiissionButton) => {
      await permissionsPageElements.addPermissionSchemeButton.clickOnElement();
    }
  );

  When(
    /^I enter "([^"]*)" and "([^"]*)" in their input fields$/,
    async (givenInputFiled, givenTextArea) => {
      await permissionsPageElements.customePermissionSchemeInputPlaceHolder.isVisible();
      await webdriverIOReferences.setValueInTextField(
        await permissionsPageElements.customePermissionSchemeInputPlaceHolder.get(),
        commonMethods.Custom_Permissions_Scheme_Name
      );
      await permissionsPageElements.permissionSchemeDescriptionTextArea.isVisible();
      await webdriverIOReferences.setValueInTextField(
        await permissionsPageElements.permissionSchemeDescriptionTextArea.get(),
        commonMethods.Custom_Permissions_Scheme_Descriprtion
      );
    }
  );

  When(
    /^I click on "([^"]*)" button to add the permission scheme.$/,
    async (givenAddButton) => {
      await permissionsPageElements.addPermissionsSchemeModelBoxAddButton.clickOnElement();
    }
  );

  When(
    /^I delete the Permission the "([^"]*)" permission scheme$/,
    async (givenPermissionSchemeDeleteButton) => {
      await permissionsPageElements.permissionSchmeDeleteButton.clickOnElement(
        givenPermissionSchemeDeleteButton
      );
    }
  );

  When(
    /^I click on the selcted "([^"]*)" category$/,
    async (givenCategoryName) => {
      await webdriverIOReferences.scrollElementIntoView(await allUsersPermissionsPageElements.categoryName.get( givenCategoryName))
    await browser.waitUntil(async function () {
      return await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.categoryName.get(givenCategoryName)) === true;
    }, {timeout: 20000, timeoutMsg: 'Category is not displayed!!!'}) 
      await allUsersPermissionsPageElements.categoryName.clickOnElement(
        givenCategoryName
      );
    }
  );

  When(
    /^I verify "([^"]*)" permission by accessing the article "([^"]*)" in the list$/,
    async (givenArticlePermission, givenArticleTitle) => {
      // await managerUserPermissionsPageElements.articleInTheListView.isVisible(givenArticleTitle)
      await allUsersPermissionsPageElements.articleInTheListView.clickOnElement(
        givenArticleTitle
      );
    }
  );

  When(
    /^I verify "([^"]*)" permission by I clicking on "([^"]*)" button to create an Article$/,
    async (givenArticlePermission, givenArticleButton) => {
      await createArticlePageElements.createArticleButton.clickOnElement(
        givenArticleButton
      );
    }
  );

  When(/^I add tags to the article$/, async () => {
    await createArticlePageElements.addTagsButton.clickOnElement();
    await webdriverIOReferences.setValueInTextField(
      await createArticlePageElements.enterTagsInputPlaceHolder.get(),
      commonMethods.Tags
    );
    await createArticlePageElements.addTagsSubmitButton.clickOnElement();
  });

  When(/^delete the selected tag name$/, async () => {
    await createArticlePageElements.addedTagNames.isVisible()
    await webdriverIOReferences.moveToElement(
      await createArticlePageElements.tagNameToDelete.get()
    );
    await createArticlePageElements.deleteTagButtton.clickOnElement();
  });

  When(
    /^I verify "([^"]*)" permission by accessing the Category "([^"]*)" in the list$/,
    async (givenCategoryPermission, givenCategoryName) => {
      await allUsersPermissionsPageElements.categoryName.clickOnElement(
        givenCategoryName
      );
    }
  );

  When(
    /^I verify the unchecked permission "([^"]*)" by attempting to delete the "([^"]*)" category$/,
    async (givenCategoryPermission, givenCategoryName) => {
      await homePageElements.categoryDeleteButton.clickOnElement(
        givenCategoryName
      );
      await homePageElements.modalBoxDeleteButton.clickOnElement();
    }
  );



  When(
    /^I verify the unchecked permission "([^"]*)" by attempting to edit the "([^"]*)" category$/,
    async (givenCategoryPermission, givenCategoryName) => {
      await homePageElements.categoryEditButton.clickOnElement(
        givenCategoryName
      );
      await webdriverIOReferences.setValueInTextField(
        await homePageElements.editCategoryModelBoxNameInputField.get(),
        commonMethods.Edited_Category_Name
      );
      await homePageElements.editCategoryModalBoxSaveButton.clickOnElement();
    }
  );

  When(
    /^I verify "([^"]*)" permission by accessing the Section "([^"]*)" in the list$/,
    async (givenSectionPermission, givenSectionName) => {
      await homePageElements.sectionName.clickOnElement(givenSectionName);
    }
  );

  When(
    /^I verify the checked permission "([^"]*)" by attempting to edit the "([^"]*)" section$/,
    async (givenSectionPermission, givenSectionEditButton) => {
      await homePageElements.sectionNametoBeEdited.clickOnElement();
      const uniqueSectionName = `new bee 2 edited ${Date.now()}`;
      await webdriverIOReferences.setValueInTextField(
        await homePageElements.editSectionNameInputPlaceholder.get(),
        uniqueSectionName
      );
      await homePageElements.editSectionNameSaveButton.clickOnElement();
      global.uniqueSectionName = uniqueSectionName;
    }
  );

  When(
    /^I verify the checked permission "([^"]*)" by attempting to add the "([^"]*)" section$/,
    async (givenSectionPermission, givenSectionName) => {
      await homePageElements.pluseSymbolNextToCategoryName.clickOnElement();
      await webdriverIOReferences.setValueInTextField(
        await homePageElements.sectionNamePlaceHolder.get(),
        "new bee 4"
      );
      await homePageElements.addSectionNameButton.clickOnElement();
    }
  );

  When(
    /^I verify the unchecked permission "([^"]*)" by attempting to delete the "([^"]*)" section$/,
    async (givenSectionPermission, givenSectionDeleteButton) => {
      await homePageElements.deleteScetionButton.clickOnElement(
        givenSectionDeleteButton
      );
      await homePageElements.modalBoxDeleteButton.clickOnElement();
    }
  );


  When(/^I verify "([^"]*)" permission by using "([^"]*)" button and Mapping the article to "([^"]*)" category$/, async (givenSectionPermission, givenMappingButton, givenCategoryToMap) => {
    await webdriverIOReferences.maximizeBrowserWindow()
    const elementToView = await $("//span[@class='tag badge custom au-target' and @aria-label='Category: Category for author to Test']");
    await webdriverIOReferences.scrollElementIntoView(elementToView);
    await createArticlePageElements.catgoryNameToHoverOver.hoverOverOnElement(10, 10);
    const element = await createArticlePageElements.mappCategoryRemoveButton.get() //await $('//span[@aria-label="Category: Category for author to Test"]//i[@class="fa fa-times-circle"]'); 
    await element.waitForDisplayed({ timeout: 5000 });
    await element.waitForClickable({ timeout: 10000 });
    await element.click()
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.mapCategoriesDropDownButton.clickOnElement();
    await createArticlePageElements.selectCategoryFromDropDown.clickOnElement(givenCategoryToMap);
    await createArticlePageElements.mapArticleToTheCategorySubmitButton.clickOnElement();


  }
  );

  When(
    /^I open the article "([^"]*)" from the list view of articles$/,
    async (givenArticle) => {
      await createArticlePageElements.articleInTheListView.clickOnElement(
        givenArticle
      );
      await browser.pause(5000)
    }
  );



  When(/^verify "([^"]*)" permission by using "([^"]*)" button and Mapping the article to "([^"]*)" section$/, async (givenAccessLevel, givenMappingButton, givenSectionName) => {
    // await createArticlePageElements.sectionNameToHoverOver.hoverOverOnElement();
    await webdriverIOReferences.moveToElement(
      await createArticlePageElements.sectionNameToHoverOver.get()
    );
    await createArticlePageElements.mappSectionRemoveButton.clickOnElement();
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.sectionToAddDropDownButton.clickOnElement();
    await createArticlePageElements.sectionToAddfromDropDown.clickOnElement(givenSectionName);
    await createArticlePageElements.mapArticleToSectionSubmitButton.clickOnElement();


  });

  When(/^verify "([^"]*)" permission by using "([^"]*)" button and Mapping the article to article$/, async (givenPermissionScheme, givenMappingButton) => {
    await createArticlePageElements.mappedArticleListItem.hoverOverOnElement();
    await createArticlePageElements.mappArticleRemoveButton.clickOnElement();
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.relatedArticleSearcheField.typeInTheValueInTheTextField();
    await createArticlePageElements.relatedArticleSearchButton.clickOnElement();
    await createArticlePageElements.mapArticleCheckBox.clickOnElement()
    await createArticlePageElements.relatedArticleSubmitButton.clickOnElement();

  });


  When(/^verify checked permission "([^"]*)" permission by accessing the article "([^"]*)" in the list$/, async (givenPermissionScheme, givenArticle) => {
    await createArticlePageElements.articleInTheListView.clickOnElement(
      givenArticle
    );
    await createArticlePageElements.publishDateCalenderButton.clickOnElement();
    await webdriverIOReferences.setValueInTextField(createArticlePageElements.publishDateCalenderButton.get(), "May 30, 2024, 08:33 AM")
    await browser.pause(3000);
  });


  When(/^I verify "([^"]*)" checked permission by accessing the Section "([^"]*)" in the list$/, async (givenSectionPermission, givenSectionName) => {
    await homePageElements.agentUserSectionName.clickOnElement(givenSectionName);
  });


  When(/^I verify the unchecked permission "([^"]*)" by attempting to edit the "([^"]*)" section$/, async (givenSectionPermission, givenSectionEditButton) => {
    await homePageElements.agentUserSectionToBeEditButton.clickOnElement();
    const uniqueSectionName = `child 2 edited ${Date.now()}`;
    await webdriverIOReferences.setValueInTextField(
      await homePageElements.editSectionNameInputPlaceholder.get(),
      uniqueSectionName
    );
    await homePageElements.editSectionNameSaveButton.clickOnElement();
    global.uniqueSectionName = uniqueSectionName;
  }
  );


  When(/^I verify the unchecked permission "([^"]*)" by attempting to add the new "([^"]*)" section$/, async (givenSectionPermission, givenSectionName) => {
    await homePageElements.pluseSymboleNextToCategoryNameInAgentUser.clickOnElement();
    await webdriverIOReferences.setValueInTextField(
      await homePageElements.sectionNamePlaceHolder.get(),
      "child 9"
    );
    await homePageElements.addSectionNameButton.clickOnElement();
  }
  );


  When(/^verify the unchecked permission "([^"]*)" by attempting to delete the "([^"]*)" section$/, async (givenSectionPermission, givenSectionName) => {
    await homePageElements.sectionNameInAgentUserDeleteButton.clickOnElement();
    await homePageElements.modalBoxDeleteButton.clickOnElement();
  }
  );

  When(/^Opening the same edited article "([^"]*)" then content in the CK:editor displays normal paragraph$/, async (givenArticleTitle) => {
    await allUsersPermissionsPageElements.articleInTheListView.clickOnElement(
      givenArticleTitle
    );
    const editorContent = await webdriverIOReferences.elementGetText(await createArticlePageElements.ckEditorTextArea.get());
    expect(editorContent).to.not.equal('Header 5')
  });

  When(/^As a Agent user I edit the article by changing it to "([^"]*)"$/, async (givenHeader) => {
    await createArticlePageElements.headingElementDropDownButton.clickOnElement()
    await createArticlePageElements.selectingHeaderFromDropDown.clickOnElement(givenHeader)
  });

  When(/^Opening the same edited article "([^"]*)"$/, async (givenArticleTitle) => {
    await allUsersPermissionsPageElements.articleInTheListView.clickOnElement(
      givenArticleTitle
    );
  });

  When(/^delete the selected tag name with in the article$/, async () => {
    await webdriverIOReferences.moveToElement(
      await createArticlePageElements.tagNametoHoverOver.get()
    );
    await createArticlePageElements.tagToBeDeletedByAgent.clickOnElement();
  });

  When(/^verify unchecked permisssion "([^"]*)" permission by attempting to delete the "([^"]*)" article in the list$/, async (givenPermissionScheme, givenArticleTitle) => {
    await createArticlePageElements.articleDeleteButton.clickOnElement();
    await createArticlePageElements.deleteButtonInModalBox.clickOnElement();
  });

  When(/^verify unchecked permisssion "([^"]*)" permission by attempting to delete the content in the article editor$/, async (givenAccessLevel) => {
    const content = await webdriverIOReferences.elementGetText(await createArticlePageElements.ckEditorTextArea.get());
    await webdriverIOReferences.doubleClickOnTheElement(await createArticlePageElements.ckEditorTextArea.get())
    await browser.keys(['Control', 'a']);
    await browser.keys('Backspace');
    await webdriverIOReferences.setValueInTextField(await createArticlePageElements.ckEditorTextArea.get(), '');
    global.originalContent = content
  });

  When(/^verify unchecked permisssion "([^"]*)" permission by attempting to adding the content in the article editor$/, async (givenAccessLevel) => {
    const content = await webdriverIOReferences.elementGetText(await createArticlePageElements.ckEditorTextArea.get())
    await createArticlePageElements.ckEditorTextArea.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await createArticlePageElements.ckEditorTextArea.get(), commonMethods.Content_Edit_In_The_CKEditor_By_Agent);
    global.originalContent = content
  });


  When(/^I verify "([^"]*)" unchecked agent permission by using "([^"]*)" button and Mapping the article to "([^"]*)" category$/, async (givenAccessLevel, givenMappingButton, givenCategoryToMap) => {

    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.mapCategoriesDropDownButton.clickOnElement();
    await createArticlePageElements.selectCategoryForAgentFromDropDown.clickOnElement(givenCategoryToMap);
    await createArticlePageElements.mapArticleToTheCategorySubmitButton.clickOnElement();


  });

  When(/^verify "([^"]*)" unchecked permission by using "([^"]*)" button and Mapping the article to "([^"]*)" section$/, async (givenAccessLevel, givenMappingButton, givenSectionName) => {
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.sectionToAddDropDownButton.clickOnElement();
    await createArticlePageElements.sectionToAddfromDropDown.clickOnElement(givenSectionName);
    await createArticlePageElements.mapArticleToSectionSubmitButton.clickOnElement();

  });


  When(/^navigating to the folders menu item$/, async () => {
    await folderPageElements.foldersMenuItem.clickOnElement()
    await browser.pause(4000);
  });

  When(/^clicking on "([^"]*)" to create a folder$/, async (givenCreateFolderButton) => {
    await folderPageElements.createFolderButton.clickOnElement(givenCreateFolderButton)
    await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), "Test 4");
    await folderPageElements.newDirectoryModalBoxCreateButton.clickOnElement()
  });

  When(/^selecting the folder "([^"]*)" and Rename it as "([^"]*)"$/, async (givenFolderName, givenNewFolderName) => {
    await folderPageElements.createdFolderName.clickOnElement(givenFolderName)
    await folderPageElements.folderRenameButton.clickOnElement()
    await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), "Testilo 4");
    await folderPageElements.folderModalBoxRenameSaveButton.clickOnElement()
  });

  When(/^selecting the folder "([^"]*)" and delete it$/, async (givenFolderName) => {
    await folderPageElements.createdFolderName.clickOnElement(givenFolderName)
    await folderPageElements.folderDeleteButton.clickOnElement()
    await folderPageElements.folderModalBoxDeleteButton.clickOnElement()
    await browser.pause(3000);
  });

  When(/^clicking on "([^"]*)" to create a Main folder "([^"]*)"$/, async (givenCreateFolderButton, givenNewFolderName) => {
    await folderPageElements.createFolderButton.clickOnElement(givenCreateFolderButton)
    await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), "Test Folder");
    await folderPageElements.newDirectoryModalBoxCreateButton.clickOnElement()
    await browser.pause(2000)
  });


  When(/^clicking on "([^"]*)" to create a subfolders under main "([^"]*)"$/, async (givenCreateFolderButton, givenFolderName) => {
    await webdriverIOReferences.doubleClickOnTheElement(await folderPageElements.createdFolderName.get(givenFolderName))
    for (let i = 1; i <= 3; i++) {
      const subFolderName = `subtest ${i}`;
      await folderPageElements.createFolderButton.clickOnElement(givenCreateFolderButton)
      await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
      await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), subFolderName);
      await folderPageElements.newDirectoryModalBoxCreateButton.clickOnElement()
      await browser.pause(2000)
    }
  });



  When(/^I click on Select Folders dropdown and select "([^"]*)"$/, async (givenElementFromDropDown) => {
    await permissionsPageElements.selectFoldersDropDownButton.clickOnElement();
    await permissionsPageElements.mulitiSelectDropDownForAllRequiredElements.clickOnElement(
      givenElementFromDropDown
    );
    await permissionsPageElements.selectFoldersDropDownButton.clickOnElement();
  });

  When(/^Clicking on Select Users or Groups dropdown filter and select "([^"]*)"$/, async (givenUserName) => {
    await permissionsPageElements.selectUserGroupFilterDropDownButton.clickOnElement()
    await permissionsPageElements.filterUsersFromDropDown.clickOnElement(givenUserName)
  });

  When(/^Cliking on Select Resource Type drop-down filter and select "([^"]*)"$/, async (givenResourceTypeFilter) => {
    await permissionsPageElements.selectResourceTypeFilterDropdownButton.clickOnElement()
    await permissionsPageElements.selectResourceTypeFilterFromDropdown.clickOnElement(givenResourceTypeFilter)
  });

  When(/^Verify checked permission "([^"]*)" by accessing the folder "([^"]*)"$/, async (givenAccessLevel, givenFolderName) => {
    await webdriverIOReferences.doubleClickOnTheElement(await folderPageElements.createdFolderName.get(givenFolderName))

  });


  When(/^Verify checked permission "([^"]*)" and add a folder under "([^"]*)" by selecting "([^"]*)"$/, async (givenAccessLevel, givenFolderName, givenCreateFolderButton) => {
    await webdriverIOReferences.doubleClickOnTheElement(await folderPageElements.createdFolderName.get(givenFolderName))
    await folderPageElements.createFolderButton.clickOnElement(givenCreateFolderButton)
    await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), "SubTest 1");
    await folderPageElements.newDirectoryModalBoxCreateButton.clickOnElement()
    await browser.pause(2000)
  });


  When(/^Verify checked permission "([^"]*)" by selecting the folder "([^"]*)" and Rename it$/, async (givenAccessLevel, givenFolderName) => {
    await webdriverIOReferences.rightClickOnTheElement(await folderPageElements.editedFolderName.get())
    await folderPageElements.renameOptionFromRightClickOnFolderName.clickOnElement()
    const newFolderName = `New Test edited ${Date.now()}`;
    await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), newFolderName);
    await folderPageElements.folderModalBoxRenameSaveButton.clickOnElement()
    this.newFolderName = newFolderName;
    await browser.pause(2000)
  });



  When(/^Verify unchecked permission "([^"]*)" by selecting the folder "([^"]*)" and Rename it$/, async (givenAccessLevel, givenFolderName) => {
    await webdriverIOReferences.rightClickOnTheElement(await folderPageElements.createdFolderName.get(givenFolderName))
    await folderPageElements.renameOptionFromRightClickOnFolderName.clickOnElement()
    const newFolderName = `New Test edited ${Date.now()}`;
    await folderPageElements.newFolderTextBox.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await folderPageElements.newFolderTextBox.get(), newFolderName);
    await folderPageElements.folderModalBoxRenameSaveButton.clickOnElement()
    this.newFolderName = newFolderName;
    await browser.pause(2000)
  });


  When(/^verifying "([^"]*)" permission by deleting the language article$/, async (givenAccessLevel) => {
    await createArticlePageElements.changeLanguageButton.clickOnElement()
    await createArticlePageElements.articleDeleteButton.clickOnElement()
    await createArticlePageElements.languageVersionDeleteButton.clickOnElement()
  });


  When(/^I delete the added Norwegian language article$/, async () => {
    await browser.waitUntil(async function () {
      const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.changeLanguageButton.get());
      return isDisplayed;
        }, {timeout: 30000, timeoutMsg: 'Change language Button is not displayed!!!'}) 
    await createArticlePageElements.changeLanguageButton.clickOnElement()
    await createArticlePageElements.articleDeleteButton.clickOnElement()
    await createArticlePageElements.languageVersionDeleteButton.clickOnElement()

  });


  When(/^verify checked permisssion "([^"]*)" permission for the article"([^"]*)" and change the Article Status to "([^"]*)" from the dropdown$/, async (givenAccessLevel, givenArticleTitle, articleStatusValue) => {
    await allUsersPermissionsPageElements.articleInTheListView.clickOnElement(givenArticleTitle)
    await createArticlePageElements.statusDropDownButton.clickOnElement();

    const currentStatus = await webdriverIOReferences.elementGetText(await createArticlePageElements.statusDropDownButton.get())
    if (currentStatus !== articleStatusValue) {
      const intermediateStatus = currentStatus === "PUBLISHED" ? "DRAFT" : "REVIEW";
      await createArticlePageElements.selectStatusFromDropDown.clickOnElement(intermediateStatus); // or 'Review'
      await webdriverIOReferences.clickOnTheElement(await createArticlePageElements.articleCreationSaveButton.get());
      await createArticlePageElements.addCommentInTextArea.isVisible()
      await webdriverIOReferences.setValueInTextField(
        await createArticlePageElements.addCommentInTextArea.get(),
        commonMethods.Comment_In_Textarea);
      await createArticlePageElements.addCommentAndSveArticleButton.clickOnElement();
      await allUsersPermissionsPageElements.articleInTheListView.clickOnElement(givenArticleTitle)
      await browser.pause(2000)
      await createArticlePageElements.statusDropDownButton.clickOnElement();
      await createArticlePageElements.selectStatusFromDropDown.clickOnElement(articleStatusValue)
      await webdriverIOReferences.clickOnTheElement(await createArticlePageElements.articleCreationSaveButton.get());
      await createArticlePageElements.addCommentInTextArea.isVisible()
      await webdriverIOReferences.setValueInTextField(
        await createArticlePageElements.addCommentInTextArea.get(),
        commonMethods.Comment_In_Textarea);
      await createArticlePageElements.addCommentAndSveArticleButton.clickOnElement();
    }
  });

  When(/^verify checked permission "([^"]*)" by attaching a file from "([^"]*)" folder$/, async (givenAccessLevel, givenFolderName) => {
    await createArticlePageElements.attachFileButton.clickOnElement()
    await webdriverIOReferences.doubleClickOnTheElement(await folderPageElements.createdFolderName.get(givenFolderName))
    await folderPageElements.fileNameThatToBeAttached.clickOnElement()
    await folderPageElements.attachFilesButton.clickOnElement()

  });

  When(/^verify checked permission "([^"]*)" by deleting the attachment$/, async (givenAccessLevel) => {
    await webdriverIOReferences.moveToElement(await createArticlePageElements.attachedFileName.get());
    await createArticlePageElements.attachedFileRemoveButton.clickOnElement();
    await browser.pause(5000)
  });




  When(/^I verify "([^"]*)" manager user permission by using "([^"]*)" button and Mapping the article to "([^"]*)" category$/, async (givenAccessLevel, givenMappingButton, givenCategoryToMap) => {
    await webdriverIOReferences.maximizeBrowserWindow()
    await createArticlePageElements.catgoryNameToHoverOverForManagerUser.hoverOverOnElement(10, 10);
    const element = await createArticlePageElements.mappedCategoryRemoveButttonForManagerUser.get() //await $('//span[@aria-label="Category: Category for author to Test"]//i[@class="fa fa-times-circle"]'); 
    await element.waitForDisplayed({ timeout: 5000 });
    await element.waitForClickable({ timeout: 10000 });
    await element.click()
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.mapCategoriesDropDownButton.clickOnElement();
    await createArticlePageElements.selectCategoryFromDropDown.clickOnElement(givenCategoryToMap);
    await createArticlePageElements.mapArticleToTheCategorySubmitButton.clickOnElement();


  })

  When(/^verify "([^"]*)" manager user permission by using "([^"]*)" button and Mapping the article to "([^"]*)" section$/, async (givenAccessLevel, givenMappingButton, givenSectionName) => {
    await webdriverIOReferences.moveToElement(
      await createArticlePageElements.sectionNameToHoverOverforManagerUser.get()
    );
    await createArticlePageElements.mappSectionRemoveButtonForManagerUser.clickOnElement();
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await createArticlePageElements.sectionToAddDropDownButton.clickOnElement();
    await createArticlePageElements.sectionToAddfromDropDown.clickOnElement(givenSectionName);
    await createArticlePageElements.mapArticleToSectionSubmitButton.clickOnElement();


  });



  When(/^verify "([^"]*)" manager user permission by using "([^"]*)" button and Mapping the "([^"]*)" to article$/, async (givenAccessLevel, givenMappingButton, givenArticleToBeChecked) => {
    await createArticlePageElements.mappedArticleListItemForManagerUser.hoverOverOnElement();
    await createArticlePageElements.mappArticleRemoveButtonForManagerUser.clickOnElement();
    await createArticlePageElements.mappingButton.clickOnElement(
      givenMappingButton
    );
    await webdriverIOReferences.setValueInTextField(await createArticlePageElements.relatedArticleSearcheField.get(), 'test');
    await createArticlePageElements.relatedArticleSearchButton.clickOnElement();
    await createArticlePageElements.mapArticleCheckBoxforManagerUser.clickOnElement()
    await createArticlePageElements.relatedArticleSubmitButton.clickOnElement();

  });



  When(/^I verify the checked permission "([^"]*)" by attempting to edit the Manager Test category$/, async (givenAccessLevel) => {
    const editButtonXPath = "//li[@class='category']//span[contains(text(), 'Manager Test edited')]//following::button[contains(@class, 'edit-category')][1]";
    const editButtonElement = await webdriverIOReferences.findElement(editButtonXPath);
    await webdriverIOReferences.elementWaitForExist(editButtonElement, { timeout: 10000 });
    await webdriverIOReferences.elementWaitForVisible(editButtonElement, { timeout: 10000 });
    await webdriverIOReferences.clickOnTheElement(editButtonElement);
    const uniqueCategoryName = `Manager Test edited ${Date.now()}`;
    await webdriverIOReferences.setValueInTextField(
      await homePageElements.editCategoryModelBoxNameInputField.get(), uniqueCategoryName);
    await homePageElements.editCategoryModalBoxSaveButton.clickOnElement();
    global.uniqueCategoryName = uniqueCategoryName;

  });

  When(/^verifying the checked permission "([^"]*)" by attempting to edit the "([^"]*)" section$/, async (givenAccessLevel, givenSectionName) => {
    const editButtonXPath = "//li[contains(@class, 'section')]//span[contains(text(), 'Section 3')]//following-sibling::div[@class='actions sections au-target']//button[contains(@title, 'Edit')]";
    const editButtonElement = await webdriverIOReferences.findElement(editButtonXPath);
    await webdriverIOReferences.elementWaitForExist(editButtonElement, { timeout: 10000 });
    await webdriverIOReferences.elementWaitForVisible(editButtonElement, { timeout: 10000 });
    await webdriverIOReferences.clickOnTheElement(editButtonElement);
    const uniqueSectionName = `Section 3 edited ${Date.now()}`;
    await webdriverIOReferences.setValueInTextField(
      await homePageElements.editSectionNameInputPlaceholder.get(),
      uniqueSectionName
    );
    await homePageElements.editSectionNameSaveButton.clickOnElement();
    global.uniqueSectionName = uniqueSectionName;
  }
  );

  When(/^verifying "([^"]*)" permission by accessing the Section "([^"]*)" in the list$/, async (givenAccessLevel, givenSectionNameForManagerUser) => {
    await homePageElements.sectionNameForManagerUser.clickOnElement(givenSectionNameForManagerUser);

  });





  When(/^I set the expiry date and time to "([^"]*)" "([^"]*)" "([^"]*)" from calander$/, async (givenMonth, givenDate, givenYear) => {

    await browser.$("//date-time-picker[@view-model.ref='expiryDateRef']//input[@type='text']").click();
    await createArticlePageElements.selectMonthButton.clickOnElement()
    await createArticlePageElements.selectYearButton.clickOnElement()
    await createArticlePageElements.selectYearFromCalander.clickOnElement(givenYear)
    await createArticlePageElements.selectMonthFromCalander.clickOnElement(givenMonth)
    await createArticlePageElements.selectDateFromCalendar.clickOnElement(givenDate)
    await createArticlePageElements.ckEditorTextArea.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await createArticlePageElements.ckEditorTextArea.get(), commonMethods.Content_Edit_In_The_CKEditor_By_Agent);

  });

    

	


  When(/^I set the Expired date and time to "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" from calander$/, async(givenMonth, givenDate, givenYear, givenHours, givenMinutes,) => {
  

    await browser.$("//date-time-picker[@view-model.ref='expiryDateRef']//input[@type='text']").click();
    await createArticlePageElements.selectMonthButton.clickOnElement()
    await createArticlePageElements.selectYearButton.clickOnElement()
    await createArticlePageElements.selectYearFromCalander.clickOnElement(givenYear)
    await createArticlePageElements.selectMonthFromCalander.clickOnElement(givenMonth)
    await createArticlePageElements.selectDateFromCalendar.clickOnElement(givenDate)
    await createArticlePageElements.pickMinutesButton.clickOnElement()
    await createArticlePageElements.pickSpecificMinute.clickOnElement(givenMinutes)
    await createArticlePageElements.pickHourButton.clickOnElement()
    await createArticlePageElements.pickSpecificHour.clickOnElement(givenHours)
    await browser.pause(2000)
   

    await createArticlePageElements.ckEditorTextArea.typeInTheValueInTheTextField()
    await webdriverIOReferences.setValueInTextField(await createArticlePageElements.ckEditorTextArea.get(), commonMethods.Content_Edit_In_The_CKEditor_By_Agent);
  });


  When(/^I click on "([^"]*)" from inbox menu item$/, async (givenMenuFolder) => {
    await inboxPageElements.inboxPageMenuItems.clickOnElement(givenMenuFolder)

  });


  When(/^I delete the "([^"]*)" from the category list view$/, async (givenCategoryName) => {
    await homePageElements.categoryDeleteButton.clickOnElement(
      givenCategoryName
    );
    await homePageElements.modalBoxDeleteButton.clickOnElement();
  }
  );


 
When(/^I switch to Knowledgebase Widget in Agent Application$/, async() => {
	  await agentPageElements.selectApplicationsbutton.clickOnElement()
    await agentPageElements.switchingUserApplications.clickOnElement()
    
    await browser.waitUntil(async function () {
        return await webdriverIOReferences.elementIsDisplayed(await agentPageElements.iconTab.get()) === true;
      }, {timeout: 30000, timeoutMsg: 'Agent icon tab is not displayed!!!'}) 
    await agentPageElements.iconTab.clickOnElement()
    await agentPageElements.knowledgeBaseWidget.clickOnElement()
    await agentPageElements.iframeLocator.switchingToIframe()

  });
  


  When(/^open the selected category "([^"]*)" in widget$/, async (givenCategoryNameInWidget) => {
    await webdriverIOReferences.scrollElementIntoView(await agentPageElements.catgoryNameInWidget.get(givenCategoryNameInWidget))
    await browser.waitUntil(async function () {
      return await webdriverIOReferences.elementIsDisplayed(await agentPageElements.catgoryNameInWidget.get(givenCategoryNameInWidget)) === true;
    }, {timeout: 20000, timeoutMsg: 'Category is not displayed!!!'}) 
    await agentPageElements.catgoryNameInWidget.clickOnElement(givenCategoryNameInWidget)
  });


  When(/^I Verify the latest Announcement banner have a Title and snippet of content in widget Application$/, async () => {
    const announcementTitleInTheAdmin = commonMethods.Announcement_Article_Title;
    await webdriverIOReferences.elementIsDisplayed(await agentPageElements.bannerTitle.get())
    const announcementTitleInWidget = await webdriverIOReferences.elementGetText(await agentPageElements.bannerTitle.get())
    expect(announcementTitleInWidget).to.equal(announcementTitleInTheAdmin.toUpperCase())
    isSnippetOfContentDisplayed = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.bannerSnippet.get())
    expect(isSnippetOfContentDisplayed).to.equal(true)
  });


  When(/^I open the Announcement from banner$/, async () => {
    await agentPageElements.bannerReadMoreButton.clickOnElement()
  });


  When(/^I click on notifications symbol to verify "([^"]*)" is displayed$/, async (givenTypeOfArticle) => {
    await agentPageElements.notificationsBell.clickOnElement()
    await agentPageElements.announcementHornSymbol.isVisible()
    await agentPageElements.newsOrAnnouncementInNotificationsList.clickOnElement(givenTypeOfArticle)


  });

  When(/^I click on notifications symbol to verify "([^"]*)" and News Icon is displayed$/, async (givenTypeOfArticle) => {
    await agentPageElements.notificationsBell.clickOnElement()
    await agentPageElements.newsIconSymbol.isVisible()
    await agentPageElements.newsOrAnnouncementInNotificationsList.clickOnElement(givenTypeOfArticle)
  });

  When(/^Open the article "([^"]*)" from the list$/, async (givenArticleTitle) => {
    await agentPageElements.articleTitleToValidate.clickOnElement(givenArticleTitle)
  });

  When(/^I click on "([^"]*)" section in the Widget$/, async (givenSectionInWidgte) => {
    await agentPageElements.sectionNameInWidget.clickOnElement(givenSectionInWidgte)
  });





});
