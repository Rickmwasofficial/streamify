let movieCards = document.querySelector(".right");
let nowPlaying = document.querySelector(".nowplaying");
let search = document.querySelector("#searched");
let pageBtns = document.querySelector(".pages");

let counter = 0;
for (let i = 1; i <= 10; i++) {
    counter++;
    let text2 = `<button id="page" onclick="generateNewPage(${counter})">${counter}</button>`;
    pageBtns.innerHTML += text2;
}

function generateNewPage(num) {
    console.log(num);
    const API_UpcomingMovie = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=${num}`;
    const API_UpcomingTv = `https://api.themoviedb.org/3/tv/upcoming?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=${num}`;
    movieCards.innerHTML = "";
    returnMovies(API_UpcomingMovie, movieCards);
    returnMovies(API_UpcomingTv, nowPlaying);
}

function renderSearchResult() {
    console.log("Search button was clicked");
    let query = search.value;
    const APISEARCH = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=7cff4a67582d51235859ea119d30aa42`;
    movieCards.innerHTML = "";
    returnMovies(APISEARCH, movieCards);
}

const API_UpcomingMovie = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

returnMovies(API_UpcomingMovie, movieCards);

function returnMovies(url, page) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        let count = 0;
        console.log(data.results);
        data.results.forEach(element => {
            if (count < 20) {
                let title = element.name;
                let title2 = element.title;
                if (title == undefined) {
                    let imagesrc = IMG_PATH + element.poster_path;
                    let text = `<a href="#" class='moviecard'><div class='movieimage' style="background: url('${imagesrc}'); background-size: cover; background-position: center;"></div><br><p id="moviename">${title2}</p></a>`
                    page.innerHTML += text;
                } else {
                    let imagesrc = IMG_PATH + element.poster_path;
                    let text = `<a href="#" class='moviecard'><div class='movieimage' style="background: url('${imagesrc}'); background-size: cover; background-position: center;"></div><br><p id="moviename">${title}</p></a>`
                    page.innerHTML += text;
                }
                count++;
            }
        });
    })
};
