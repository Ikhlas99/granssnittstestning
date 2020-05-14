Feature:A list of Tv shows
  As a user of IMDB I want to be able
  to see a list of interesting tv shows.

  Scenario: Search IMDB
    Given that I'm at the search page
    When I click a menuItem "what's on tv & streaming"
    And I click the element "IMDb Home School: Educational Picks for Kids"
    Then I should get a list of intersting tv shows

  Scenario: Seaching after specific information
    Given that I'am at the IMDB sajt
    When I click "Top Rated Shows" elemnt
    Then I should see a list of the elemnt
    And ranking by 'Number of Ratings'



