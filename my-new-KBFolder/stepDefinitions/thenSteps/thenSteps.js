const { Then } = require('@cucumber/cucumber');
const homePageElements = require('./../../businessLogic/homePage/homePageElements')
const createArticlePageElements = require("../../businessLogic/createArticlePage/createArticlePageElements");
const commonMethods = require("../../utilities/commonMethods");
const webdriverIOReferences = require('@puzzel/wdio-references-async');
const audienceGroupsPageElements = require('../../businessLogic/audienceGroupsPage/audienceGroupsPageElements');
const allUsersPermissionsPageElements = require("../../businessLogic/permissionsPage/allUsersPermissionsPageElements");
const articleListViewPageElements = require('../../businessLogic/articleListViewPage/articleListViewPageElements');
const permissionsPageElements = require("../../businessLogic/permissionsPage/permissionsPageElements");
const folderPageElements = require('../../businessLogic/foldersPage/foldersPageElements');
const inboxPageElements = require('../../businessLogic/inboxPage/inboxPageElements');
const agentPageElements = require('../../businessLogic/agentPage/agentPageElements');
const puzzelHomePageElements = require('../../businessLogic/puzzelHomePage/puzzelHomePageElements')
import('chai').then(chai => {
    const assert = chai.assert;
    const expect = chai.expect;

    Then(/^the Knowledgebase Banner is displayed$/, async() => {
        await browser.waitUntil(async () => {
            return await homePageElements.knowledgeBaseBanner.isVisible();
        }, {timeout: 30000, timeoutMsg: 'KB Banner is not displayed!!!'}) 
     
         await homePageElements.knowledgeBaseBanner.getTheText()
    });
    
   

    Then(/^The "([^"]*)" field is displayed$/, async (givenCategory) => {
        const isItVisible = await homePageElements.addCategory.isVisible(givenCategory)
        console.log('Is Add Category field visible?', isItVisible);
        await homePageElements.addCategory.getTheText(givenCategory)

    });

    Then(/^I click on "([^"]*)" article type$/, async (articleCreationType) => {
        await homePageElements.createArticleType.clickOnElement(articleCreationType)
        await browser.pause(3000);


    });


    Then(/^add category model box is displayed$/, async () => {
        await homePageElements.categoryModalBoxTitle.isVisible()
        await homePageElements.categoryModalBoxTitle.getTheText()

    });


    Then(/^the category is displayed in the list view of categories$/, async () => {
        const isItVisible = await homePageElements.createdCategoryName.isVisible()
        expect(isItVisible).to.equal(true);
    });


    Then(/^the articles editor view is displayed$/, async () => {
        await browser.waitUntil(async () => {
            return await createArticlePageElements.editTextEditorButton.isVisible();

        },
            {
                timeout: 5000,
                timeoutMsg: 'The articles editor view did not display in time'
            });
        const isItVisible = await createArticlePageElements.editTextEditorButton.isVisible()
        expect(isItVisible).to.equal(true);
    });


    Then(/^the "([^"]*)" button is enabled$/, async (givenOption) => {
        const isEnabled = await createArticlePageElements.articleCreationSaveButton.isEnabled()


    });



    Then(/^I create sub sections with in section$/, async () => {
        for (let i = 1; i <= 3; i++) {
            const subSectionName = `subsection ${i}`;
            await homePageElements.sectionPluseButton.clickOnElement();
            expect(await homePageElements.sectionModalBoxTitle.isVisible()).to.be.true;
            await homePageElements.sectionNamePlaceHolder.typeInTheValueInTheTextField(subSectionName);
            await homePageElements.addSectionNameButton.clickOnElement()
        }
    });


    Then(/^the created top article have appered in the top articles list$/, async () => {
        const articleTitle = commonMethods.Top_Article_Title;
        const isItVisible = await createArticlePageElements.articleTitleInListView.isVisible()
        expect(isItVisible).to.equal(true);
        const displayedTitle = await webdriverIOReferences.elementGetText(
            await createArticlePageElements.articleTitleInListView.get())
        expect(displayedTitle).to.equal(articleTitle);


    });


    Then(/^the article is created and navigated back to the list view of articles$/, async () => {
        await browser.waitUntil(
            async () => {
                return await createArticlePageElements.articlesInListView.isVisible();
            },
            {
                timeout: 5000,
                timeoutMsg: 'The articles list view did not display in time'
            }
        );
        const isItVisible = await createArticlePageElements.articlesInListView.isVisible()
        expect(isItVisible).to.equal(true);
    });


    Then(/^the article "([^"]*)" is Deleted in the list view of articles$/, async (givenArticle) => {
        const isItVisible = await createArticlePageElements.articleInTheListView.isVisible(givenArticle)
        expect(isItVisible === undefined || isItVisible === false).to.be.true;

    });

    Then(/^The choosen language is flag is displayed with content editor$/, async () => {
        const isItVisible = await createArticlePageElements.languageFlag.isVisible()
        expect(isItVisible).to.equal(true);
    });

    Then(/^the "([^"]*)" in the text area to the current version$/, async (givenTextArea) => {
        await browser.waitUntil(async function () {
            return await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.addCommentInTextArea.get()) === true;
        }, {timeout: 20000, timeoutMsg: 'Comment text area is not displayed!!!'})
        await webdriverIOReferences.setValueInTextField(
            await createArticlePageElements.addCommentInTextArea.get(),
            commonMethods.Comment_In_Textarea);

    });


    Then(/^Add the comment and save article button is enabled and click on "([^"]*)" button$/, async (givenButton) => {
        const elementIsEnabled = await createArticlePageElements.addCommentAndSveArticleButton.elementIsEnabled()
        await createArticlePageElements.addCommentAndSveArticleButton.clickOnElement();
    });

    Then(/^The Add alternative View model box is displayed$/, async () => {
        const isItVisible = await audienceGroupsPageElements.addAlternativeViewModelBoxElement.isVisible()
        expect(isItVisible).to.equal(true);
        await audienceGroupsPageElements.addAlternativeViewModelBoxElement.getTheText()

    });

    Then(/^the "([^"]*)" view checkbox is selected$/, async (givenAudienceView) => {
        switch (givenAudienceView) {
            case 'Agent':
                break;
            case 'Mobile':
                break;
            default:
                throw new Error(`Invalid checkbox option: ${givenAudienceView}`);
        }
        const isChecked = await audienceGroupsPageElements.alternativeViewsCheckBoxes.isItSelected(givenAudienceView);
        expect(isChecked === undefined || isChecked === true).to.be.true;
    });

    Then(/^The "([^"]*)" view is added next to the Default view$/, async (givenAddedView) => {
        const isItVisible = await audienceGroupsPageElements.addedAlternativeViews.isVisible(givenAddedView)
        expect(isItVisible).to.equal(true);
        await audienceGroupsPageElements.addedAlternativeViews.getTheText(givenAddedView)
    });

    Then(/^the "([^"]*)" tab is displayed$/, async (givenTabs) => {
        const isItVisible = await audienceGroupsPageElements.settingsPageTabs.isVisible(givenTabs)
        expect(isItVisible).to.equal(true);
        await audienceGroupsPageElements.settingsPageTabs.getTheText(givenTabs)
    });




    Then(/^the audience "([^"]*)" view is created successfully with include styling ON$/, async (givenAudienceView,) => {
        const isItVisible = await audienceGroupsPageElements.audienceTableInSettingsTab.isVisible(givenAudienceView)
        expect(isItVisible).to.equal(true);
        const isInlineStylingOn = await audienceGroupsPageElements.inlineStylingStatusButtonON.isItDisplayed()
        expect(isInlineStylingOn).to.equal(true, `Expected inline styling to be On for audience Customer1`);
    });




    Then(/^the audience "([^"]*)" view is created successfully with include styling OFF$/, async (givenAudienceView) => {
        const isItVisible = await audienceGroupsPageElements.audienceTableInSettingsTab.isVisible(givenAudienceView)
        expect(isItVisible).to.equal(true);
        const isInlineStylingOFF = await audienceGroupsPageElements.inlineStylingStatusButtonOFF.isItDisplayed()
        expect(isInlineStylingOFF).to.equal(true, `Expected inline styling to be Off for audience Customer2`);

    });

    Then(/^The "([^"]*)" audience is removed from the audience group table$/, async (givenAudienceView) => {
        const isAudiencePresent = await webdriverIOReferences.elementIsExisting(await audienceGroupsPageElements.audienceTableInSettingsTab.get(givenAudienceView));
        if (!isAudiencePresent) {
            console.log(`The "${givenAudienceView}" audience is removed from the audience group table`);
        } else {
            throw new Error(`The "${givenAudienceView}" audience is still present in the audience group table`);
        }
    });

    Then(/^the audience "([^"]*)" view is created successfully$/, async (givenAudienceView) => {
        const isItVisible = await audienceGroupsPageElements.audienceTableInSettingsTab.isVisible(givenAudienceView)
        expect(isItVisible).to.equal(true);
    });


    Then(/^the article is created in Draft state$/, async () => {
        const isItVisible = await articleListViewPageElements.articleInDraftState.isVisible();
        expect(isItVisible).to.equal(true);
        await articleListViewPageElements.articleInDraftState.getTheText();
    });


    Then(/^the article is created in Review state$/, async () => {
        const isItVisible = await articleListViewPageElements.articleInReviewState.isVisible();
        expect(isItVisible).to.equal(true);
        await articleListViewPageElements.articleInReviewState.getTheText();
    });


    Then(/^the article is created in Published state$/, async () => {
        const isItVisible = await articleListViewPageElements.articleInPublishedState.isVisible();
        expect(isItVisible).to.equal(true);
        await articleListViewPageElements.articleInPublishedState.getTheText();
    });


    Then(/^each article will display its status$/, async () => {
        const articles = await articleListViewPageElements.listViewOfArticles.get();
        for (const article of articles) {
            const status = await article.$(".article-right .article-status").getText();
            expect(status).to.not.be.empty;
            console.log(`Article status: ${status}`);
        }

    });


    Then(/^the article under Review state are displayed$/, async () => {
        const isItVisible =
      await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.articlesInListView.get())
    expect(isItVisible).to.equal(true);
    });

    Then(/^the "([^"]*)" version is displayed next to latest version$/, async (givenVersion) => {
        const isItVisible = await homePageElements.readOnlyModeVersion.isVisible();
        expect(isItVisible).to.equal(true);
        await homePageElements.readOnlyModeVersion.getTheText();
    });

    Then(/^I verify that the "([^"]*)" version is not editable$/, async (givenVersion) => {
        await homePageElements.readOnlyModeEditor.clickOnElement()
        const contentEditableValue = await webdriverIOReferences.elementGetAttribute(
            await homePageElements.readOnlyModeEditor.get(), 'contenteditable')
        expect(contentEditableValue).to.equal('false');
    });


    Then(/^the "([^"]*)" access level tab is displayed$/, async (givenAccessLevel) => {
        await permissionsPageElements.typeOfAccessLevel.clickOnElement(givenAccessLevel)
    });



    Then(/^the "([^"]*)" access level for Resource "([^"]*)" is created and redirect to list view of accesslevels$/, async (givenElement, givenSelectedResource) => {
        const isItVisible = await permissionsPageElements.accessLevelsInRows.isVisible(givenSelectedResource);
        expect(isItVisible).to.equal(true);

    });


    Then(/^the "([^"]*)" access level for resoucer "([^"]*)" is deleted$/, async (givenElement, givenSelectedResource) => {
        const isAccessLevel = await webdriverIOReferences.elementIsExisting(await permissionsPageElements.accessLevelsInRows.get(givenSelectedResource));
        if (!isAccessLevel) {
            console.log(`The "${givenSelectedResource}" access level is removed from the list of access levels`);
        } else {
            throw new Error(`The "${givenSelectedResource}" access level is still present in the list of access levels `);
        }

    });

    Then(/^The "([^"]*)" tab is displayed$/, async (givenElement) => {
        const isItVisible = await permissionsPageElements.permissionsSchemeElementInManagePermissionsSchemeTab.isVisible();
        expect(isItVisible).to.equal(true);
        await webdriverIOReferences.elementGetText(await permissionsPageElements.permissionsSchemeElementInManagePermissionsSchemeTab.get());

    });

    Then(/^the Add permission Scheme modal box is displayed$/, async () => {
        const isItVisible = await permissionsPageElements.addPermissionSchemeModelBox.isVisible();
        expect(isItVisible).to.equal(true);
        await webdriverIOReferences.elementGetText(await permissionsPageElements.addPermissionSchemeModelBox.get());
    });

    Then(/^the "([^"]*)" permissions Scheme is added to the list of permissions Schemes$/, async (givenPermissionScheme) => {
        const isItVisible = await permissionsPageElements.permissionSchemeInTheList.isVisible(givenPermissionScheme);
        expect(isItVisible).to.equal(true);

    });

    Then(/^the "([^"]*)" user Successfully accessed the article$/, async (givenUser) => {
        await webdriverIOReferences.elementWaitForExist(await createArticlePageElements.addTagsButton.get());
        await webdriverIOReferences.elementWaitForVisible(await createArticlePageElements.addTagsButton.get());
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.addTagsButton.get());
        expect(isItVisible).to.equal(true);
    });

    Then(/^As a manager user I can edit the article$/, async () => {
        await createArticlePageElements.ckEditorTextArea.typeInTheValueInTheTextField()
        await webdriverIOReferences.setValueInTextField(await createArticlePageElements.ckEditorTextArea.get(), commonMethods.Content_Edit_In_The_CKEditor);
    });


    Then(/^The article "([^"]*)" is created by a "([^"]*)" user$/, async (givenArticleTitle, givenUser) => {
        await browser.pause(5000);
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.articleInTheListView.get(givenArticleTitle))
        expect(isItVisible).to.equal(true);

    });

    Then(/^The tags are added by manager Successfully$/, async () => {
        const isItVisible = await createArticlePageElements.addedTagNames.isVisible()
        expect(isItVisible).to.equal(true);
    });

    Then(/^the list of Articles inside the category is displayed$/, async () => {
        const isItVisible = await createArticlePageElements.articlesInListView.isVisible()
        expect(isItVisible).to.equal(true);
    });

    Then(/^as per the unchecked permission, the category name "([^"]*)" should not display in the list view of categories$/, async (givenCategoryName) => {
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.categoryName.get(givenCategoryName))
        expect(isItVisible).to.equal(false);
    });

    Then(/^the "([^"]*)" is not allowed to delete the category, and "([^"]*)" is still displayed in the category list view$/, async (givenUser, givenCategoryName) => {
        const isCategoryDisplayed = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.categoryName.get(givenCategoryName))
        expect(isCategoryDisplayed).to.equal(true);

    });

    Then(/^the "([^"]*)" is not allowed to edit the category, and "([^"]*)" is still displayed with same category name$/, async (givenUser, givenCategoryName) => {
        const isCategoryNameEditable = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.categoryName.get(givenCategoryName))
        expect(isCategoryNameEditable).to.equal(true);

    });

    Then(/^the list of Articles inside the section is displayed$/, async () => {
        const isItVisible = await homePageElements.articleListViewUnderSections.isVisible()
        expect(isItVisible).to.equal(true);
    });


    Then(/^the "([^"]*)" is allowed to edit the section$/, async (givenUser) => {
        const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await homePageElements.updatedSectionName.get())
        expect(isDisplayed).to.equal(true);
    });

    Then(/^as per the unchecked permission, the section name "([^"]*)" should not display in the list view of sections$/, async (givenSectionName) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await homePageElements.sectionName.get(givenSectionName))
        expect(isItVisible).to.equal(false);
    });

    Then(/^the author is not allowed to delete the section, and "([^"]*)" is still displayed under the category list view of sections$/, async (givenSectionName) => {
        const isSectionDisplayed = await webdriverIOReferences.elementIsExisting(await homePageElements.sectionName.get(givenSectionName))
        expect(isSectionDisplayed).to.equal(true);
    });


    Then(/^the "([^"]*)" is able to sucessfully map the article to the "([^"]*)" category$/, async (givenUser, givenCategoryName) => {
        const isMappedCategoryDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedCategorylistItem.get(givenCategoryName))
        expect(isMappedCategoryDisplayed).to.equal(true);
        await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedCategorylistItem.get(givenCategoryName))
    });


    Then(/^the "([^"]*)" is able to sucessfully map the article to the "([^"]*)" section$/, async (givenUser, givenSectionName) => {
        const isMappedSectionDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedSectionListItem.get(givenSectionName))
        expect(isMappedSectionDisplayed).to.equal(true);
        await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedSectionListItem.get(givenSectionName))
    });


    Then(/^the Author is able to sucessfully map the article to the article$/, async () => {
        const isMappedArticleDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedArticleListItem.get())
        expect(isMappedArticleDisplayed).to.equal(true);
        await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedArticleListItem.get())
    });

    Then(/^verify unchecked permisssion "([^"]*)" permission and that the Article Status "([^"]*)" is not displayed in the dropdown$/, async (givenPermissionScheme, articleStatusValue) => {
        await createArticlePageElements.statusDropDownButton.clickOnElement();
        isStatusIsPublished = await webdriverIOReferences.elementIsExisting(await createArticlePageElements.selectStatusFromDropDown.get(articleStatusValue))
        expect(isStatusIsPublished).to.equal(false);
    });

    Then(/^the author is successfully edited the article publish date.$/, () => {
        return true;
    });

    Then(/^redirect to list view of accesslevels and the "([^"]*)" access level is not created for Resource "([^"]*)"$/, async (givenUser, givenSelectedResource) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await permissionsPageElements.completeAuhtorAccessLevelInRow.get(givenSelectedResource));
        await webdriverIOReferences.elementIsDisplayed(await permissionsPageElements.completeAuhtorAccessLevelInRow.get(givenSelectedResource));
        expect(isItVisible).to.equal(false);

    });

    Then(/^the agent is not allowed to edit the section and the section name "([^"]*)" remains same$/, async (givenSectionName) => {
        const isSectionNameEditable = await webdriverIOReferences.elementIsExisting(await homePageElements.agentUserSectionName.get(givenSectionName))
        expect(isSectionNameEditable).to.equal(true);
        await webdriverIOReferences.elementGetText(await homePageElements.agentUserSectionName.get(givenSectionName));


    });


    Then(/^as per the unchecked permission, the section name "([^"]*)" is not display in the list view of sections$/, async (givenSectionName) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await homePageElements.agentUserSectionName.get(givenSectionName))
        expect(isItVisible).to.equal(false);
    });


    Then(/^the agent is not allowed to delete the section, and "([^"]*)" is still displayed under the category list view of sections$/, async (givenSectionName) => {
        const isSectionDisplayed = await webdriverIOReferences.elementIsExisting(await homePageElements.agentUserSectionName.get(givenSectionName))
        expect(isSectionDisplayed).to.equal(true);

    });


    Then(/^As a Agent user I can edit the article$/, async () => {
        await createArticlePageElements.ckEditorTextArea.typeInTheValueInTheTextField()
        await webdriverIOReferences.setValueInTextField(await createArticlePageElements.ckEditorTextArea.get(), commonMethods.Content_Edit_In_The_CKEditor_By_Agent);
    });


    Then(/^The article "([^"]*)" is not created by a "([^"]*)" user and is not displayed in the list view of articles$/, async (givenArticleTitle, givenUser) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await allUsersPermissionsPageElements.articleInTheListView.get(givenArticleTitle))
        expect(isItVisible).to.equal(false);

    });

    Then(/^Article Favourite status remains as not top article$/, async () => {
        const classAttribute = await webdriverIOReferences.elementGetAttribute(await createArticlePageElements.topArticleStarSymbol.get(), 'class');

        const isTopArticle = !classAttribute.includes('top-article');
        expect(isTopArticle).to.equal(true);
    });

    Then(/^the article visibilty status remains unchecked$/, async () => {
        const checkboxElement = await createArticlePageElements.checkBox.get();
        console.log('Checkbox element:', checkboxElement);
        const isCheckBoxSelected = await checkboxElement.isSelected();
        console.log('Checkbox selected status:', isCheckBoxSelected);
        expect(isCheckBoxSelected).to.be.false;
    });

    Then(/^The Agent dont have permission to add the tags$/, async () => {
        const isItVisible = await webdriverIOReferences.elementGetText(await createArticlePageElements.addedTagNames.get())
        expect(isItVisible).to.be.empty;

    });

    Then(/^the agent dont have permission to delte the tag name and tag is displayed in the tags list$/, async () => {
        const isTagNotDeleted = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.tagNametoHoverOver.get())
        expect(isTagNotDeleted).to.be.true;
    });

    Then(/^the "([^"]*)" is not allowed to delete the article, and "([^"]*)" article is still displayed in the editor view$/, async (givenUser, givenArticleTitle) => {
        await webdriverIOReferences.elementWaitForExist(await createArticlePageElements.addTagsButton.get());
        await webdriverIOReferences.elementWaitForVisible(await createArticlePageElements.addTagsButton.get());
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.addTagsButton.get());
        expect(isItVisible).to.equal(true);
    });

    Then(/^the "([^"]*)" is not allowed to delete the article content$/, async (givenUser) => {
        const currentContent = await webdriverIOReferences.elementGetText(await createArticlePageElements.ckEditorTextArea.get())
        expect(currentContent).to.equal(global.originalContent)
    });

    Then(/^the "([^"]*)" is not allowed to add the article content$/, async (givenUser) => {
        const currentContent = await webdriverIOReferences.elementGetText(await createArticlePageElements.ckEditorTextArea.get())
        expect(currentContent).to.equal(global.originalContent)
    });


    Then(/^the Agent is not able to map the article to the "([^"]*)" category$/, async (givenCategoryName) => {
        const isMappedCategoryDisplayed = await webdriverIOReferences.elementIsExisting(await createArticlePageElements.mappedCategorylistItem.get(givenCategoryName))
        expect(isMappedCategoryDisplayed).to.equal(false);

    });

    Then(/^the Agent is not able to map the article to the "([^"]*)" section$/, async (givenSectionName) => {
        const isMappedSectionDisplayed = await webdriverIOReferences.elementIsExisting(await createArticlePageElements.mappedSectionListItem.get(givenSectionName))
        expect(isMappedSectionDisplayed).to.equal(false);

    });

    Then(/^the folder "([^"]*)" is created and displayed in the list of folders$/, async (givenFolderName) => {
        const isCreatedFolderDisplayed = await folderPageElements.createdFolderName.isVisible(givenFolderName)
        const folderText = await webdriverIOReferences.elementGetText(await folderPageElements.createdFolderName.get(givenFolderName))
        console.log(folderText);
    });


    Then(/^the folder is displayed with the new name "([^"]*)"$/, async (givenFolderName) => {

        const isRenamedFolderDisplayed = await folderPageElements.createdFolderName.isVisible(givenFolderName);
        const folderText = await webdriverIOReferences.elementGetText(await folderPageElements.createdFolderName.get(givenFolderName));
        expect(folderText).to.equal(givenFolderName);
    });


    Then(/^the deleted folder "([^"]*)" is not existed in the list of folders$/, async (givenFolderName) => {
        const isFolderVisible = await webdriverIOReferences.elementIsExisting(await folderPageElements.createdFolderName.get(givenFolderName));
        await browser.pause(3000)
        expect(isFolderVisible).to.equal(false);
    });

    Then(/^the "([^"]*)" access level for Folder "([^"]*)" is created and redirect to list view of accesslevels$/, async (givenPermissionScheme, givenSelectedResource) => {
        const isItVisible = await permissionsPageElements.accessLevelsInRows.isVisible(givenSelectedResource);
        expect(isItVisible).to.equal(true);
    });


    Then(/^the "([^"]*)" access level for Folder "([^"]*)" is displayed$/, async (givenPermissionScheme, givenSelectedResource) => {
        const isItVisible = await permissionsPageElements.accessLevelsInRows.isVisible(givenSelectedResource);
        expect(isItVisible).to.equal(true);

    });

    Then(/^the "([^"]*)" user got access to folder "([^"]*)" and is displayed$/, async (givenUserName, givenFolderName) => {
        const isFolderDisplayed = await webdriverIOReferences.elementIsDisplayed(await folderPageElements.createdFolderName.get(givenFolderName));
        const folderText = await webdriverIOReferences.elementGetText(await folderPageElements.createdFolderName.get(givenFolderName));
        expect(isFolderDisplayed).to.be.true;
        expect(folderText).to.equal(givenFolderName)
    });


    Then(/^The "([^"]*)" user successfully accesed the Folder "([^"]*)"$/, async (givenUserName, givenFolderName) => {
        await webdriverIOReferences.elementIsExisting(await folderPageElements.listOfFilesThumbnailsInsideTheFolder.get())
        const isFileThumbnailsDisplayed = await webdriverIOReferences.elementIsDisplayed(await folderPageElements.listOfFilesThumbnailsInsideTheFolder.get())
        expect(isFileThumbnailsDisplayed).to.be.true;
    });


    Then(/^the manager user successfuly adds a new folder named "([^"]*)"$/, async (givenFolderName) => {
        const isCreatedFolderDisplayed = await folderPageElements.createdFolderName.isVisible(givenFolderName)
        const folderText = await webdriverIOReferences.elementGetText(await folderPageElements.createdFolderName.get(givenFolderName))
        console.log(folderText);
    });


    Then(/^the managere is allowed to edit the folder name$/, async () => {
        const newFolderName = await webdriverIOReferences.elementGetText(await folderPageElements.editedFolderName.get())
        const editedFolder = await $(`//li[contains(@class, 'dx-treeview-node') and contains(@class, 'dx-treeview-node-is-leaf') and .//span[text()="${newFolderName}"]]`);
        await editedFolder.waitForExist({ timeout: 5000 });
        expect(await editedFolder.isExisting()).to.be.true;

    });

    Then(/^the author user don't have a permission to create new folder and error message is displayed$/, async () => {
        const isErrorMessageDisplayed = await webdriverIOReferences.elementIsDisplayed(await folderPageElements.fileMangerErrorMessage.get())
        expect(isErrorMessageDisplayed).to.be.true
    });



    Then(/^the author is not allowed to edit the folder name and folder was not renamed$/, async () => {
        const isForbiddenMessageDisplayed = await webdriverIOReferences.elementIsDisplayed(await folderPageElements.fileManagerErrorForbiddenMessage.get())
        await folderPageElements.itemNotRenamedNotificationText.getTheText()
        expect(isForbiddenMessageDisplayed).to.be.true
    });


    Then(/^the "([^"]*)" access level for Folder "([^"]*)" is not created and not displayed in the list view of accesslevels$/, async (givenUserName, givenAccessLevel) => {
        const isItVisible = await permissionsPageElements.accessLevelsInRows.isVisible(givenSelectedResource);
        expect(isItVisible).to.equal(true);
    });

    Then(/^the "([^"]*)" access level for Folder "([^"]*)" is not created and not displayed in the list view of accesslevels$/, async (givenUserName, givenResource) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await permissionsPageElements.agentAccessLevelInARow.get(givenResource));
        await webdriverIOReferences.elementIsDisplayed(await permissionsPageElements.agentAccessLevelInARow.get(givenResource));
        expect(isItVisible).to.equal(false);

    });

    Then(/^the manager is sucessfully added article content and Language flag  have appered in the list of articles$/, async () => {
        await browser.pause(3000)
        const isItVisible = await createArticlePageElements.languageFlagSymbol.isVisible();
        console.log('Visibility check result:', isItVisible);
        expect(isItVisible).to.be.true;
    });


    Then(/^the manager is sucessfully deleted article content and Language flag is not displayed in the list of articles$/, async () => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await createArticlePageElements.languageFlagSymbol.get());
        console.log('Visibility check result:', isItVisible);
        expect(isItVisible).to.be.false;
    });




    Then(/^the manager sucessfully set article to "([^"]*)" state$/, async (givenArticleState) => {
        await articleListViewPageElements.articleIsInPublishedState.isVisible(givenArticleState)
        const finalStatus = await webdriverIOReferences.elementGetText(await articleListViewPageElements.articleIsInPublishedState.get(givenArticleState));
        console.log(`Final Status of Article is: ${finalStatus}`);
        assert.strictEqual(finalStatus, 'Published', 'The article status should be Published');
    });

    Then(/^the manager user has access to Delete the article "([^"]*)"$/, async (givenArticle) => {
        const isItVisible = await createArticlePageElements.articleInTheListView.isVisible(givenArticle)
        expect(isItVisible === undefined || isItVisible === false).to.be.true;

    });

    Then(/^the manager user sucessfully attached a file to the article$/, async () => {
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.attachedFileName.get())
        expect(isItVisible).to.equal(true)
        await webdriverIOReferences.elementGetText(await createArticlePageElements.attachedFileName.get())
    });

    Then(/^the manager user sucessfully deleted article attachment$/, async () => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await createArticlePageElements.attachedFileName.get());
        expect(isItVisible).to.equal(false)
    });

    Then(/^the Manager is able to sucessfully map the article to the article$/, async () => {
        const isMappedArticleDisplayed = await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.mappedArticleListItemForManagerUser.get())
        expect(isMappedArticleDisplayed).to.equal(true);
        await webdriverIOReferences.elementGetText(await createArticlePageElements.mappedArticleListItemForManagerUser.get())
    });
    Then(/^the manager user allowed to edit the category$/, async () => {
        const editButtonXPath = "//li[@class='category']//span[contains(text(), 'Manager Test edited')]//following::button[contains(@class, 'edit-category')][1]";
        const editButtonElement = await webdriverIOReferences.findElement(editButtonXPath);
        const isEditedCategoryNameDisplayed = await webdriverIOReferences.elementIsDisplayed(editButtonElement)
        await webdriverIOReferences.elementGetText(editButtonElement)
        expect(isEditedCategoryNameDisplayed).to.equal(true);
    });

    Then(/^the expiry date should be set correctly$/, async () => {
        const givenExpiryDate = "Mar 11, 2031, 11:55 AM"
        await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.expiryDateAndTimeFromCalander.get())
        const getTheDateAndTime = await webdriverIOReferences.elementGetValue(await createArticlePageElements.expiryDateAndTimeFromCalander.get())
        expect(getTheDateAndTime).to.equal(givenExpiryDate)
    });


    Then(/^the "([^"]*)" should be displayed in the list view of "([^"]*)" articles$/, async (givenArticleTitle, givenInboxMenuItem) => {
        await browser.waitUntil(async () => {
             const isExpiryArticleDisplayed = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.articleInTheListView.get(givenArticleTitle)); 
             return isExpiryArticleDisplayed; }, { timeout: 10000,
                 timeoutMsg: `Article "${givenArticleTitle}" was not displayed in the list view in time` });
        const isExpiryArticleDisplayed = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.articleInTheListView.get(givenArticleTitle))
        expect(isExpiryArticleDisplayed).to.equal(true);
    });


    Then(/^the article with status "([^"]*)" and date "([^"]*)" is displayed$/, async (articleStatus, expectedDateTime) => {
        await inboxPageElements.expiryDateAndTimeOfTheArticle.isVisible(articleStatus, expectedDateTime);
        const actualDateTime = await webdriverIOReferences.elementGetText(await inboxPageElements.expiryDateAndTimeOfTheArticle.get(articleStatus, expectedDateTime))
        expect(actualDateTime).to.include(expectedDateTime);

    });

    Then(/^the expired date should be set correctly$/, async () => {

        await webdriverIOReferences.elementIsDisplayed(await createArticlePageElements.expiryDateAndTimeFromCalander.get())
        const getTheDateAndTime = await webdriverIOReferences.elementGetValue(await createArticlePageElements.expiryDateAndTimeFromCalander.get())
    });

    Then(/^The article "([^"]*)" is not displayed is list view of articles$/, async (givenArticleTitle) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await allUsersPermissionsPageElements.articleInTheListView.get(givenArticleTitle))
        expect(isItVisible).to.equal(false);

    });

    Then(/^the "([^"]*)" does not exists in the list view of categories$/, async (givenCategoryName) => {
        const isNewsCategoryNotVisible =  await browser.waitUntil(async () => {
       const doesExist =  await webdriverIOReferences.elementIsExisting(await allUsersPermissionsPageElements.categoryName.get(givenCategoryName));
       return !doesExist; 
     }, 
     {
        timeout: 20000, timeoutMsg: 'Category is not displayed!!!'});
        expect(isNewsCategoryNotVisible).to.equal(true);
    });

    Then(/^the created news Article "([^"]*)" is displayed in the list view$/, async (givenArticleTitle) => {
        await webdriverIOReferences.wait(3000)
        const isNewsArticleDisplayed = await webdriverIOReferences.elementIsDisplayed(await allUsersPermissionsPageElements.articleInTheListView.get(givenArticleTitle))
        expect(isNewsArticleDisplayed).to.equal(true);
    });


    Then(/^the news article "([^"]*)" that is created in Admin should display in the Widget Application$/, async (givenArticleTitle) => {

        const newsArticleTitleInAdmin = commonMethods.News_Article_Title;
        await webdriverIOReferences.elementWaitForExist(await agentPageElements.articleTitleToValidate.get(givenArticleTitle), { timeout: 10000 });
        const newsArticleInWidgetTitle = await webdriverIOReferences.elementGetText(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
        expect(newsArticleInWidgetTitle.trim()).to.equal(newsArticleTitleInAdmin.trim())
        console.log('Admin Title:', newsArticleTitleInAdmin);
        console.log('Widget Title:', newsArticleInWidgetTitle);
        await agentPageElements.articleTitleToValidate.clickOnElement(givenArticleTitle)
        const newsArticleContentInAdmin = commonMethods.News_Article_Content;
        const newsArticleContentInWidget = await webdriverIOReferences.elementGetText(await agentPageElements.articleContentInWidget.get())
        expect(newsArticleContentInWidget).to.equal(newsArticleContentInAdmin)
    });


    Then(/^the article "([^"]*)" that is created in Admin is not displayed in the widget$/, async (givenArticleTitle) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
        expect(isItVisible).to.equal(false);
    });

    Then(/^the Announcement "([^"]*)" that is created in Admin should display in the Widget Application$/, async (givenArticleTitle) => {
        const announcementTitleInAdmin = commonMethods.Announcement_Article_Title;
        await webdriverIOReferences.elementWaitForExist(await agentPageElements.articleTitleToValidate.get(givenArticleTitle), { timeout: 10000 });
        const announcementTitleInWidget = await webdriverIOReferences.elementGetText(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
        expect(announcementTitleInWidget.trim()).to.equal(announcementTitleInAdmin.trim())
        console.log('Announcement Title In Admin:', announcementTitleInAdmin);
        console.log('Announcement Title In Widget:', announcementTitleInWidget);
        await agentPageElements.articleTitleToValidate.clickOnElement(givenArticleTitle)
        const announcementContentInAdmin = commonMethods.Announcement_Article_Content;
        const announcementContentInWidget = await webdriverIOReferences.elementGetText(await agentPageElements.articleContentInWidget.get())
        expect(announcementContentInAdmin).to.equal(announcementContentInWidget)
    });


    Then(/^the announcement "([^"]*)" is displayed$/, async (givenAnnouncementFromBanner) => {
        isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.announcementOpenedFromBanner.get(givenAnnouncementFromBanner))
        expect(isItVisible).to.equal(true);

    });



    
Then(/^the News Article "([^"]*)" from notifications is accessd$/, async (givenArticleFromBannerOrNotifications) => {
        await browser.waitUntil(
            async () => await webdriverIOReferences.elementIsDisplayed(await agentPageElements.articleOpenedFromBannerOrNotificationsList.get(givenArticleFromBannerOrNotifications) ),
            { timeout: 20000, timeoutMsg: `The related article was not displayed within the timeout!` }
        );
        isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.articleOpenedFromBannerOrNotificationsList.get(givenArticleFromBannerOrNotifications))
        expect(isItVisible).to.equal(true);


    });

    Then(/^I verify the Banner to not display "([^"]*)" announcement$/, async (givenArticleTitle) => {
        const announcementTitleInAdmin = commonMethods.Announcement_Article_Title;
        const bannerTitle = await webdriverIOReferences.elementGetText(await agentPageElements.bannerTitle.get())
        expect(bannerTitle).to.not.equal(announcementTitleInAdmin);
    });



    Then(/^I verify the "([^"]*)" "([^"]*)" is deleted from notifications list$/, async (givenType, givenTypeOfArticle) => {
        await agentPageElements.notificationsBell.clickOnElement()
        const isItDisplayed = await webdriverIOReferences.elementIsExisting(await agentPageElements.newsOrAnnouncementInNotificationsList.get(givenTypeOfArticle))
        expect(isItDisplayed).to.equal(false);
    });



    Then(/^Verify "([^"]*)" article is not Published in widget$/, async (givenArticleTitle) => {
        const isItVisible = await webdriverIOReferences.elementIsExisting(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
        expect(isItVisible).to.equal(false);
    });

    Then(/^Verify "([^"]*)" article is Published in widget$/, async (givenArticleTitle) => {
        const isItVisible = await webdriverIOReferences.elementIsDisplayed(await agentPageElements.articleTitleToValidate.get(givenArticleTitle))
        expect(isItVisible).to.equal(true);


    });

    Then(/^I navigated  back to "([^"]*)" menu item$/, async (givenMenuButton) => {
        await homePageElements.knowledgebaseMenuItems.clickOnElement(givenMenuButton);
    });

    
    Then(/^I signOut from puzzelid accout$/, async() => {
        await browser.waitUntil(async function () {
            const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await puzzelHomePageElements.puzzelOpenProfileButton.get());
            return isDisplayed;
              }, {timeout: 30000, timeoutMsg: 'Profile Button is not displayed!!!'}) 
        await puzzelHomePageElements.puzzelOpenProfileButton.isVisible()
        await puzzelHomePageElements.puzzelOpenProfileButton.clickOnElement()
      await browser.waitUntil(async function () {
        const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await puzzelHomePageElements.signOutButton.get());
        return isDisplayed;
          }, {timeout: 20000, timeoutMsg: 'SignOut Button is not displayed!!!'}) 
         await puzzelHomePageElements.signOutButton.clickOnElement()
});



});

