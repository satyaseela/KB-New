# Feature:Key metrics in Dashboard

#      Scenario: Verify the Dashboard menu item
#          Given I am logged in as a admin
#          When I navigated to "Dashboard" page
#          Then Key metrics in a dashbord are displayed

#     Scenario: Create a article in published status and verify the article published total count
#         Given I am on knowledgebase dashbord page
#         When I Select the category "Test Category" fron the sections and categories dropdown
#         And I capture the articles published total count
#         Then I navigated  back to "Articles" menu item
#         When I click on the selcted "Test Category" category
#         And I click on "Article" button to create an Article
#         Then I click on "Standard" article type
#         Then the articles editor view is displayed
#         When change the type of the text to "HTML" option from the dropdown
#         When I add the title in "Published State Article Title" field
#         And I add "Published State Article Content" in CK Editor text area
#         And I choose language "English" from the language dropdown
#         And tick mark the visibility check box as "Visible"
#         And I set article status to "PUBLISHED" state
#         Then the "Save" button is enabled
#         When I click the "Save" button to save the article
#         Then the article is created in Published state
#         When I navigated to "Dashboard" page
#         When I Select the category "Test Category" fron the sections and categories dropdown
#         And Select the "Today" option from the calander dropdown
#         Then I verify the articles published total count must increase by 1


    # Scenario: Create a article in review status and verify the article review total count  
    #     Given I am on knowledgebase dashbord page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And I capture the articles review total count
    #     Then I navigated  back to "Articles" menu item
    #     When I click on the selcted "Test Category" category
    #     And I click on "Article" button to create an Article
    #     Then I click on "Standard" article type
    #     Then the articles editor view is displayed
    #     When change the type of the text to "HTML" option from the dropdown
    #     When I add the title in "Review State Article Title" field
    #     And I add "Review State Article Content" in CK Editor text area
    #     And I choose language "English" from the language dropdown
    #     And tick mark the visibility check box as "Visible"
    #     And I set article status to "REVIEW" state
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     When I navigated to "Dashboard" page
    #       When I Select the category "Test Category" fron the sections and categories dropdown
    #       And Select the "Today" option from the calander dropdown
    #       Then I verify the articles review total count must increased by 1

    # Scenario:Create a article in drafts status and verify the article draft total count
    #     Given I am on knowledgebase dashbord page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And I capture the articles drafts total count
    #     Then I navigated  back to "Articles" menu item
    #     When I click on the selcted "Test Category" category
    #      And I click on "Article" button to create an Article
    #     Then I click on "Standard" article type
    #     Then the articles editor view is displayed
    #     When change the type of the text to "HTML" option from the dropdown
    #     When I add the title in "Draft State Article Title" field
    #     And I add "Draft State Article Content" in CK Editor text area
    #     And I choose language "English" from the language dropdown
    #     And tick mark the visibility check box as "Visible"
    #     And I set article status to "DRAFT" state
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the article is created in Draft state
    #     When I navigated to "Dashboard" page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And Select the "Today" option from the calander dropdown
    #     Then I verify the articles draft total count must increased by 1

    # Scenario: Make Article expired and verify the article Expired total count
    #     Given I am on knowledgebase dashbord page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And I capture the articles expired total count
    #     Then I navigated  back to "Articles" menu item
    #     When I click on the selcted "Test Category" category
    #     And I click on "Article" button to create an Article
    #     Then I click on "Standard" article type
    #     Then the articles editor view is displayed
    #     When change the type of the text to "HTML" option from the dropdown
    #     When I add the title in "Expired Article Title" field
    #     And I add "Expired Article Content" in CK Editor text area
    #     And I choose language "English" from the language dropdown
    #     And tick mark the visibility check box as "Visible"
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     And I open the article "Expired Article Test" from the list view of articles
    #     And I set the expiry date and time to "Jun" "11" "2023" "05" "35" "PM" from calander 
    #     Then the expired date should be set correctly
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the "Add Comment" in the text area to the current version
    #     And Add the comment and save article button is enabled and click on "Add comment and save article" button
    #     When I navigated to "Dashboard" page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And Select the "Today" option from the calander dropdown
    #     Then I verify the article epired total count must increased by 1

    # Scenario:Delete a article and verify the articles total count
    #     Given I am on knowledgebase dashbord page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And I capture the articles total count
    #     And I click on "Article" button to create an Article
    #     Then I click on "Standard" article type
    #     Then the articles editor view is displayed
    #     When change the type of the text to "HTML" option from the dropdown
    #     When I add the title in "Delete article Title" field
    #     And I add "Delete Article Content" in CK Editor text area
    #     And I choose language "English" from the language dropdown
    #     And tick mark the visibility check box as "Visible"
    #     Then the "Save" button is enabled
    #     When I click the "Save" button to save the article
    #     Then the article is created and navigated back to the list view of articles
    #     When I open the article "Delete Article Test" from the list view and I Delete the article
    #     Then the article "Delete Article Test" is Deleted in the list view of articles
    #     When I navigated to "Dashboard" page
    #     When I Select the category "Test Category" fron the sections and categories dropdown
    #     And Select the "Today" option from the calander dropdown
    #     Then I verify the article epired total count must decresed by 1


    # Scenario: Select a Date option "today" from calander and verify the total article view graph
    #     When I switch to Knowledgebase Widget Application
    #     And open the selected category "Test Category" in widget
    #     And open the Article "New article in published state" in the widget
    #     Then I logged in back to KB Admin Application
    #     When I navigated to "Dashboard" page
    #     And I Select the category "Test Category" fron the sections and categories dropdown
    #     And Select the "Today" option from the calander dropdown
    #     Then verify the article view graph count
        




