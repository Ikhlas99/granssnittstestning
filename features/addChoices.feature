Feature:Add choices
  As a user I'm interesting to add choices to my account
  to keep track of what I want to watch

  Background:Login in IMDB
    Given I am on IMDB website
    And I click at sign in
    And I click sign in with IMBD
    And I log into the my account with credentials
    And the last click sign in


  Scenario:
    Given that I click on menu
    Then I click the Top Rated Movies
    And I click on the favorite movie 'Nyckeln till frihet'
    And I should be able to add the item to my watchlist








