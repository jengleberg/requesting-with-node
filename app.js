'use strict'

const movie = require("./movie");
const threeFavoriteMovies = ["Casino", "Goodfellas", "Revenge of the Nerds"];
threeFavoriteMovies.forEach(function(film){
  // your code here
  console.log(film);
  movie(film);
});