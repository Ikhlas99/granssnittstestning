Feature: As a user I want to search a movie by using different filters

Background: I am on the site
    Given that I am on the IMDB website

Scenario: Search non-existing movie/tvShow
    When I type "i90232199" in search box
    And I click on search button
    Then I should get an error message "No results found"

Scenario: Search a movie and see its details
    When I write "The Dark Knight" in search box
    And I press down arrow and press ENTER key
    Then I should be navigated to the details page of "The Dark Knight"

 Scenario: Finding robot movies
    Given that I have pressed the All-DropDownMenu Button to expand search filters
    And that I select 'Keywords' in the drop-down menu
    And write "robot" in the searchfield, I should see list of matching keywords
    And that i click a link "robot"
    And that I have pressed the Sort by drop-down to expand sort filters
    And that I select 'IMDb Raing' in the drop-down menu
    Then i should see results sorted by rating in descending order

 
