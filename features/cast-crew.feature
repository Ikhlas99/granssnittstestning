Feature:
As a viewer I would be able to see all the cast and crew of any specific movie.

Scenario: See Cast list in a movie
Given that I am on the page of a specific movie
When I click the link "See full cast"
Then I expect to get a list with the names and pictures of the cast of that movie

Scenario: See specific Cast details
Given that I am on the page of a specific movie
When I click specific cast member
Then I expect to see its details page


