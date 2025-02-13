# Feature: Successful login to KB Admin application
#     Scenario: Successful log in to KB Admin application
#         Given Navigate to KB Admin page
#         And Login page is displayed
#         When I enter the credentials for agent
#         Then I am logged to the puzzel ID KB Admin application
     
#      Scenario:Content Mapping Unchecked permission - Can Map Article to Category (kb:agent)
#         Given I am on knowledgebase admin home page
#         When I click on the selcted "Permissions Category for Agent" category
#         And I open the article "Article mapping test" from the list view of articles
#         And I verify "Can Map Article to Category" unchecked agent permission by using "Map category" button and Mapping the article to "News Category" category
#         Then the Agent is not able to map the article to the "News Category" category

#     Scenario:Content Mapping Unchecked permission - Can Map Article to Section (kb:agent)
#          Given I am on knowledgebase admin home page
#          When I click on the selcted "Permissions Category for Agent" category
#          And I open the article "Article mapping test" from the list view of articles
#          And verify "Can Map Article to Section" unchecked permission by using "Map section" button and Mapping the article to "Section 1" section
#         Then the Agent is not able to map the article to the "Section 1" section


    # Scenario:Content Mapping Unchecked permission - Can Map Article to Article (kb:agent) 
    #     Given I am on knowledgebase admin home page
    #     When I click on the selcted "Permissions Category for Agent" category
    #     And I open the article "Article mapping test" from the list view of articles
    #     And verify "Can Map Article to Article" permission by using "Map article" button and Mapping the article to article
    #     Then the Agent is not able to map the article to the article