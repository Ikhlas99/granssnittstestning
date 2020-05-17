Feature: Choose keyword
  As a user I want to pick som word from
  dropdown list and entered it in the searchfiled
  to get a list for the word.

  Scenario: Choose keyword and entered it
    Given I am at the search page
    When I click on menu
    And I click at Help Center
    And I entered "How can I delete personal information IMDB stores about me?" in the searchfield
    And I click at the search button
    Then I should get a result  of "How can I delete personal information IMDB stores about me?"
