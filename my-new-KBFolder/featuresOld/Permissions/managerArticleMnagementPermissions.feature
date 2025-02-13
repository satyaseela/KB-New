# Feature: Manager User article management permissions

#     Scenario: Successful log in to KB Admin application as a manager user
#         Given I am logged in as a manager


    # Scenario: Article Management Can Access Article- kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I verify "Can access article" permission by accessing the article "Test Article" in the list
    #     Then the "Manager" user Successfully accessed the article

    # Scenario: Article Management Can Add Article- kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And  I verify "Can Add article" permission by I clicking on "Article" button to create an Article
    #     Then I click on "Standard" article type
    #     Then the articles editor view is displayed
    #     When change the type of the text to "HTML" option from the dropdown
    #     When I add the title in "Manager User Article Title" field
    #     And I add "Manager User Article Content" in CK Editor text area
    #     And I choose language "English" from the language dropdown
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then The article "Article to test by Manager" is created by a "Manager" user

    # Scenario:Article Management checked permission- Can delete article (kb:manager)
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     When I open the article "Article to test by Manager" from the list view and I Delete the article
    #     Then the manager user has access to Delete the article "Article to test by Manager"

    # Scenario: Article Management Can Edit Article- kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I verify "Can Edit article" permission by accessing the article "Test Article" in the list
    #     Then As a manager user I can edit the article
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the "Add Comment" in the text area to the current version
    #     And Add the comment and save article button is enabled and click on "Add comment and save article" button

    # Scenario: Article Management Can edit article favourite status- kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I verify "Can edit article favourite status" permission by accessing the article "Test Article" in the list
    #     And I Edit article favourite status by clicking on a star mark
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the "Add Comment" in the text area to the current version
    #     And Add the comment and save article button is enabled and click on "Add comment and save article" button

    # Scenario: Article Management Can edit article visibility flag- kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I verify "Can edit article visibility flag" permission by accessing the article "Test Article" in the list
    #     And tick mark the visibility check box as "Visible"
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the "Add Comment" in the text area to the current version
    #     And Add the comment and save article button is enabled and click on "Add comment and save article" button

    # Scenario: Article Management Can add tag to article - kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I verify "Can add tag to article" permission by accessing the article "Test Article" in the list
    #     And I add tags to the article
    #     Then The tags are added by manager Successfully

    # Scenario: Article Management Can delete tag to article - kb:Manager permissions
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I verify "Can delete tag to article" permission by accessing the article "Test Article" in the list
    #     And delete the selected tag name

    # Scenario:Article Management checked permission- Can add article content (kb:manager)
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     When I open the article "Test Article" to add language articles
    #     And I click on "Add" Button next to English language article
    #     And I click on choose language dropdown and choose language "Norwegian" from the language dropdown
    #     And I will click on "add" Button
    #     Then The choosen language is flag is displayed with content editor
    #     When change the type of the text to "HTML" option from the dropdown
    #     When I add the title in "Norwegian Article" field
    #     And I add "Norwegian Content" in CK Editor text area
    #     And tick mark the visibility check box as "Visible"
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the "Add Comment" in the text area to the current version
    #     And Add the comment and save article button is enabled and click on "Add comment and save article" button
    #     Then the manager is sucessfully added article content and Language flag  have appered in the list of articles

    # Scenario:Article Management checked permission- Can delete article content (kb:manager)
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     When I open the article "Test Article" to add language articles
    #     And verifying "Can delete article content" permission by deleting the language article
    #     Then the "Add Comment" in the text area to the current version
    #     And Add the comment and save article button is enabled and click on "Add comment and save article" button
    #     Then the manager is sucessfully deleted article content and Language flag is not displayed in the list of articles

    # Scenario:Article Management checked permission- Can set Article Published Status- kb:manager
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And verify checked permisssion "Can set Article Published Status" permission for the article"Test Article" and change the Article Status to "PUBLISHED" from the dropdown
    #     Then the manager sucessfully set article to "Published" state

    # Scenario:Article Management checked permission- Can Add article attachment- kb:manager
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I open the article "Test Article" from the list view of articles
    #     And verify checked permission "Can add article attachment" by attaching a file from "Test 2" folder
    #     Then the manager user sucessfully attached a file to the article

    # Scenario:Article Management checked permission- Can delete article attachment- kb:manager
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Manager" category
    #     And I open the article "Test Article" from the list view of articles
    #     And verify checked permission "Can delete article attachment" by deleting the attachment
    #     Then the manager user sucessfully deleted article attachment

