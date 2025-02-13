const webdriverIOReferences = require('@puzzel/wdio-references-async');
const commonMethods = require('../../utilities/commonMethods')

const createArticlePageElements = {
    createArticleButton: {
        get: async function (givenArticleButton) {
            return await webdriverIOReferences.findElement("//span[normalize-space()='" + givenArticleButton + "']")
        },

        clickOnElement: async function (givenArticleButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenArticleButton));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenArticleButton));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenArticleButton));
        },
    },
    editTextEditorButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("section[class='article-answer'] button")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    articleTitleField: {
        get: async function (givenArticleTitle) {
            return await webdriverIOReferences.findElement("//input[@aria-label='Article title']")
        },
        typeInTheValueInTheTextField: async function (givenArticleTitle) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementWaitForEnabled(await this.get())
            await webdriverIOReferences.clearValueInTextField(await this.get())

        }
    },
    editorTextArea: {
        get: async function (givenContent) {
            return await webdriverIOReferences.findElement(".textarea.au-target")
        },
        typeInTheValueInTheTextField: async function (givenContent) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clearValueInTextField(await this.get())
            await webdriverIOReferences.setValueInTextField(await this.get(), commonMethods.Create_Article_Content)
        }
    },
    ckEditorTextArea: {
        get: async function (givenContent) {
            return await webdriverIOReferences.findElement("//div[@aria-label='Editor editing area: main']")
        },
        typeInTheValueInTheTextField: async function (givenContent) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clearValueInTextField(await this.get())

        }
    },

    textTypeDropDownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//section[@class='options']//select[@class='browser-default custom-select au-target']");
        },
        clickOnElement: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element);
            await webdriverIOReferences.elementWaitForVisible(element, { timeout: 5000 });
            await webdriverIOReferences.scrollElementIntoView(element); 
            await webdriverIOReferences.clickOnTheElement(element);                                                                                                      
        }
    },

    textType: {
        get: async function (givenTextType) {
            return await webdriverIOReferences.findElement("//select[@class='browser-default custom-select au-target']//option[@value='" + givenTextType + "']")
        },
        clickOnElement: async function (givenTextType) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenTextType));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenTextType));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenTextType));
        }
    },
    chooseLanguageDropDownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//lang-dropdown[@selected-lang.two-way='selectedLocale']//select[@class='au-target form-control']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    chooseLanguageOptions: {
        get: async function (givenLanguage) {
            return await webdriverIOReferences.findElement("//lang-dropdown[@selected-lang.two-way='selectedLocale']//option[normalize-space()='" + givenLanguage + "']")
        },
        clickOnElement: async function (givenLanguage) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenLanguage));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenLanguage));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenLanguage));
        }
    },
    visibilityCheckBoxButton: {
        get: async function (givenVisiblity) {
            return await webdriverIOReferences.findElement("//label[normalize-space()='" + givenVisiblity + "']")

        },
        clickOnElement: async function (givenVisiblity) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenVisiblity));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenVisiblity));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenVisiblity));
        },
        isSelected: async function (givenVisiblity) {
            await webdriverIOReferences.elementIsSelected(await this.get(givenVisiblity));
        }
    },
    checkBox: {
        get: async function () {
            return await webdriverIOReferences.findElement("//div[@class='custom-control custom-checkbox au-target']//input[@type='checkbox' and @id='customCheck1']")
        },

        isSelected: async function () {
            await webdriverIOReferences.elementIsSelected(await this.get());
        }
    },
    articleCreationSaveButton: {
        get: async function (givenOption) {
            return await webdriverIOReferences.findElement("//button[@class='save au-target' and not(@disabled)]")
        },
        isEnabled: async function (givenOption) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsEnabled(await this.get());
        },
        clickOnElement: async function (givenOption) {
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    topArticleStarSymbol: {
        get: async function () {
            return await webdriverIOReferences.findElement(".au-target.fa.fa-star")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.doubleClickOnTheElement(await this.get());
        }
    },
    articlesInListView: {
        get: async function () {
            return await webdriverIOReferences.findElement(".category.articles-list")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    givenMenuCategory: {
        get: async function (givenCategory) {
            return await webdriverIOReferences.findElement("a[class='top-articles']")
        },
        clickOnElement: async function (givenCategory) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    articleTitleInListView: {
        get: async function () {
            return await webdriverIOReferences.findElement("//p[normalize-space()='Test Article']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
        getTheText: async function () {
            await webdriverIOReferences.elementGetText(await this.get())
        }
    },
    articleDeleteButton: {
        get: async function () {
            return await webdriverIOReferences.findElement(".delete[data-toggle='modal']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    articleInTheListView: {
        get: async function (givenArticle) {
            return await webdriverIOReferences.findElement("//p[normalize-space()='" + givenArticle + "']")
        },
        clickOnElement: async function (givenArticle) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenArticle));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenArticle));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenArticle));
        },
        isVisible: async function (givenArticle) {
            //await webdriverIOReferences.elementWaitForExist(await this.get(givenArticle));
            //await webdriverIOReferences.elementWaitForVisible(await this.get(givenArticle));
            await webdriverIOReferences.elementIsDisplayed(await this.get(givenArticle))
        },
    },
    deleteButtonInModalBox: {
        get: async function () {
            return await webdriverIOReferences.findElement(".btn.delete-article.au-target")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    addLanguageButton: {
        get: async function (givenLanguage) {
            return await webdriverIOReferences.findElement("button[aria-label='Add article language']")
        },
        clickOnElement: async function (givenLanguage) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    addLanguageDropdownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//lang-dropdown[@selected-lang.two-way='languageToAddSelected']//select[@class='au-target form-control']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    addLanguageFromDropDown: {
        get: async function (givenLanguage) {
            return await webdriverIOReferences.findElement("//lang-dropdown[@selected-lang.two-way='languageToAddSelected']//option[normalize-space()='" + givenLanguage + "']")
        },
        clickOnElement: async function (givenLanguage) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenLanguage));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenLanguage));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenLanguage));
        }
    },
    addLanguageAddButton: {
        get: async function (givenButton) {
            return await webdriverIOReferences.findElement(".btn.btn-primary.add-language.au-target")
        },
        clickOnElement: async function (givenButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    languageFlag: {
        get: async function () {
            return await webdriverIOReferences.findElement("//flag[@lang='${lang}']//img[@class='au-target no']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            return await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    addCommentInTextArea: {
        get: async function (givenTextArea) {
            return await webdriverIOReferences.findElement(".au-target[ref='commentText']")
        },
        isVisible: async function (givenTextArea) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsDisplayed(await this.get())
        }
    },
    addCommentAndSveArticleButton: {
        get: async function (givenButton) {
            return await webdriverIOReferences.findElement("//button[normalize-space()='Add comment and save article']")
        },
        elementIsEnabled: async function (givenButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsEnabled(await this.get());
        },
        clickOnElement: async function (givenButton) {
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    statusDropDownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//select[@value.bind='articleStatus']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    selectStatusFromDropDown: {
        get: async function (articleStatusValue) {
            return await webdriverIOReferences.findElement("//div[@class='status']//option[@value='" + articleStatusValue + "']")
        },
        clickOnElement: async function (articleStatusValue) {
            await webdriverIOReferences.elementWaitForExist(await this.get(articleStatusValue));
            await webdriverIOReferences.elementWaitForVisible(await this.get(articleStatusValue));
            await webdriverIOReferences.clickOnTheElement(await this.get(articleStatusValue));
        },
    },
    revisionHistoryButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//div[@title='Revision History']")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
        clickOnElement: async function () {
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },

    },
    analyticsSymbol: {
        get: async function () {
            return await webdriverIOReferences.findElement(".fas.fa-analytics")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.elementIsDisplayed(await this.get())
        },
    },
    addTagsButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("button[class='add-tag btn au-target'] span")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    enterTagsInputPlaceHolder: {
        get: async function () {
            return await webdriverIOReferences.findElement("input[placeholder='Enter tags separated by comma']")
        },
    },
    addTagsSubmitButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@click.delegate='addTags()']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    addedTagNames: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[class='all-tags']")
        },
        isVisible: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(await this.get(element));
            await webdriverIOReferences.elementWaitForVisible(await this.get(element));
            const isDisplayed = await webdriverIOReferences.elementIsDisplayed(element);
            return isDisplayed;
        },
    },
    tagNameToDelete: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Tag: manager'] span[class='tag-name']")
        },
        isVisible: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(await this.get(element));
            await webdriverIOReferences.elementWaitForVisible(await this.get(element));
            const isDisplayed = await webdriverIOReferences.elementIsDisplayed(element);
            return isDisplayed;
        },
    },
    deleteTagButtton: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Tag: manager'] i[class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    tagNametoHoverOver: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[contains(text(),'categories')]")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    tagToBeDeletedByAgent: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@aria-label='Tag: categories']//i[@class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mappingButton: {
        get: async function (givenMappingButton) {
            return await webdriverIOReferences.findElement("//span[normalize-space()='" + givenMappingButton + "']") //button[@class='add-section btn' and span[text()='Map section']]
        },
        clickOnElement: async function (givenMappingButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMappingButton));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMappingButton));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMappingButton));
        },
    },
    mapCategoriesDropDownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//select[@value.bind='categoryToAddId']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    selectCategoryFromDropDown: {
        get: async function (givenCategoryToMap) {
            return await webdriverIOReferences.findElement("//select[@class='browser-default custom-select au-target']//option[normalize-space(text())='" + givenCategoryToMap + "']")
        },
        clickOnElement: async function (givenCategoryToMap) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryToMap));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryToMap));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryToMap));
        },
    },
    selectCategoryForAgentFromDropDown: {
        get: async function () {
            return await webdriverIOReferences.findElement("//select[@class='browser-default custom-select au-target']//option[normalize-space(text())='News Category']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mapArticleToTheCategorySubmitButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@click.delegate='mapArticleToCategory()']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },

    sectionToAddDropDownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//select[@value.bind='sectionToAddId']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    sectionToAddfromDropDown: {
        get: async function (givenSectionName) {
            return await webdriverIOReferences.findElement("//select[@class='browser-default custom-select au-target']//option[normalize-space(text())='" + givenSectionName + "']")
        },
        clickOnElement: async function (givenSectionName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionName));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenSectionName));
        },
    },
    mapArticleToSectionSubmitButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@click.delegate='mapArticleToSection()']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    relatedArticleSearcheField: {
        get: async function () {
            return await webdriverIOReferences.findElement("//input[@id='related-article-search']")
        },
        typeInTheValueInTheTextField: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.setValueInTextField(await this.get(), 'latest article to test')
        }
    },
    relatedArticleSearchButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//i[@class='fa fa-search']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    relatedArticleSubmitButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@click.delegate='relateSelectedArticles()']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mapArticleCheckBox: {
        get: async function () {
            return await webdriverIOReferences.findElement("//table[@class='table table-striped']//tr[td[text()='Latest Article to test']]//input[@type='checkbox']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mapArticleCheckBoxforManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("//tr[td[text()='Article to test by Manager']]//input[@type='checkbox']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    catgoryNameToHoverOver: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@class='tag badge custom au-target' and @aria-label='Category: Category for author to Test']")
        },
        hoverOverOnElement: async function (xOffset = 0, yOffset = 0) {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element, { timeout: 5000 });
            await webdriverIOReferences.elementWaitForVisible(element, { timeout: 5000 });
            await webdriverIOReferences.moveElementTo(element, xOffset, yOffset);
        },
    },
    catgoryNameToHoverOverForManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@class='tag badge custom au-target' and @aria-label='Category: Test Permissions Category']")
        },
        hoverOverOnElement: async function (xOffset = 0, yOffset = 0) {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element, { timeout: 5000 });
            await webdriverIOReferences.elementWaitForVisible(element, { timeout: 5000 });
            await webdriverIOReferences.moveElementTo(element, xOffset, yOffset);
        }
    },
    mappedCategoryRemoveButttonForManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@aria-label='Category: Test Permissions Category']//i[@class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element, { timeout: 5000 });
            await webdriverIOReferences.elementWaitForVisible(element, { timeout: 5000 });
            await webdriverIOReferences.scrollElementIntoView(element)
            await webdriverIOReferences.elementIsClickable(element);
        }
    },
    mappedCategorylistItem: {
        get: async function (givenCategoryName) {
            return await webdriverIOReferences.findElement("//span[@class='category-name'][normalize-space()='" + givenCategoryName + "']")
        },
        isVisible: async function (givenCategoryName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryName));
            await webdriverIOReferences.elementIsDisplayed(await this.get(givenCategoryName));
        }
    },
    mappCategoryRemoveButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@aria-label='Category: Category for author to Test']//i[@class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element, { timeout: 5000 });
            // await webdriverIOReferences.elementIsDisplayed(element,{ timeout: 5000 })
            await webdriverIOReferences.elementWaitForVisible(element, { timeout: 5000 });
            // await webdriverIOReferences.elementWaitForEnabled(element,{ timeout: 5000 });
            await webdriverIOReferences.scrollElementIntoView(element)
            await webdriverIOReferences.elementIsClickable(element);
        },
    },
    mappedSectionListItem: {
        get: async function (givenSectionName) {
            return await webdriverIOReferences.findElement("//span[@class='section-name'][normalize-space()='" + givenSectionName + "']")
        },
        isVisible: async function (givenSectionName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenSectionName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenSectionName));
            await webdriverIOReferences.elementIsDisplayed(await this.get(givenSectionName));
        },
    },
    scrollToBottom: async function () {
        await browser.execute(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    },
    sectionNameToHoverOver: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Sections: new bee 1'] span[class='section-name']")
        },
        hoverOverOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.moveToElement(await this.get());
        },
    },
    sectionNameToHoverOverforManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Sections: Section 2'] span[class='section-name']")
        },
    },
    mappSectionRemoveButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@aria-label='Sections: new bee 1']//i[@class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mappSectionRemoveButtonForManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@aria-label='Sections: Section 2']//i[@class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mappedArticleListItem: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Related article: Latest Article to test'] span[class='related-article-name']")
        },
        hoverOverOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.moveToElement(await this.get());
        },
    },
    mappedArticleListItemForManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Related article: Article to test by Manager'] span[class='related-article-name']")
        },
        hoverOverOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.moveToElement(await this.get());
        },
    },
    mappArticleRemoveButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[aria-label='Related article: Latest Article to test'] i[class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.moveToElement(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    mappArticleRemoveButtonForManagerUser: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@aria-label='Related article: Article to test by Manager']//i[@class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.moveToElement(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
    attachFileButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("label[id='attach-files'] span")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    attachedFileName: {
        get: async function () {
            return await webdriverIOReferences.findElement("span[class='attachment badge'] span")
        },
        hoverOverOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.moveToElement(await this.get());
        }
    },

    attachedFileRemoveButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("button[class='remove-attachment au-target'] i[class='fa fa-times-circle']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },

    publishDateCalenderButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//date-time-picker[@view-model.ref='publishDateRef']//input[@type='text']")//date-time-picker[@view-model.ref='publishDateRef']//span[@class='au-target fas fa-calendar-alt']
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            // await webdriverIOReferences.clickOnTheElement(await this.get());
            await webdriverIOReferences.clearValueInTextField(await this.get())
            await webdriverIOReferences.setValueInTextField(await this.get(), "May 30, 2024, 08:33 AM")
        },
    },

    selectDateFromCalendar: {
        get: async function (day) {
            return await webdriverIOReferences.findElement(`//td[normalize-space(text())='${day}' and contains(@class, 'day')]`);
        },
        clickOnElement: async function (day) {
            const element = await this.get(day);
            await webdriverIOReferences.elementWaitForExist(element);
            await webdriverIOReferences.elementWaitForVisible(element);
            await webdriverIOReferences.clickOnTheElement(element);
        }
    },
    selectTimeFromCalendar: {
        get: async function (time) {
            return await webdriverIOReferences.findElement(`//select[contains(@class, 'time-picker')]//option[@value='${time}']`);
        },
        clickOnElement: async function (time) {
            const element = await this.get(time);
            await webdriverIOReferences.elementWaitForExist(element);
            await webdriverIOReferences.elementWaitForVisible(element);
            await webdriverIOReferences.clickOnTheElement(element);
        }
    },
    timePickerUpArrow: {
        get: async function () {
            return await webdriverIOReferences.findElement("//div[contains(@class, 'bootstrap-datetimepicker-widget')]//span[contains(@class, 'glyphicon-chevron-up')]");
        },
        clickOnElement: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element);
            await webdriverIOReferences.elementWaitForVisible(element);
            await webdriverIOReferences.clickOnTheElement(element);
        }
    },
    timePickerDownArrow: {
        get: async function () {
            return await webdriverIOReferences.findElement("//div[contains(@class, 'bootstrap-datetimepicker-widget')]//span[contains(@class, 'glyphicon-chevron-down')]");
        },
        clickOnElement: async function () {
            const element = await this.get();
            await webdriverIOReferences.elementWaitForExist(element);
            await webdriverIOReferences.elementWaitForVisible(element);
            await webdriverIOReferences.clickOnTheElement(element);
        }
    },

    headingElementDropDownButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@aria-label='Heading']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    selectingHeaderFromDropDown: {
        get: async function (givenHeader) {
            return await webdriverIOReferences.findElement("//button[.//span[text()='" + givenHeader + "']]");
        },
        clickOnElement: async function (givenHeader) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenHeader));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenHeader));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenHeader));
        }
    },
    languageFlagSymbol: {
        get: async function () {
            return await webdriverIOReferences.findElement("//li[.//p[@class='article-title' and text()='Test Article']]//img[contains(@class, 'no')]")
        },
        isVisible: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            const isDisplayed = await webdriverIOReferences.elementIsDisplayed(await this.get())
            console.log('Element is displayed:', isDisplayed);
            return isDisplayed;
        },
    },
    languageVersionDeleteButton: {
        get: async function () {
            return await webdriverIOReferences.findElement(".btn.btn-warning.au-target");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    changeLanguageButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@class='au-target change-lang']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    expiryDateAndTimeFromCalander: {
        get: async function () {
            return await webdriverIOReferences.findElement("//date-time-picker[@view-model.ref='expiryDateRef']//input[@type='text']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    selectDateFromeCalander: {
        get: async function (givenDate) {
            return await webdriverIOReferences.findElement("//td[normalize-space()='" + givenDate + "']");
        },
        clickOnElement: async function (givenDate) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenDate));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenDate));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenDate));
        }
    },
    selectMonthFromCalander: {
        get: async function (givenMonth) {
            return await webdriverIOReferences.findElement("//div[@class='datepicker-months']//span[normalize-space()='" + givenMonth + "']");
        },
        clickOnElement: async function (givenMonth) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMonth));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMonth));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMonth));
        }
    },
    selectYearFromCalander: {
        get: async function (givenYear) {
            return await webdriverIOReferences.findElement("//span[normalize-space()='" + givenYear + "']");
        },
        clickOnElement: async function (givenYear) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenYear));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenYear));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenYear));
        }
    },
    selectMonthButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//th[@title='Select Month']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    selectYearButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//th[@title='Select Year']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    pickHourButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@title='Pick Hour']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    pickMinutesButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//span[@title='Pick Minute']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }
    },
    pickSpecificHour: { //td[@class='hour'][normalize-space()='11']
        get: async function (givenHours) {
            return await webdriverIOReferences.findElement("//td[@class='hour'][normalize-space()='" + givenHours + "']");
        },
        clickOnElement: async function (givenHours) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenHours));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenHours));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenHours));
        }
    },
    pickSpecificMinute: {
        get: async function (givenMinutes) {
            return await webdriverIOReferences.findElement("//td[normalize-space()='" + givenMinutes + "']");
        },
        clickOnElement: async function (givenMinutes) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenMinutes));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenMinutes));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenMinutes));
        }
    },
    pickPeriodButton: {
        get: async function () {
            return await webdriverIOReferences.findElement("//button[@title='Toggle Period']");
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.doubleClickOnTheElement(await this.get());
        }
    },

    replyAndDeleteButton: {
        get: async function (givenFeedbackButton) {
            return await webdriverIOReferences.findElement("//div[@class='au-target row feedback-row']//a[@role='button'][normalize-space()='" + givenFeedbackButton + "']");
        },
        clickOnElement: async function (givenFeedbackButton) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenFeedbackButton));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenFeedbackButton));
            await webdriverIOReferences.doubleClickOnTheElement(await this.get(givenFeedbackButton));
        }
    },
    feedbackPlaceHolderInAdmin: {
        get: async function () {
            return await webdriverIOReferences.findElement("//article-feedback-item//textarea[@placeholder='Type your answer']");
        },
    },
    replyFeedbackSendButtonInAdmin: {
        get: async function () {
            return await webdriverIOReferences.findElement("//div[@id='reply-10']//button[@class='save au-target' and contains(@click.delegate, 'sendReply()') and text()='Send']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        },
    },
}

module.exports = createArticlePageElements;