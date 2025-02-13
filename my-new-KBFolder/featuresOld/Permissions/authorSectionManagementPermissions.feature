# Feature: Successful login to KB Admin application
#     Scenario: Successful log in to KB Admin application
#         Given Navigate to KB Admin page
#         And Login page is displayed
#         When I enter the credentials for author
#         Then I am logged to the puzzel ID KB Admin application

#     Scenario:Section Management Checked permission - Can Access Section- kb:author 
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Category for author to Test" category
#         When I verify "Can access Section" permission by accessing the Section "new bee 1" in the list
#         Then the list of Articles inside the section is displayed 

#     Scenario:Section Management Checked permission - Can Edit Section- kb:author  
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Category for author to Test" category
#         And I verify the checked permission "Can Edit Section" by attempting to edit the "new bee 2" section
#         Then the "author" is allowed to edit the section
    
#      Scenario:Section Management Unchecked permission - Can Add Section- kb:author 
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Category for author to Test" category
#         And I verify the checked permission "Can Add Section" by attempting to add the "new bee 4" section
#         Then as per the unchecked permission, the section name "new bee 4" should not display in the list view of sections

#      Scenario:Section Management Unchecked permission - Can delete Section- kb:author
#          Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Category for author to Test" category
#         And I verify the unchecked permission "Can Delete Section" by attempting to delete the "new bee 3" section
        # Then the author is not allowed to delete the section, and "new bee 3" is still displayed under the category list view of sections

        

    

    