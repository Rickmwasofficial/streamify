let movieCards = document.querySelector(".right");
<<<<<<< HEAD
let nowPlaying = document.querySelector(".nowplaying");
let search = document.querySelector("#searched");

function renderSearchResult() {
    console.log("Search button was clicked");
    let query = search.value;
    const APISEARCH = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=7cff4a67582d51235859ea119d30aa42`;
    movieCards.innerHTML = "";
    returnMovies(APISEARCH, movieCards);
}


const APILINK = 'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const API_NOWPLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=1';

returnMovies(APILINK, movieCards);
returnMovies(API_NOWPLAYING, nowPlaying);
=======
let text = `<a href="#" class='moviecard'><div class='movieimage' style="background: url('368175f08c3494fbab5bca96d16a83c5.jpg'); background-size: cover; background-position: center;"></div><br><p id="moviename">The Marvels</p></a>`

for (let i = 0; i < 56; i++) {
    movieCards.innerHTML += text;
}
>>>>>>> aa4e138bd540d0528a8cfb672863c15caf68431b

function returnMovies(url, page) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        let count = 0;
        console.log(data.results);
        data.results.forEach(element => {
            if (count < 18) {
                let title = element.title;
                let imagesrc = IMG_PATH + element.poster_path;
                let text = `<a href="#" class='moviecard'><div class='movieimage' style="background: url('${imagesrc}'); background-size: cover; background-position: center;"></div><br><p id="moviename">${title}</p></a>`
                page.innerHTML += text;
                count++;
            }
        });
    })
};

