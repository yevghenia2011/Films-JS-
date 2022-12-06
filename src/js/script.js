"use strict";

const numberOffFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
        count: numberOffFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const last1 = prompt("Один из последних просмотренных фильмов?", "");
const last2 = prompt("Один из последних просмотренных фильмов?", "");
const rate1 = prompt("На сколько оцените его?", "");
const rate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[last1] = rate1;
personalMovieDB.movies[last2] = rate2;

console.log(personalMovieDB);