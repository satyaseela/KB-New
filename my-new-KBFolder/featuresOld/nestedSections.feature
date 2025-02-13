# Feature: Nested Sections

#     Scenario: Login to Puzzel id
#         Given I am logged in as a admin
#         And I accessd "Knowledge" application from the admin main menu
#         Then the Knowledgebase Banner is displayed

#     Scenario: Create a Category
#         And I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I check if the category "Testing Category" exists
#         Then I create the category "Testing Category" if it does not exist
#         Then the category "Testing Category" is displayed in the list view of categories
#         When I switch to Knowledgebase Widget in Agent Application
#         Then the category "Testing Category" is displayed in the widget


#     Scenario: Createtion of nested sections
#         Given I am on knowledgebase admin home page
#         When I click on "Edit menu" to Edit the Category list view
#         When I click on the selcted "Testing Category" category
#         Then I check if the 10 sections already exist within the category
#         And I create 10 sections within the category if they do not exist
#         When I switch to Knowledgebase Widget in Agent Application
#         And I click on the selcted "Testing Category" category
#         Then the 10 sections are displayed in the widget
#         And I signOut from puzzelid accout
