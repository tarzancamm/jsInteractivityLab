//console.log("Hello")

const message = document.querySelector("#message")

function addMovie(event){
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    // Create new delete button. When clicked run deleteMovie function.
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector("ul").appendChild(movie) 

    // Delete input field after submitting
    inputField.value = ''
}

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = "Movie deleted"
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked')) {
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back'
    }
}

document.querySelector("form").addEventListener('submit', addMovie)




