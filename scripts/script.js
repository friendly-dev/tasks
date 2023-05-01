

let numberOfFilms;

function start(){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
function remeberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?')
        if (a != '' && a != null && a.length < 50 && b != '' && b != null && b.length < 50 ) {
            personalMovieDB.movies[a] = b
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    
        
    }
}

// remeberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count == 0 || personalMovieDB.count == '') {
        console.log("Произошла ошибка. Повторите")
    }else if(personalMovieDB.count < 10) {
        console.log("Просмотрено слишком мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        console.log("Вы среднячок")
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман")
    } else {
        console.log("Произошла ошибка. Повторите")
    }
}

// detectPersonalLevel()




function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}

writeYourGenres()

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    } else {
        console.log('Доступ запрещен')
    }

}

showMyDB()