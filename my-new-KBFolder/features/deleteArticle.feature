Feature: Article Deletion
    
    Scenario: Login to Puzzel id    
        Given I am logged in as a admin
        And I accessd "Knowledge" application from the admin main menu
        Then the Knowledgebase Banner is displayed


    Scenario: Delete article
        Given I am on knowledgebase admin home page
        When I click on the selcted "Testing Category" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Delete article Title" field
        And I add "Delete Article Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        And I set article status to "PUBLISHED" state
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the article is created and navigated back to the list view of articles
        And I open the article "Delete Article Test" from the list view and I Delete the article
        Then the article "Delete Article Test" is Deleted in the list view of articles
        And I signOut from puzzelid accout