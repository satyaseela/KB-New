Feature: Expired And Expiring Articles

    Scenario: Login to Puzzel id 
        Given I am logged in as a admin
        And I accessd "Knowledge" application from the admin main menu
       Then the Knowledgebase Banner is displayed

    Scenario: Setting Expiry Date to Article
        Given I am on knowledgebase admin home page
        When I click on the selcted "Satya Test" category
        And I open the article "Audience groups test" from the list view of articles
        And I set the expiry date and time to "Mar" "11" "2031" from calander
        Then the expiry date should be set correctly
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
     

    Scenario: Verify Expiring Article under Inbox (Expiring Articles)
        Given I am on Inbox menu Item Page in the Knowledgebase admin application
        When I click on "Expiring Articles" from inbox menu item
        Then the "Audience groups test" should be displayed in the list view of "Expiring" articles
        And the article with status "Expiring" and date "Mar 11, 2031, 11:55 AM" is displayed

    Scenario: Expired Article
        Given I am on knowledgebase admin home page
        When I click on the selcted "Satya Test" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Expired Article Title" field
        And I add "Expired Article Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        And I set article status to "PUBLISHED" state
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        And I open the article "Expired Article Test" from the list view of articles
        And I set the Expired date and time to "Jun" "11" "2023" "05" "35" from calander
        Then the expired date should be set correctly
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "Satya Test" in widget
        Then Verify "Delete Article Test" article is not Published in widget



     Scenario: Verify Expired Article under Inbox menu (Expired Articles)
        Given I am on Inbox menu Item Page in the Knowledgebase admin application
        When I click on "Expired Articles" from inbox menu item
        Then the "Expired Article Test" should be displayed in the list view of "Expired" articles
        And the article with status "Expired" and date "Jun 11, 2023, 05:35" is displayed 
        And I open the article "Expired Article Test" from the list view and I Delete the article
        And I signOut from puzzelid accout