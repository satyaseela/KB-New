Feature: Article creation in plain text and rich text

    Scenario: Login to Puzzel id
        Given I am logged in as a admin
        # Given I wait "5000" seconds
        And I accessd "Knowledge" application from the admin main menu
        Then the Knowledgebase Banner is displayed

    Scenario:Creating an Article in Plain Text
        # Given I am on knowledgebase admin home page
        When I click on the selcted "Category test1" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When I add the title in "Article title" field
        And I add articles content in "textarea"
        And change the type of the text to "PLAIN_TEXT" option from the dropdown
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        And I open the article "Test Article in Plain Text" from the list view and I Delete the article



    Scenario:Creating an Article in Rich Text
        Given I am on knowledgebase admin home page
        When I click on the selcted "Category test1" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Rich Text Article Title" field
        And I add "Rich Text Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        And I open the article "Test Article in Rich Text" from the list view and I Delete the article


    Scenario: Top articles
        Given I am on knowledgebase admin home page
        When I click on the selcted "Category test1" category
        And I open the article "Test Article" from the list view of articles
        And I Edit article favourite status by clicking on a star mark
        And tick mark the visibility check box as "Visible"
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
        When I click on "Top Articles" menu item
        Then the created top article have appered in the top articles list
        And I signOut from puzzelid accout