let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (
            numberOfFilms == "" ||
            numberOfFilms == null ||
            isNaN(numberOfFilms)
        ) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    remeberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?").trim(),
                b = prompt("На сколько оцените его?");
            if (
                a != "" &&
                a != null &&
                a.length < 50 &&
                b != "" &&
                b != null &&
                b.length < 50
            ) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count == 0 || personalMovieDB.count == "") {
            console.log("Произошла ошибка. Повторите");
        } else if (personalMovieDB.count < 10) {
            console.log("Просмотрено слишком мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы среднячок");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка. Повторите");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(
                `Ваш любимый жанр под номером ${i}`
            );
        }
    },
    showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Доступ запрещен");
        }
    },
};

personalMovieDB.start();
personalMovieDB.remeberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
