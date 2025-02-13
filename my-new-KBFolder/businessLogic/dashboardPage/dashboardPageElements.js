const webdriverIOReferences = require('@puzzel/wdio-references-async');

const dashboardPageElements = {

    metricTilesNames:{
        get: async function() {
            return await webdriverIOReferences.findElement("//span[normalize-space()='Published Total']")
        },

    },
    searchComponentbutton:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='search-component']")
        },
        clickOnElement: async function () {
            await webdriverIOReferences.elementWaitForExist(await this.get());
            await webdriverIOReferences.elementWaitForVisible(await this.get());
            await webdriverIOReferences.clickOnTheElement(await this.get());
        }

    },
    selectCategoryFromDropDownInDashboard:{
        get: async function(givenCategoryfromDashboard) {
            return await webdriverIOReferences.findElement("//span[normalize-space()='"+ givenCategoryfromDashboard +"']")
        },
        clickOnElement: async function (givenCategoryfromDashboard) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenCategoryfromDashboard));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenCategoryfromDashboard));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenCategoryfromDashboard));
        }

    },
    articlePublishedTotalCount:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='generic-stats d-flex flex-column au-target' and contains(@style, 'background-color: rgb(180, 66, 214)')]//span[@class='h1 text-center']")
        },
    
    },
    articleInReviewStatusTotal:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='generic-stats d-flex flex-column au-target' and contains(., 'Articles in Review')]//span[@class='h1 text-center']")
        },
    
    },
    articleInDraftsStatusTotalCount:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[contains(@class, 'generic-stats')]//span[contains(text(), 'Articles in Draft')]/preceding-sibling::span[@class='h1 text-center']")
        },
    
    },
    dateRangeOptions:{
        get: async function(givenDateRangePeriod) {
            return await webdriverIOReferences.findElement("//li[@data-range-key='"+ givenDateRangePeriod +"']")
        },
        clickOnElement: async function (givenDateRangePeriod) {
            await webdriverIOReferences.elementWaitForExist(await this.get(givenDateRangePeriod));
            await webdriverIOReferences.elementWaitForVisible(await this.get(givenDateRangePeriod));
            await webdriverIOReferences.clickOnTheElement(await this.get(givenDateRangePeriod));
        }

    },
    articleExpiredTotalCount:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[contains(@class, 'generic-stats') and contains(@style, 'rgb(36, 130, 127)')]//span[contains(text(), 'Expired Total')]/preceding-sibling::span[@class='h1 text-center']")
        },
    
    },
    articleExipringTotalCount:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[@class='generic-stats d-flex flex-column au-target' and contains(@style, 'rgb(235, 21, 98)')]//span[@class='h1 text-center']")
        }
    },
    articleTotalCount:{
        get: async function() {
            return await webdriverIOReferences.findElement("//div[contains(@class, 'generic-stats')]//span[contains(text(), 'Article')]/following-sibling::span[contains(text(), 'Count Total')]/preceding-sibling::span[@class='h1 text-center']")
        }
    },



};
module.exports = dashboardPageElements;