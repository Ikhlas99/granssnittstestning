Feature: Get result from the serchfield
  As a user I want to reserch different issue
  by entering these at the different serchfield.


  Scenario: Reserch at the help center
    Given I am at the search page
    When I click on menu
    And I click at Help Center
    And I entered "How can I delete personal information IMDB stores about me?" in the searchfield
    And I click at the search button to get the result


  Scenario: Reserch at the Jobs
    Given I am at the search page
    When I click on Jobs
    And I entered the text "Software Test Engineer"
    And I entered at the another serchfiled "Stockholm, Stockholm County, Sweden"
    And I click at the search button to get the result
    Then I expect get a list of "Software test engineer"
    And sorted by Most recent
