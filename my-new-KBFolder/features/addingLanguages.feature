Feature: Adding Norwegian article to a English article

    Scenario: Login to Puzzel id
        Given I am logged in as a admin
        And I accessd "Knowledge" application from the admin main menu
        Then the Knowledgebase Banner is displayed

    Scenario: Adding Languages to article
        Given I am on knowledgebase admin home page
        When I click on the selcted "Permissions Category for Manager" category
        And I click on "Article" button to create an Article
        Then I click on "Standard" article type
        Then the articles editor view is displayed
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Article With Languages" field
        And I add "Engilsh Content" in CK Editor text area
        And I choose language "English" from the language dropdown
        And tick mark the visibility check box as "Visible"
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the article is created and navigated back to the list view of articles
        When I open the article "Article With Languages" to add language articles
        And I click on "Add" Button next to English language article
        And I click on choose language dropdown and choose language "Norwegian" from the language dropdown
        And I will click on "add" Button
        Then The choosen language is flag is displayed with content editor
        When change the type of the text to "HTML" option from the dropdown
        When I add the title in "Norwegian Article" field
        And I add "Norwegian Content" in CK Editor text area
        And tick mark the visibility check box as "Visible"
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button



    Scenario: Removing the article content(remove added language )
        Given I am on knowledgebase admin home page
        When I click on the selcted "Permissions Category for Manager" category
        When I open the article "Article With Languages" to add language articles
        And I delete the added Norwegian language article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
        And I open the article "Article With Languages" from the list view and I Delete the article
        And I signOut from puzzelid accout
