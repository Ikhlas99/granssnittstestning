Feature: Rate a movie

  Scenario: Rate the movie "Click"
    When i write the movie "click" on the search field
    And click the search button
    Then the first result you should get is "click" (the movie)
    And click on the movie "Click"
    And click on "Rate this"
    And rate it between 1-10 stars.

  Scenario:User reviews
    Given that I'am already on the IMDB website
    And I already have an account and are logged in
    When I want to read som review before I watche the movie.
    Then it shoud be able to see a button too "Reviews"

