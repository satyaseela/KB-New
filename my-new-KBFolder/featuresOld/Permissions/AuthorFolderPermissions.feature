# Feature: Author folder permissions
#     Scenario:Successful log in to KB Admin application as a Manager user
#          Given Navigate to KB Admin page
#          And Login page is displayed
#          When I enter the credentials for author
#          Then I am logged to the puzzel ID KB Admin application

    # Scenario: Verify the kb:author got access to the test 3 folder
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     Then the "author" user got access to folder "Test 3" and is displayed 
    
    # Scenario: Verify Checked Predefined Folder Management permissions Can access Folder -kb:author
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify checked permission "Can Access Folder" by accessing the folder "Test 3"
    #     Then The "author" user successfully accesed the Folder "Test 3"

    # Scenario: Verify UnChecked Predefined Folder Management permissions Can add Folder -kb:author
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify checked permission "Can Add Folder" and add a folder under "Test 3" by selecting "Create new folder" 
    #     Then the author user don't have a permission to create new folder and error message is displayed

    # Scenario:Verify Unchecked Predefined Folder Management permissions Can Edit Folder -kb:author
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify unchecked permission "Can Edit Folder" by selecting the folder "Test 3" and Rename it
    #     Then the author is not allowed to edit the folder name and folder was not renamed

    # Scenario: Verify Checked Predefined Folder Management permissions Can Delete Folder -kb:author
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify checked permission "Can delete Folder" by selecting the folder and delete it

    # Scenario: Verify Checked Predefined Folder Management permissions Can assign Folder access Roles/Permissions -kb:author
    #     Given I am on the Permissions page in the knowledgebaseadmin application
        # When I click on the "Create Access Level" button to create an access level
        # Then the "Custom" access level tab is displayed
        # When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:agent" 
        # And I assign a Source "selectedUsersAndGroups" to a User "Satya Agent Puli" 
        # And I click on Select Folders dropdown and select "Test 3"
        # And click on the "Save" button
        # Then the "kb:agent" access level for Folder "Test 3" is not created and not displayed in the list view of accesslevels
