Feature: As a user I want to search a movie by using different filters

Background: I am on the site
    Given that I am on the IMDB site

 Scenario: Finding robot movies
    Given that I have pressed the All-DropDownMenu Button to expand search filters
    And that I select 'Keywords' in the drop-down menu
    And write "robot" in the searchfield, I should see list of matching keywords
    And that i click a link "robot"
    And that I have pressed the Sort by drop-down to expand sort filters
    And that I select 'IMDb Raing' in the drop-down menu
    Then i should see results sorted by rating in descending order

 
