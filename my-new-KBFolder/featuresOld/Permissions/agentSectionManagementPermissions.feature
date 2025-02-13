# Feature: Successful login to KB Admin application
#     Scenario: Successful log in to KB Admin application
#         Given Navigate to KB Admin page
#         And Login page is displayed
#         When I enter the credentials for agent
#         Then I am logged to the puzzel ID KB Admin application

#     Scenario:Section Management Checked permission - Can Access Section (kb:agent) 
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Satya Test" category
#         When I verify "Can access Section" checked permission by accessing the Section "child 1" in the list
#         Then the list of Articles inside the section is displayed 

    # Scenario:Section Management Unchecked permission - Can Edit Section (kb:agent)  
    #     Given I am on knowledgebase admin home page
    #     When I click on "Edit menu" to Edit the Category list view
    #     When I click on the selcted "Satya Test" category
    #     And I verify the unchecked permission "Can Edit Section" by attempting to edit the "child 2" section
    #     Then the agent is not allowed to edit the section and the section name "child 2" remains same
    
    #  Scenario:Section Management Unchecked permission - Can Add Section (kb:agent) 
    #     Given I am on knowledgebase admin home page
    #     When I click on "Edit menu" to Edit the Category list view
    #     When I click on the selcted "Satya Test" category
    #     And I verify the unchecked permission "Can Add Section" by attempting to add the new "child 9" section
    #     Then as per the unchecked permission, the section name "child 9" is not display in the list view of sections

    #  Scenario:Section Management Unchecked permission - Can delete Section (kb:agent)
    #      Given I am on knowledgebase admin home page
    #     When I click on "Edit menu" to Edit the Category list view
    #     When I click on the selcted "Satya Test" category
    #     And verify the unchecked permission "Can Delete Section" by attempting to delete the "child 2" section
    #     Then the agent is not allowed to delete the section, and "child 2" is still displayed under the category list view of sections

    

    
