# Feature: Manager folder permissions
#     Scenario:Successful log in to KB Admin application as a Manager user
#          Given Navigate to KB Admin page
#          And Login page is displayed
#          When I enter the credentials for manager
#          Then I am logged to the puzzel ID KB Admin application

#     Scenario: Verify the kb:manager got access to the test 2 folder
#         Given I am on knowledgebase admin home page
#         When navigating to the folders menu item
#         Then the "manager" user got access to folder "Test 2" and is displayed 
    
#     Scenario: Verify Checked Predefined Folder Management permissions Can access Folder -kb:manager
#         Given I am on knowledgebase admin home page
#         When navigating to the folders menu item
#         And Verify checked permission "Can Access Folder" by accessing the folder "Test 2"
#         Then The "manager" user successfully accesed the Folder "Test 2"

    # Scenario: Verify Checked Predefined Folder Management permissions Can add Folder -kb:manager
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify checked permission "Can Add Folder" and add a folder under "Test 2" by selecting "Create new folder" 
    #     Then the manager user successfuly adds a new folder named "SubTest 1"

    # Scenario:Verify Checked Predefined Folder Management permissions Can Edit Folder -kb:manager
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify checked permission "Can Edit Folder" by selecting the folder "New Test" and Rename it
    #     Then the managere is allowed to edit the folder name

    # Scenario: Verify Checked Predefined Folder Management permissions Can Delete Folder -kb:manager
    #     Given I am on knowledgebase admin home page
    #     When navigating to the folders menu item
    #     And Verify checked permission "Can delete Folder" by selecting the folder and delete it

    # Scenario:Verify Checked Predefined Folder Management permissions Can Add File -kb:manager
    #      Given I am on knowledgebase admin home page
    #      When navigating to the folders menu item
    #      And Verify chcecked permission "Can Add File" by adding a file to "Test 2" Folder
        #  Then Manager is successfully added file to the folder

    # Scenario:Verify Checked Predefined Folder Management permissions Can delete File -kb:manager
    #     Given I am on knowledgebase admin home page
    #      When navigating to the folders menu item
    #      And Verify chcecked permission "Can Delete File" by deleting a file from "Test 2" Folder
    #      Then Manager is successfully added file to the folder