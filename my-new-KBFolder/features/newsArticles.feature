Feature: News Articles
     Scenario: Login to Puzzel id 
        Given I am logged in as a admin
         And I accessd "Knowledge" application from the admin main menu
        Then the Knowledgebase Banner is displayed

    Scenario: Create News Category to create news articles
        Given I am on knowledgebase admin home page
        When I click on "Edit menu" to Edit the Category list view
        Then The "Add Category" field is displayed
        When I click on "Add Category" button
        Then add category model box is displayed
        When I enter the News category name in model box displayed
        And I select the category type "NEWS" from dropdown options
        And I click on "Create" button that creates a category
        Then the category is displayed in the list view of categories

    Scenario:Delete News Category
        Given I am on knowledgebase admin home page
        When I click on "Edit menu" to Edit the Category list view
        And I delete the "Test News Category" from the category list view
        Then the "Test News Category" does not exists in the list view of categories

    Scenario:Creating an News Article in Rich Text
        Given I am on knowledgebase admin home page
        When I click on the selcted "News Category" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "News Article Title" field
        And I add "News Article Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        And I set article status to "PUBLISHED" state
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the created news Article "News Article for Test Automation" is displayed in the list view
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "News Category" in widget
        Then the news article "News Article for Test Automation" that is created in Admin should display in the Widget Application

    Scenario:Verify News Article is displayed in notifications list
        When I click on notifications symbol to verify "News Article for Test Automation" and News Icon is displayed
        Then the News Article "News Article for Test Automation" from notifications is accessd


    Scenario: Deleting News Article
        Given I am on knowledgebase admin home page
        When I click on the selcted "News Category" category
        And I open the article "News Article for Test Automation" from the list view and I Delete the article
        Then the article "News Article for Test Automation" is Deleted in the list view of articles
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "News Category" in widget
        Then the article "News Article for Test Automation" that is created in Admin is not displayed in the widget
        And I verify the "News" "News Article for Test Automation" is deleted from notifications list
        When I navigate back to the KB Admin
        Then I signOut from puzzelid accout
         