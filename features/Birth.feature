Feature: I want to visit born today and find out more.

 

Scenario: I want to be able to visit Lynn Collins
  Given that i am already on IMDB website 
  When i click on born today 
  And i choose to click on Lynn Collins.

 

Scenario: After i visit Miranda i will be able to watch the trailer 
  Given that i am already on IMDB website 
  When i click on born today 
  When i choose to click on Lynn Collins.
  And i click on the trailer and I will be able to watch it.

 

Scenario: When i visit born todays page i will be able to sort it A-Z
  Given that i am already on born todays page
  And i click on A-Z
  And i will be able to visit A.J.Feeley.

