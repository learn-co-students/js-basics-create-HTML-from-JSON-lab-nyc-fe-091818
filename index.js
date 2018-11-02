document.addEventListener("DOMContentLoaded", (e) => {
  
  fillInMovieData('Titanic')
const titanicButton = document.querySelector('#Titanic')
const terminatorButton = document.querySelector('#Terminator-2')

titanicButton.addEventListener('click', () => fillInMovieData('Titanic'))
terminatorButton.addEventListener('click', () => fillInMovieData('Terminator 2'))

});

 function fillInMovieData(movie) {

const currentMovie = movies[movie]
const title = currentMovie.title
const titleDiv = document.querySelector('#title')
titleDiv.innerText = title

const director = currentMovie.director
const directorDiv = document.querySelector('#director')
directorDiv.innerText = director

const genre = currentMovie.genre
const genreDiv = document.querySelector('#genre')
genreDiv.innerText = genre

const filmRating = currentMovie.filmRating
const filmRatingDiv = document.querySelector('#filmRating')
filmRatingDiv.innerText = filmRating

const poster = currentMovie.poster
const posterImg = document.querySelector('#poster')
posterImg.src = poster

const description = currentMovie.description
const descriptionDiv = document.querySelector('#description')
descriptionDiv.innerText = description

const audienceScore = currentMovie.audienceScore
const audienceScoreDiv = document.querySelector('#audienceScore')
audienceScoreDiv.innerText = audienceScore

const castDiv = document.querySelector('#cast')
while (castDiv.hasChildNodes()) {
  castDiv.removeChild(castDiv.firstChild)
}

for (let castMember of currentMovie.cast) {
  console.log(castMember)
 const li = document.createElement('li')
 li.innerText = castMember.role + ': ' + castMember.actor
 const div = document.querySelector('#cast')
 div.appendChild(li)
}


const reviewDiv = document.querySelector('#reviews')
while (reviewDiv.hasChildNodes()) {
  reviewDiv.removeChild(reviewDiv.firstChild)
}

for (let review of currentMovie.reviews) {
 const li  = document.createElement('li')
 li.innerText = review.username + ': ' + review.content
 const div = document.querySelector('#reviews')
 div.appendChild(li)
}
   
   
 }

