Feature:A list of Tv shows
  As a user of IMDB I want to be able
  to see a list of interesting tv shows.

  Scenario: I want to see a list of interesting tv show
    Given I am on IMDB website
    When I click on menu
    And I choose to click on What's on TV & Streaming
    Then I should get a result of intersting tv shows


  Scenario: Seaching after specific information
    Given I am on IMDB website
    When I click on menu
    And I click on Top Rated Shows elemnt
    Then I should see a list of the elemnt
    And ranking by 'Release Date'



