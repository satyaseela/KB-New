const webdriverIOReferences = require('@puzzel/wdio-references-async');
const commonMethods = require('../../utilities/commonMethods')

const allUsersPermissionsPageElements ={

    categoryName:{
        get: async function(givenCategoryName) {  
            return await webdriverIOReferences.findElement ("//span[normalize-space()='"+ givenCategoryName +"']")
        },
        clickOnElement: async function (givenCategoryName) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryName));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryName));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryName));
        },
    },
    articleInTheListView:{
        get: async function(givenArticleTitle) {  
            return await webdriverIOReferences.findElement ("//section[@class='category articles-list']//ul[@id='category-list']//li/article-preview//article//p[@class='article-title' and text()='"+ givenArticleTitle +"']")
        },
        
        clickOnElement: async function(givenArticleTitle) { 
        const element = await this.get(givenArticleTitle); 
        await webdriverIOReferences.elementWaitForExist(element); 
        await webdriverIOReferences.elementWaitForVisible(element); 
        await webdriverIOReferences.scrollElementIntoView(element); 
        await webdriverIOReferences.clickOnTheElement(element);
     }, 
     isVisible: async function(givenArticleTitle) {
         const element = await this.get(givenArticleTitle);
          await webdriverIOReferences.elementWaitForExist(element); 
          await webdriverIOReferences.elementWaitForVisible(element); 
          return await webdriverIOReferences.elementIsDisplayed(element); 
        } 
    },
    
    

};
module.exports = allUsersPermissionsPageElements;