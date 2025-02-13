Feature: Approval WorkFlow

    Scenario: Login to Puzzel id
        Given I am logged in as a admin
        And I accessd "Knowledge" application from the admin main menu
        Then the Knowledgebase Banner is displayed

    Scenario: Set article to Drafts
        Given I am on knowledgebase admin home page
        When I click on the selcted "New Category for Author" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Draft State Article Title" field
        And I add "Draft State Article Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        And I set article status to "DRAFT" state
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the article is created in Draft state
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "New Category for Author" in widget
        Then Verify "Sample article in Draft state" article is not Published in widget
        When I navigate back to the KB Admin
        When I click on the selcted "New Category for Author" category
        And I open the article "Sample article in Draft state" from the list view and I Delete the article



    Scenario: Set article to Review
        Given I am on knowledgebase admin home page
        When I click on the selcted "New Category for Author" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Review State Article Title" field
        And I add "Review State Article Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        And I set article status to "REVIEW" state
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the article is created in Review state
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "New Category for Author" in widget
        Then Verify "Sample article in Review state" article is not Published in widget
        When I navigate back to the KB Admin
        When I click on the selcted "New Category for Author" category
        And I open the article "Sample article in Review state" from the list view and I Delete the article



    Scenario: Set article to Published
        Given I am on knowledgebase admin home page
        When I click on the selcted "New Category for Author" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Published State Article Title" field
        And I add "Published State Article Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        And I set article status to "PUBLISHED" state
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the article is created in Published state
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "New Category for Author" in widget
        Then Verify "Published article" article is Published in widget
        When I navigate back to the KB Admin
        When I click on the selcted "New Category for Author" category
        And I open the article "Published article" from the list view and I Delete the article


    Scenario: Change current version of article to Review state to Published from Inbox menu item
        Given I am on knowledgebase admin home page
        When I click on the selcted category
        And I open the article "Sample article to test" to edit the status of the article
        And I set the article "Sample article to test" status to "REVIEW"
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
        Given I am on Inbox menu Item Page in the Knowledgebase admin application
        When I open "For Review" menu item folder
        Then the article under Review state are displayed
        When I open the article "Sample article to test" under For Review inbox folder
        And I set the article "Sample article to test" status to "PUBLISHED"
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
        And I signOut from puzzelid accout

