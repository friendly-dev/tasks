const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                "Сколько фильмов вы уже посмотрели?"
            );
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
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat == false;
        } else {
            personalMovieDB.privat == true;
        }
    },
    showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Доступ запрещен");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = +prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre === null || genre === "") {
                console.log("Вы ввели некорректные данные или не ввели вовсе");
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        })
    },
};

// personalMovieDB.start();
// personalMovieDB.remeberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
