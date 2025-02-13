# Feature: Manager section Mnagement permissions
#     Scenario: Successful log in to KB Admin application as a manager user
#         Given I am logged in as a manager

#     Scenario:Section Management Checked permission - Can Access Section- kb:manager 
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Test Permissions Category" category
#         When verifying "Can access Section" permission by accessing the Section "Section 1" in the list
#         Then the list of Articles inside the section is displayed 

#     Scenario:Section Management Checked permission - Can Edit Section- kb:manager  
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Test Permissions Category" category
#         And  verifying the checked permission "Can Edit Section" by attempting to edit the "Section 3" section
#         Then the "manager" is allowed to edit the section
    
#      Scenario:Section Management checked permission - Can Add Section- kb:manager 
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Test Permissions Category" category
#         And I verify the checked permission "Can Add Section" by attempting to add the "Section 4" section
#         Then as per the unchecked permission, the section name "new bee 4" should not display in the list view of sections

#      Scenario:Section Management checked permission - Can delete Section- kb:manager
#          Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Category for author to Test" category
#         And I verify the unchecked permission "Can Delete Section" by attempting to delete the "new bee 3" section
#         Then the author is not allowed to delete the section, and "new bee 3" is still displayed under the category list view of sections