"use strict";

/* const numberOfFilms = prompt('Сколько фильмов вы уже посмтотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genre: {},
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* if (3 - 5 == 9) {
    console.log('Ok');
} else {
    console.log('You eblan');
}
 */
const num = 50;

/* if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log("Ok!");
}

(num === 50) ? console.log('Ok') : console.log('Error'); */


switch (num) {
    case 49: 
        console.log('No');
        break;
    case 100: 
        console.log('No no');
        break;
    case 50:
        console.log('Yes');
        break;
    default:
        console.log('NO nono');
}