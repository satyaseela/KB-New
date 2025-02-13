# Feature: Manager User Category Management Permissions
#     Scenario: Successful log in to KB Admin application as a manager user
#          Given I am logged in as a manager

#     Scenario: Category Management Checked permission - Can Access Category- kb:manager 
#         Given I am on knowledgebase admin home page
#         When I verify "Can access category" permission by accessing the Category "Permissions Category for Manager" in the list
#         Then the list of Articles inside the category is displayed 
       
#     Scenario: Category Management Unchecked permission- Can Add Category- kb:manager 
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         Then The "Add Category" field is displayed
#         When I click on "Add Category" button
#         Then add category model box is displayed
#         When I enter the category name in model box displayed
#         And I select the category type "Default" from dropdown options
#         And I click on "Create" button that creates a category
#         Then as per the unchecked permission, the category name "Test Automation Category" should not display in the list view of categories

#     Scenario: Category Management Unchecked permission- Can Delete Category- kb:manager 
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         And I verify the unchecked permission "Can Delete Category" by attempting to delete the "Permissions Category for Manager" category
#         Then the "manager" is not allowed to delete the category, and "Permissions Category for Manager" is still displayed in the category list view

#     Scenario:Category Management checked permission- Can Edit Category- kb:manager 
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         And I verify the checked permission "Can Edit Category" by attempting to edit the Manager Test category
#         Then the manager user allowed to edit the category

#     Scenario: Category Management Checked permission - Can assign section access roles/permissions - kb:manager 
#         Given I am on the Permissions page in the knowledgebaseadmin application
#         When I click on the "Create Access Level" button to create an access level
#         Then the "Custom" access level tab is displayed
#         When I click on "selectedPermissionSchemes" Select Permission Scheme dropdown and select Permission Scheme "kb:agent" 
#         And I assign a Source "selectedUsersAndGroups" to a User "Satya Agent Puli" 
#         And I click on Select Categories and Sections dropdown and select "News Category"
#         And click on the "Save" button
#         Then the "kb:agent" access level for Resource "News Category" is created and redirect to list view of accesslevels