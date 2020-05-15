Feature: As a user I want to search a movie by using different filters

Background: I am on the site
    Given that I am on the IMDB site
    And I have pressed the menu-button to expand links of the site

Scenario: Finding top movies
    When I press the "Top Rated Movies"
    Then I should get list of the top rated movies