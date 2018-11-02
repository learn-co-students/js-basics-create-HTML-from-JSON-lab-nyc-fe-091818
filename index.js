document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
  fillInMovieData('Titanic')
  
  const titanicButton = document.querySelector('#Titanic')
  const terminatorButton = document.querySelector('#Terminator-2')
  
  titanicButton.addEventListener('click', () => fillInMovieData('Titanic'))
  terminatorButton.addEventListener('click', () => fillInMovieData('Terminator-2'))
});

function fillInMovieData(movie){
  const currentMovie = movies[movie]
  
  const title = currentMovie.title //find the thing
  const titleDiv = document.querySelector('#title') //find the spot
  titleDiv.innerText = title //put it there 
  
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
  
  //clear out old cast memebers
  const castDiv = document.querySelector('#cast')
 while (castDiv.hasChildNodes()) {
   castDiv.removeChild(castDiv.firstChild)
 }
  
  //cast and reviews are arrays
  for (let castMember of currentMovie.cast) {
   const li = document.createElement('li') //make the element 
   li.innerText = castMember.role + ':' + castMember.actor //fill the element
   const div = document.querySelector('#cast')// put it on the page
   div.appendChild(li) //put it on the page 
    }
  
   const reviewsDiv = document.querySelector('#reviews')
 while (reviewsDiv.hasChildNodes()) {
   reviewsDiv.removeChild(reviewsDiv.firstChild)
 }
  
  for (let review of currentMovie.reviews) {
   const li = document.createElement('li') //make the element 
   li.innerText = review.username + ':' + review.content //fill the element
   const div = document.querySelector('#reviews')// put it on the page
   div.appendChild(li) //put it on the page 
    }
}

