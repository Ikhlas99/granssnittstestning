Feature: As a user I want to search a movie by using different filters

  Background: I am on the site
    Given that I am on the IMDB website
    And I have clicked the hamburger menu to expand links of the site

  Scenario: Find top rated movies
    When I press the "Top Rated Movies"
    Then I should get non-empty list of the top rated movies

  Scenario: Find upcoming movies
    When I press "Coming Soon" to see list of upcoming movies for current month
    And I click "Next" to show upcoming movies for next month
    Then I should see movies list upcoming in next month
  
