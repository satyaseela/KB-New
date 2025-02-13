# Feature: Folder Management

#     Scenario: Successful log in to KB Admin application
#           Given I am logged in as a admin
            # And I accessd "Knowledge" application from the admin main menu
            # Then the Knowledgebase Banner is displayed
     
#     Scenario:  Creating a Folder
#         Given I am on knowledgebase admin home page
#         When navigating to the folders menu item
#         And clicking on "Create new folder" to create a folder
#         Then the folder "Test 4" is created and displayed in the list of folders

#     Scenario: Renaming a folder
#         Given I am on knowledgebase admin home page
#         When navigating to the folders menu item
#         And selecting the folder "Test 4" and Rename it as "Testilo 4"
#         Then the folder is displayed with the new name "Testilo 4"

#     Scenario: Delete a folder
#           Given I am on knowledgebase admin home page
#           When navigating to the folders menu item
#           And selecting the folder "Testilo 4" and delete it
#          Then the deleted folder "Testilo 4" is not existed in the list of folders

#     Scenario:  Creating a SubFolders inside the folder
#         Given I am on knowledgebase admin home page
#         When navigating to the folders menu item
#         And clicking on "Create new folder" to create a Main folder "Test Folder"
#         Then the folder "Test Folder" is created and displayed in the list of folders
#         When clicking on "Create new folder" to create a subfolders under main "Test Folder"
#         # Then the subfolders are displayed under main folder