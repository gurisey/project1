const nubmerOfFilms = +prompt('Сколько фильм вы уже посмотрели?' , " ");

const personalMoviesDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
} ; 


const a = prompt ('Один из последниех просмотренных фильмов?' , ' '),
      b = prompt ('На сколько вы оцените его?' , ' '),
      c = prompt ('Один из последних просмотренных фильмов?' , ''),
      d = prompt ('На сколько оцените его?' , '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;



console.log(personalMoviesDB);