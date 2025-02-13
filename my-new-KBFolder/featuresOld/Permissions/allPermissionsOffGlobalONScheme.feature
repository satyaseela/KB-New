# Feature: Custom Permission Scheme with Global Permissions Disabled
#     To ensure custom permissions do not interfere with existing configurations,
#     a custom permission scheme is created with all permissions turned off at the global level
#     and assigned to a user globally without specifying any resource.

#     Scenario: Create and Edit a Permission Scheme with Global Permissions Only
#         Given I am logged in as a admin
#         And I am on the Permissions page in the knowledgebaseadmin application
#         When I click on "Manage Permission Schemes" button to add a permissions Scheme
#         Then The "Manage Permission Schemes" tab is displayed
#         When I click on "Add Permission Scheme" button to add a Custom Permission Scheme
#         Then the Add permission Scheme modal box is displayed
#         When I enter "Custom Permission Scheme Name" and "Permission Scheme Description" in their input fields
#         And I click on "Add" button to add the permission scheme.
#          Then the "Testing Automation Scheme" permissions Scheme is added to the list of permissions Schemes

#         Given a new permission scheme is created with all permissions turned off
#         When I edit the permission scheme
#         And I enable only the global permissions
#         Then the permission scheme should be saved successfully
#         And only global permissions should be active
#         And all other permissions should remain disabled


    
