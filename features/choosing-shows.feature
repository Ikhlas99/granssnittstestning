Feature:A list of shows
  As a user of IMDB I want to be able
  to see a list of interesting shows.

  Scenario: Search IMDB
    Given that I'm at the search page
    When I click menuitem "what's on tv & streaming"
    And I choose the text "IMDb Home School: Educational Picks for Kids"
    Then I should get a list of intersting shows

