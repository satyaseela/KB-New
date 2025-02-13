Feature: Audience Groups
   Scenario: Login to Puzzel id 
     Given I am logged in as a admin
        And I accessd "Knowledge" application from the admin main menu
       Then the Knowledgebase Banner is displayed

     Scenario: Create Audience in Settings Page
         Given I am on knowledgebase admin home page
         When I navigated to "Settings" page
         Then the "Audience" tab is displayed
         When I click on "Create Audience" to create an Audience
         And I create a new audience "Audience1" 
         And I include Inline Styling ON with checkbox clicked and Save
         Then the audience "Customer1" view is created successfully with include styling ON 
         When I click on "Create Audience" to create an Audience
         And I create a new audience "Audience2"
         And I dont include Inline Styling and Save
         Then the audience "Customer2" view is created successfully with include styling OFF

    Scenario: Remove Audience in Settings Page
        Given I am on knowledgebase admin home page
        When I navigated to "Settings" page
        Then the "Audience" tab is displayed
        When I delete the audience "Customer1"
        Then The "Customer1" audience is removed from the audience group table
        When I delete the audience "Customer2"
        Then The "Customer2" audience is removed from the audience group table

    Scenario: Edit Audience in Settings Page
        Given I am on knowledgebase admin home page
        When I navigated to "Settings" page
        Then the "Audience" tab is displayed
        When I click on "Create Audience" to create an Audience
        And I create a new audience "Audience3" 
        And I include Inline Styling ON with checkbox clicked and Save
        Then the audience "Satya" view is created successfully 
        When I edit the Audience "Satya" to change audience name to "Satya SS" and Save
        Then the audience "Satya SS" view is created successfully
        When I delete the audience "Satya SS"
        Then The "Satya SS" audience is removed from the audience group table
    
    

    Scenario: Audience Groups     
        Given I am on knowledgebase admin home page
        When I click on the selcted "Test Permissions Category" category
        And I open the article "Audience Groups Test" to add alaternative views
        And I Click on "Add allternative view" Symbol
        Then The Add alternative View model box is displayed
        When I Check the "Agent" view checkbox 
        Then the "Agent" view checkbox is selected
        When I click on "Save" button to add the view
        Then The "Agent" view is added next to the Default view
        When I Click on "Add allternative view" Symbol
        When I Check the "Mobile" view checkbox 
        Then the "Mobile" view checkbox is selected
        And I click on "Save" button to add the view
       

    Scenario: Verify Agent View inherits title and content from Default View in Admin
        Given I am on knowledgebase admin home page
        When I click on the selcted "Test Permissions Category" category
        And I open the article "Audience Groups Test" from the list view of articles
        When I switch to "Agent" view in "Admin"
        Then "Agent" view title and content should be inherited from Default view
       

    Scenario: Verify Agent View inherits title and content from Default View in Widget
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "Test Permissions Category" in widget
        And open the Article "Audience Groups Test" in the widget
        And I switch to "Agent" view in "Widget"
        Then the "Agent" View title and content in Widget should match those inherited from the Default View in Admin

    Scenario: Verify Mobile View inherits title and content from Default View
        Given I am on knowledgebase admin home page
        When I click on the selcted "Test Permissions Category" category
        And I open the article "Audience Groups Test" from the list view of articles
        When I switch to "Mobile" view in "Admin"
        Then "Agent" view title and content should be inherited from Default view


    Scenario: Verify Mobile View inherits title and content from Default View in Widget
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "Test Permissions Category" in widget
        And open the Article "Audience Groups Test" in the widget
        And I switch to "Mobile" view in "Widget" 
        Then the "Agent" View title and content in Widget should match those inherited from the Default View in Admin 
    
    Scenario: Removing the audience groups in Admin
        Given I am on knowledgebase admin home page
         When I click on the selcted "Test Permissions Category" category
         And I open the article "Audience Groups Test" from the list view of articles
         And I Click on "Add allternative view" Symbol
         Then The Add alternative View model box is displayed
         When I uncheck the "Agent" view checkbox 
         When I click on "Save" button to remove the added view
         Then The "Agent" view is removed next to the Default view
         And I Click on "Add allternative view" Symbol
         When I uncheck the "Mobile" view checkbox 
         When I click on "Save" button to remove the added view
        Then The "Mobile" view is removed next to the Default view
    
    Scenario: Verify Article with Alternative Views is Removed from Widget
        When I switch to Knowledgebase Widget in Agent Application
        And open the selected category "Test Permissions Category" in widget
        And open the Article "Audience Groups Test" in the widget
        Then "Agent" View and Mobile views are not displayed
        When I navigate back to the KB Admin
        And I signOut from puzzelid accout