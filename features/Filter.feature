Feature: As a user I want to filter the movies and TV shows 
country- and languagewise + animated or real movies etc.

Scenario: Filter a movie or a TV show by chossing to a specific country.
Given that I have chosen to filter out a list of Indian Movies and shows.
When I have selected this 
Then I should get a list of all available Indian movies 
And TV shows available on the site.

Scenario: Different movie types
Given that I write for humorous/comedy movies in the search field
When I have selected the movie type
Then I should get a list of comedy films 
And 'Never Have I Ever' will also be shown in the search result.

Scenario: Animated movies
Given that I have searched for the animated movies.
Then I would be able to see all the animated movies available on the site.
And I should not get any spirited movies on the screen then.
