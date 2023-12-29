let movieCards = document.querySelector(".right");
let text = `<a href="#" class='moviecard'><div class='movieimage' style="background: url('368175f08c3494fbab5bca96d16a83c5.jpg'); background-size: cover; background-position: center;"></div><br><p id="moviename">The Marvels</p></a>`

for (let i = 0; i < 60; i++) {
    movieCards.innerHTML += text;
}


