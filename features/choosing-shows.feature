Feature:A list of Tv shows
  As a user of IMDB I want to be able
  to see a list of interesting tv shows.

  Scenario: Search IMDB
    Given that I'm at the search page
    When I click a menu item "what's on tv & streaming"
    And I choose the text "IMDb Home School: Educational Picks for Kids"
    Then I should get a list of intersting tv shows

  Scenario: Seaching after specific information
    Given that I entered IMDB sajt
    And I want to see a specific shows
    When I click on the specific shows
    Then I expect to be able to see a summary text about the program



