# StarTrek Stream-finder App
----

This REACT app loads the names of Star Trek series or movies from an API. The user then can click on the series/movie to see from where it can be streamed.

## Usage

Simply run: npm start<br><br>

Then, click on SHOWS or MOVIES, then check on the name of the series or movie you want to see. You will then be presented with streaming options (if available). Clicking on the link will open a new window.

## Features & Requirements

1. The API endpoints used are:
* http://stapi.co/api/v1/rest/series/search? == Delivers names of series from STAPI
* http://stapi.co/api/v1/rest/movie/search? == Delivers names of Movies from STAPI
* https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=[NAME_OF_SHOW_OR_MOVIE]&country=us  == Locates streaming services from uTelly
* http://www.omdbapi.com/?t=${showTitle}&apikey=78458461 == Grabs poster and description of show/movie

2. Other Requirements:
* The page is responsive to different sized screens.

## Dependencies
* The front-end uses an LCARS framework (http://joernweissenborn.github.io/lcars/) 

----
-J. Nathan Allen
@nateonmission