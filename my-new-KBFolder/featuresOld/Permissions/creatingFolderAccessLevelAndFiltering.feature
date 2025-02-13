# Feature: Successful login to KB Admin application
#     Scenario: Successful log in to KB Admin application
#         Given Navigate to KB Admin page
#         And Login page is displayed
#         When I enter the credentials for admin
#         Then I am logged to the puzzel ID KB Admin application
     
    #  Scenario: Create folder access levels for Manager user
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on the "Create Access Level" button to create an access level
    #     Then the "Custom" access level tab is displayed
    #     When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:manager" 
    #     And I assign a Source "selectedUsersAndGroups" to a User "Satya Manager Puli" 
    #     And I click on Select Folders dropdown and select "Test 2"
    #     And click on the "Save" button
    #     Then the "kb:manager" access level for Folder "Test 2" is created and redirect to list view of accesslevels

    # Scenario: Filter the created Manager Folder Access level in the list view
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When Clicking on Select Users or Groups dropdown filter and select "Satya Manager Puli"
    #     And Cliking on Select Resource Type drop-down filter and select "Folder"
    #     Then the "kb:manager" access level for Folder "Test 2" is displayed  

    
    # Scenario: Create folder access levels for Author user
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on the "Create Access Level" button to create an access level
    #     Then the "Custom" access level tab is displayed
    #     When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:author" 
    #     And I assign a Source "selectedUsersAndGroups" to a User "Satya Author Puli" 
    #     And I click on Select Folders dropdown and select "Test 3"
    #     And click on the "Save" button
    #     Then the "kb:author" access level for Folder "Test 3" is created and redirect to list view of accesslevels

    # Scenario: Filter the created Author Folder Access level in the list view
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When Clicking on Select Users or Groups dropdown filter and select "Satya Author Puli"
    #     And Cliking on Select Resource Type drop-down filter and select "Folder"
    #     Then the "kb:Author" access level for Folder "Test 3" is displayed  

    
    # Scenario: Create folder access levels for Agent user
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on the "Create Access Level" button to create an access level
    #     Then the "Custom" access level tab is displayed
    #     When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:agent" 
    #     And I assign a Source "selectedUsersAndGroups" to a User "Satya Agent Puli" 
    #     And I click on Select Folders dropdown and select "Test 4"
    #     And click on the "Save" button
    #     Then the "kb:agent" access level for Folder "Test 4" is created and redirect to list view of accesslevels

    # Scenario: Filter the created Author Folder Access level in the list view
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When Clicking on Select Users or Groups dropdown filter and select "Satya Agent Puli"
    #     And Cliking on Select Resource Type drop-down filter and select "Folder"
    #     Then the "kb:Agent" access level for Folder "Test 4" is displayed  
