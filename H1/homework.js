let nubmerOfFilms;

function start () {
    nubmerOfFilms = +prompt('Сколько фильм вы уже посмотрели?' , " ");

    while (nubmerOfFilms == '' || nubmerOfFilms == null || isNaN(nubmerOfFilms)) {

        nubmerOfFilms = +prompt('Сколько фильм вы уже посмотрели?' , " ");
    }
}

start();
const personalMoviesDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat : false
} ; 





function rememberMyFilms() {


    for (let i=0 ;i < 2; i++) {
        const   a = prompt ('Один из последниех просмотренных фильмов?' , ' '),
                b = prompt ('На сколько вы оцените его?' , ' ');
            if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
                personalMoviesDB.movies[a] = b;
                console.log ('done');
            }   else {
                console.log ('error');
                i--;
            }
               
    }

}
rememberMyFilms();



function detectPersonalLevel() {

    if (personalMoviesDB < 10) {
        console.log ("Watched very low amount of movies");
        }
         else if (personalMoviesDB >=10 && personalMoviesDB <30) {
            console.log ("You like to watch movies");
         }
         else if (personalMoviesDB >=30) {
             console.log ("You are movie fan");
         }
         else {
            console.log ("error");
        
         }

}


detectPersonalLevel();

function ShowMyDB (hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

function writeYouGenres () {
    for (let i = 1; i <=3 ; i++) {
            const genre = prompt(`Your favourite genre under number ${i}`);
            personalMoviesDB.genres[i - 1] = genre; 
        }
}

writeYouGenres() ; 