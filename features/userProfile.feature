Feature: User Profile
  As a user I want be able to chang
  My login and security when it nedded.

  Background:Login in IMDB
    Given I am on IMDB website
    And I click at sign in
    And I click sign in with IMBD
    And I log into the my account with credentials
    And the last click sign in

  Scenario: Changing of login detail
    Given That I choose account settings from my account
    And I sign in with IMDb
    And I Sign-In
    And I chang my user Id
    And I enterd a text into my Bio
    When I chang my password
    Then I expect that I can sign in with the new user Id
