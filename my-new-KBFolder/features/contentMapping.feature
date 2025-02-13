Feature: Content Mapping
    Scenario: Login to Puzzel id 
       Given I am logged in as a admin
       And I accessd "Knowledge" application from the admin main menu
       Then the Knowledgebase Banner is displayed
       

    Scenario: Content Mapping- Can Map Article to Category
        Given I am on knowledgebase admin home page
        When I click on the selcted "Permissions Category for Author" category
        And I open the article "Article that is for mapping" from the list view of articles
        And I map Article by clicking "Map category" button and Mapping the article to "Category for author to Test" category
        Then the Article is mapped to the "Category for author to Test" category
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category: Category for Author to Test in widget
        Then the article "Article that is for mapping" is mapped to Category: Category for Author to Test in Widget


    Scenario:Content Mapping - Can Map Article to Section
        Given I am on knowledgebase admin home page
        When I click on the selcted "Permissions Category for Author" category
        And I open the article "Article that is for mapping" from the list view of articles
        And to map an Article to section click on  "Map section" button and Map the article to "new bee 1" section
        Then the article is mapped to the "new bee 1" section
        Then the "Save" button is enabled
        When I click the "Save" button to save the article
        Then the "Add Comment" in the text area to the current version
        And Add the comment and save article button is enabled and click on "Add comment and save article" button
         When I switch to Knowledgebase Widget in Agent Application
        And open the selected category: Category for Author to Test in widget
        And I click on "new bee 1" section in the Widget
        Then the article "Article that is for mapping" is mapped to Section: new bee 1 in Widget



    Scenario:Content Mapping - Can Map Article to Article
        Given I am on knowledgebase admin home page
        When I click on the selcted "Permissions Category for Author" category
        And I open the article "Article that is for mapping" from the list view of articles
        And I click on "Map article" button and Map Artice to another article
        Then the article is mapped another article
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category: Category for Author to Test in widget
        And open the Article "Article that is for mapping" in the widget
        And Click on related article "Latest Article to test" that is mapped to the article:Article that is for mapping
        Then The related Article is displayed with its title "Latest Article to test" and content
        And the article "Article that is for mapping" is mapped to article:Latest Article To Test
        When I navigate back to the KB Admin
        And I signOut from puzzelid accout
