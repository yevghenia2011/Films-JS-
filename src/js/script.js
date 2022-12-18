"use strict";

let numberOfFilms;
console.log(numberOfFilms);

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посморели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("На сколько оцените его?", ""),
        c = prompt("Один из последних просмотренных фильмов?", ""),
        d = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */



//1


function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
            b = +prompt("На сколько оцените его?", "");   
    
        if (a != null && b!= null && a !="" && b !="" && a.length<50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {}

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы - классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы - киноман!");
    } else {
        console.log("Произошла ошибка");
    }

detectPersonalLevel();   
/* console.log(personalMovieDB); */

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
/* showMyDB(personalMovieDB.privat); */

/* function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
} */

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    }
}
writeYourGenres();