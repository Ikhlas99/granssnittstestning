Feature: Rate a movie

You want to give a rating after you watched a movie.

Background
Given that i am already on the IMDB website
And i already have an account and are logged in

Scenario: Rate the movie "Click"
When i write the movie "click" on the search field
And click the search button  
Then the first result you should get is "click" (the movie)
And click on the movie "Click" 
And click on "Rate this"
And rate it between 1-10 stars.