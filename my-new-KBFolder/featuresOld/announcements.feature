# Feature: Announcements

    # Scenario: Create Announcements Category to create Announcements
    #     Given I am logged in as a admin
    #     And I am on knowledgebase admin home page
    #     When I click on "Edit menu" to Edit the Category list view
    #     Then The "Add Category" field is displayed
    #     When I click on "Add Category" button
    #     Then add category model box is displayed
    #     When I enter the Announcements category name in model box displayed
    #     And I select the category type "ANNOUNCEMENTS" from dropdown options
    #     And I click on "Create" button that creates a category
    #     Then the category is displayed in the list view of categories

    # Scenario:Delete Announcement Category
    #     Given I am on knowledgebase admin home page
    #     When I click on "Edit menu" to Edit the Category list view
    #     And I delete the "Test Announcements Category" from the category list view
    #     Then the "Test Announcements Category" does not exists in the list view of categories

    #  Scenario:Creating an Announcement 
        # Given I am on knowledgebase admin home page
        # When I click on the selcted "Announcements Test" category
        # And I click on "Article" button to create an Article
        # Then the articles editor view is displayed
        # When change the type of the text to "HTML" option from the dropdown
        # When I add the title in "Announcement Article Title" field
        # And I add "Announcement Article Content" in CK Editor text area
        # And I choose language "English" from the language dropdown
        # And tick mark the visibility check box as "Visible"
        # And I set article status to "PUBLISHED" state
        # Then the "Save" button is enabled
        # When I click the "Save" button to save the article
        # When I switch to Knowledgebase Widget Application
        # And open the selected category "Announcements Test" in widget
        # Then the Announcement "Announcement for Test Automation" that is created in Admin should display in the Widget Application

    #   Scenario:Verify Announcement is displayed as a Banner
    #      When I Verify the latest Announcement banner have a Title and snippet of content in widget Application
    #      And I open the Announcement from banner
    #      Then the announcement "Announcement for Test Automation" is displayed

        # Scenario:Verify Announcement is displayed in notifications list
        #     When I click on notifications symbol to verify "Announcement for Test Automation" is displayed
        #    Then the "Announcement" Article "Announcement for Test Automation" from notifications is accessd

    # Scenario: Deleting Announcement Article
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Announcements Test" category
    #     And I open the article "Announcement for Test Automation" from the list view and I Delete the article
    #     Then the article "Announcement for Test Automation" is Deleted in the list view of articles
    #      When I switch to Knowledgebase Widget Application
    #      And open the selected category "Announcements Test" in widget
    #      Then the article "Announcement for Test Automation" that is created in Admin is not displayed in the widget
    #      And I verify the Banner to not display "Announcement for Test Automation" announcement
    #      And I verify the "Announcement" "Announcement for Test Automation" is deleted from notifications list
         
    
