Feature: Rating som program
  As A user I'am intersted to Rating
  som program somtimes.

  Background:Login in IMDB
    Given I am on IMDB website
    And I click at sign in
    And I click sign in with IMBD
    And I log into the my account with credentials
    And the last click sign in

  Scenario: Rate an Item
    Given that I click on menu
    And I choose 'Browse Tv Shows by Genre'
    And I pick 'COMEDY' from the list
    When I choose 'The Wrong Missy'
    Then I Rate This

