
function init() {
    loadMoivesCards(moviesArr, "contact")
}


function getCardTamplate(movie) {
    const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Images, imdbRating, imdbVotes, imdbID } = movie
    return `<div class=" row card col-4 mt-5 gap-2">
            <h4>Title:${Title} </h4>
            <p><strong>Year:</strong>${Year} </p>
            <p><strong>Rated:</strong>${Rated} </p>
            <p><strong>Released:</strong>${Released} </p>
            <p><strong>Runtime:</strong>${Runtime} </p>
            <p><strong>Genre:</strong>${Genre} </p>
            <p><strong>Director:</strong>${Director} </p>
            <p><strong>Writer:</strong>${Writer} </p>
            <img class="movieImg" src="${Images}" alt=""> 
            <p><strong>IMDb Rating:</strong>${imdbRating} </p>
            <p><strong>IMDb Votes:</strong>${imdbVotes} </p>
            <p><strong>iMDb ID:</strong>${imdbID}</p>
            <button id="addToFavoritesButton" class="btn btn-warning" onclick="toggleFavorite()">Add to Favorites</button>
            <button id="nextMovieButton" class="btn btn-danger" onclick="deleteMovie()">Delete</button>
        </div> `

}

function loadMoivesCards(array, targetContact) {
    if (!Array.isArray(array)) return;
    const contact = document.getElementById(targetContact)
    if(!contact)return
   for (let index = 0; index < array.length; index++) {
    const eachMovie = array[index];
    let cardHtml = null
    cardHtml= getCardTamplate(eachMovie)
    contact.innerHTML += cardHtml
    

    
   }

    
}
init()
function toggleFavorite(arr, button){
    if(!Array.isArray)return;
    const favButton= document.getElementById("addToFavoritesButton");
    const favMovies = []
    for (let index = 0; index <arr.length; index++) {
    const selectedFavMovie = arr[index];  
   }
        console.log(selectedFavMovie); 
        favMovies.push(selectedFavMovie)
        
        
    }
    



