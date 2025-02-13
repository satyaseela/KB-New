# Feature: Create Access Levels for diffrent users
#     Scenario: Successful log in to KB Admin application
#         Given I am logged in as a admin

    # Scenario: Creating Access level for Manager User
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on the "Create Access Level" button to create an access level
    #     Then the "Custom" access level tab is displayed
    #     When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:manager"
    #     And I select users radio button to select the puzzelID user
    #     And I assign a Source "selectedUsersAndGroups" to a User "Satya Manager Puli (satya.puli+manager@puzzel.com)" 
    #     # And I click on "selectedClients" Puzzel Client Application dropdown and slecet client application "KnowledgeBase Client 19000"
    #     And I click on Select Categories and Sections dropdown and select "New Category for Manager"
    #     And click on the "Save" button
    #     Then the "kb:manager" access level for Resource "New Category for Manager" is created and redirect to list view of accesslevels


    # Scenario: Creating Access Levle for Author user
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on the "Create Access Level" button to create an access level
    #     Then the "Custom" access level tab is displayed
    #     When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:author"
    #     And I select users radio button to select the puzzelID user
    #     And I assign a Source "selectedUsersAndGroups" to a User "Satya Author Puli (satya.puli+author@puzzel.com)"
    #     # And I click on "selectedClients" Puzzel Client Application dropdown and slecet client application "KnowledgeBase Client 19000"
    #     And I click on Select Categories and Sections dropdown and select "New Category for Author"
    #     And click on the "Save" button
    #     Then the "kb:author" access level for Resource "New Category for Author" is created and redirect to list view of accesslevels

    # Scenario: Creating Access Levle for Agent user
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on the "Create Access Level" button to create an access level
    #     Then the "Custom" access level tab is displayed
    #     When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:agent"
    #     And I select users radio button to select the puzzelID user
    #     And I assign a Source "selectedUsersAndGroups" to a User "Satya Agent Puli (satya.puli+agent@puzzel.com)"
    #     # And I click on "selectedClients" Puzzel Client Application dropdown and slecet client application "KnowledgeBase Client 19000"
    #     And I click on Select Categories and Sections dropdown and select "New Category for Agent"
    #     And click on the "Save" button
    #     Then the "kb:agent" access level for Resource "New Category for Agent" is created and redirect to list view of accesslevels

    # Scenario:Deleting kb:manager Access level
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on "kb:manager" access level for resource "New Category for Manager" delete button
    #     And I click on delete button in the delete content access pop up
    #     Then the "kb:manager" access level for resoucer "New Category for Manager" is deleted

    # Scenario:Deleting kb:author Access level
    #      Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on "kb:author" access level for resource "New Category for Author" delete button
    #     And I click on delete button in the delete content access pop up
    #     Then the "kb:author" access level for resoucer "New Category for Author" is deleted

    # Scenario:Deleting kb:agent Access level
    #     Given I am on the Permissions page in the knowledgebaseadmin application
    #     When I click on "kb:agent" access level for resource "New Category for Agent" delete button
    #     And I click on delete button in the delete content access pop up
    #     Then the "kb:agent" access level for resoucer "New Category for Agent" is deleted

    # Scenario:Creating Access level assigning it to puzzelID Groups
