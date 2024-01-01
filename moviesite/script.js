//get all nescessary elements from the html files
let movieCards = document.querySelector(".right");
let nowPlaying = document.querySelector(".nowplaying");
let search = document.querySelector("#searched");
let pageBtns = document.querySelector(".pages");
let show = {};

//use a for loop to print ten buttons on the page
let counter = 0;
for (let i = 1; i <= 10; i++) {
    counter++;
    let text2 = `<button id="page" onclick="generateNewPage(${counter})">${counter}</button>`;
    pageBtns.innerHTML += text2;
}

//use the ten buttons to generate new pages with different data
function generateNewPage(num) {
    const APILINK = `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=${num}`;
    const API_NOWPLAYING = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=${num}`;
    movieCards.innerHTML = "";
    nowPlaying.innerHTML = "";
    returnMovies(APILINK, movieCards);
    returnMovies(API_NOWPLAYING, nowPlaying);
}

//This function displays the search results on the page
function renderSearchResult() {
    console.log("Search button was clicked");
    let query = search.value;
    const APISEARCH = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=7cff4a67582d51235859ea119d30aa42`;
    movieCards.innerHTML = "";
    returnMovies(APISEARCH, movieCards);
}

//apilink to perform requests on TMDB api
const APILINK = 'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const API_NOWPLAYING = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42&page=1';

//call the function to render the results of the requests
returnMovies(APILINK, movieCards);
returnMovies(API_NOWPLAYING, nowPlaying);

//funcrion to render the results of the GET request
function returnMovies(url, page) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results);
        data.results.forEach(element => {
            let title = element.title;
            let title2 = element.name;
            let rating = element.vote_average;
            let desc = element.overview;
            let country = element.origin_country;
            
            if (title == undefined) {
                let imagesrc = IMG_PATH + element.poster_path;
                show[element.id] = [element.name, rating, desc, country, imagesrc];
                let text = `<a href="details.html" class='moviecard' onclick="showDetails(${element.id});"><div class='movieimage' style="background: url('${imagesrc}'); background-size: cover; background-position: center;"></div><br><p id="moviename">${title2}</p></a>`
                page.innerHTML += text;
                
            } else {
                let imagesrc = IMG_PATH + element.poster_path;
                show[element.id] = [element.title, rating, desc, country, imagesrc];
                let text = `<a href="details.html" class='moviecard' onclick="showDetails(${element.id});"><div class='movieimage' style="background: url('${imagesrc}'); background-size: cover; background-position: center;"></div><br><p id="moviename">${title}</p></a>`
                page.innerHTML += text;                
            }
        });
    })
};
let castNames = [];
function returnCast(url) {
    
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.cast)
        data.cast.forEach(element => {
            let castName = element.name;
            console.log(castNames);
            if (castNames.length < 10) {
                castNames.push(castName);
                console.log(castNames);
            }

        });
        localStorage.setItem('cast', JSON.stringify(castNames));
    });

}
function showDetails(movie) {
    localStorage.clear();
    let castLink = `https://api.themoviedb.org/3/tv/${movie}/aggregate_credits?language=en-US&api_key=7cff4a67582d51235859ea119d30aa42`;
    returnCast(castLink)
    localStorage.setItem('show', JSON.stringify(show[movie]));
};
