#  Feature: Agent Article Management permissions

    # Scenario:Login to a KB application as a Agent user
    #      Given I am logged in as a agent

# #     

#     Scenario: Article Management Checked permission -Can Access Article (kb:agent) 
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I verify "Can access article" permission by accessing the article "New article for permissions" in the list
#         Then the "Agent" user Successfully accessed the article 

#     Scenario: Article Management Unchecked permission -Can Add Article (kb:agent) 
#         When I click on the selcted "Permissions Category for Agent" category
#         And  I verify "Can Add article" permission by I clicking on "Article" button to create an Article
#         Then the articles editor view is displayed
#         When change the type of the text to "HTML" option from the dropdown
#         When I add the title in "Agent User Article Title" field
#         And I add "Agent User Article Content" in CK Editor text area
#         And I choose language "English" from the language dropdown
#         Then the "Save" button is enabled
#         When I click the "Save" button to save the article
#         Then The article "Article to test by Agent" is not created by a "Agent" user and is not displayed in the list view of articles

#     Scenario: Article Management Unchecked permission -Can Edit Article (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I verify "Can Edit article" permission by accessing the article "New article for permissions" in the list
#         And As a Agent user I edit the article by changing it to "Header 5"
#         Then the "Save" button is enabled
#         When I click the "Save" button to save the article
#         Then the "Add Comment" in the text area to the current version
#         And Add the comment and save article button is enabled and click on "Add comment and save article" button
#         When Opening the same edited article "New article for permissions" then content in the CK:editor displays normal paragraph


#     Scenario: Article Management Unchecked permission -Can Edit Article Favourite status (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I verify "Can edit article favourite status" permission by accessing the article "New article for permissions" in the list
#         And I Edit article favourite status by clicking on a star mark
#         Then the "Save" button is enabled
#         When I click the "Save" button to save the article
#         Then the "Add Comment" in the text area to the current version
#         And Add the comment and save article button is enabled and click on "Add comment and save article" button
#         When Opening the same edited article "New article for permissions" 
#         Then Article Favourite status remains as not top article

#     Scenario:Article Management Unchecked permission -Can Edit Article Visibility Flag (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I verify "Can edit article visibility flag" permission by accessing the article "New article for permissions" in the list
#         And tick mark the visibility check box as "Visible"
#         Then the "Save" button is enabled
#         When I click the "Save" button to save the article
#         Then the "Add Comment" in the text area to the current version
#         And Add the comment and save article button is enabled and click on "Add comment and save article" button
#         When Opening the same edited article "New article for permissions" 
#         Then the article visibilty status remains unchecked

#     Scenario: Article Management Unchecked permission -Can add tag to article (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I verify "Can add tag to article" permission by accessing the article "New article for permissions" in the list
#         And I add tags to the article
#         Then The Agent dont have permission to add the tags

#     Scenario: Article Management Unchecked permission -Can delete tag to article (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I verify "Can delete tag to article" permission by accessing the article "Article with tags" in the list
#         And delete the selected tag name with in the article
#         Then the agent dont have permission to delte the tag name and tag is displayed in the tags list 

#     Scenario:Article Management Unchecked permission- Can set Article Published Status- kb:agent 
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I open the article "New article for permissions" from the list view of articles
#         Then verify unchecked permisssion "Can set Article Published Status" permission and that the Article Status "PUBLISHED" is not displayed in the dropdown
    
#     Scenario:Article Management Unchecked permission- Can delete article (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I open the article "Article with tags" from the list view of articles
#         And verify unchecked permisssion "Can Delete Article" permission by attempting to delete the "Article with tags" article in the list
#         Then the "agent" is not allowed to delete the article, and "Article with tags" article is still displayed in the editor view 

#     Scenario:Article Management Unchecked permission- Can delete article content (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I open the article "Article with tags" from the list view of articles
#         And verify unchecked permisssion "Can Delete Article Content" permission by attempting to delete the content in the article editor
#         When I click the "Save" button to save the article
#         Then the "Add Comment" in the text area to the current version
#         And Add the comment and save article button is enabled and click on "Add comment and save article" button
#         When Opening the same edited article "Article with tags" 
#         Then the "agent" is not allowed to delete the article content

#     Scenario:Article Management Unchecked permission- Can add article content (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         When I open the article "Article with tags" to add language articles
#         And I click on "Add" Button next to English language article
#         And I click on choose language dropdown and choose language "Norwegian" from the language dropdown
#         And I will click on "add" Button
#         Then The choosen language is flag is displayed with content editor
#         When change the type of the text to "HTML" option from the dropdown
#         When I add the title in "Norwegian Article" field
#         And I add "Norwegian Content" in CK Editor text area
#         And tick mark the visibility check box as "Visible"
#         Then the "Save" button is enabled
#         When I click the "Save" button to save the article
#         Then the "Add Comment" in the text area to the current version
#          And Add the comment and save article button is enabled and click on "Add comment and save article" button
#          Then the "agent" is not allowed to add the article content
       

    