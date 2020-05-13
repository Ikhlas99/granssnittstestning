Feature:Add choices
  As a user I'm interesting to add choices to my account
  to keep track of what I want to watch


  Scenario:
    Given that I'm interested to searching IMDB
    And they are clickable menu there
    When I click on an item
    And I see a summary about the show
    Then I should also see a buton "add to watchlist"


