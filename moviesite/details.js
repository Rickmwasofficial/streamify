
let detailsShow = document.querySelector('.fullbody');
let trailerShow = document.querySelector(".trailerwindow")
let show = JSON.parse(localStorage.getItem('show'));
let cast = JSON.parse(localStorage.getItem("cast"));
console.log(cast)
console.log(show)

let details = `
    <div class="leftimage">
        <div class="moviecard" style="background: url(${show[4]}); background-size: cover;">

        </div>
        <h2>Rating: ${show[1]}</h2>
    </div>
    <div class="rightdesc">
        <div class="moviedesc">
            <h1 id="moviename">${show[0]}</h1>
            <p id="moviedesc">${show[2]}
            </p>
            <b>Release Date: null</b><br>
            <b>Cast: ${cast}</b><br>
            <b>Duration: null</b><br>
            <b>Country: ${show[3]}</b><br>
            <b>Genre: null</b>
        </div>
    </div>`;
detailsShow.innerHTML = details;

let trailerDetail = `
    <h1>Trailer</h1>
    <div class="trailer">
        <video width="100%" height="auto" controls>
        <source src="https://api.themoviedb.org/3/movie/0/videos?language=en-US" type="video/mp4">
        </video>
    </div>`;

trailerShow.innerHTML = trailerDetail;
