Feature: 

Adding movies to my watchlist. 
Searching for movies/shows. I want to pick movies and save them to my watchlist.

Background
Given that i am scrolling through movies on IMDB

Scenario: 
Search and add the movie "Escape plan" to the watchlist
Given that i am already logged in to my account
When I enter Escape plan in the search box
And click on the search button  
Then the very first result should be "Escape Plan"
And click on the movie "Escape plan" to enter the profile
And click on the button "add to watchlist".


