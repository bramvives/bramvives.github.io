// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
import {movies} from './movies.js'

const likedMovies = []
const dislikedMovies = []

const setup = () => {
    let movielist = document.getElementById('movielist')

    movies.forEach(movie => {
        let movieElement = createMovieElement(movie)
        movielist.appendChild(movieElement)
    })
}

const createMovieElement = (movie) => {
    const div = document.createElement("div")
    div.classList.add('movie')
    div.setAttribute("data-id", movie.id)

    const title = document.createElement("p")
    title.textContent = movie.title
    title.classList.add('title')

    div.appendChild(title)

    const buttons = document.createElement("div")
    buttons.classList.add('buttons')


    const likeBtn = createIconButton("fas fa-thumbs-up", () => {
        likeMovie(movie)
    })

    const dislikeBtn = createIconButton("fas fa-thumbs-down", () => {
        dislikeMovie(movie)
    })

    buttons.appendChild(likeBtn)
    buttons.appendChild(dislikeBtn)

    div.appendChild(buttons)

    const imageDescriptionContainer = document.createElement("div")
    imageDescriptionContainer.classList.add('imageDescriptionContainer')

    const img = document.createElement("img")
    img.src = movie.imageUrl
    img.classList.add('image')


    imageDescriptionContainer.appendChild(img)

    const description = document.createElement("p")
    description.textContent = movie.description
    description.classList.add('description')

    imageDescriptionContainer.appendChild(description)


    div.appendChild(imageDescriptionContainer)

    return div
}

const likeMovie = (movieToLike) => {
    if (likedMovies.find(movie => movie.id === movieToLike.id)) {
        return
    }

    const movieElements = document.getElementsByClassName("movie")
    let movieElement = null
    for (const movieEl of movieElements) {
        if (movieEl.getAttribute("data-id") === movieToLike.id.toString()) {
            movieElement = movieEl
        }
    }

    const disliked = dislikedMovies.findIndex(movie => movie.id === movieToLike.id)
    if (disliked !== -1) {
        dislikedMovies.splice(disliked)
        const dislikeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-down")
        dislikeBtn.classList.remove("dislike")
    }

    likedMovies.push(movieToLike)

    const likeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-up")
    likeBtn.classList.add("like")

    recalculateCounters()
    addToLikeBar(movieToLike)
}

const addToLikeBar = (movieToLike) => {
    const likebar = document.getElementById("likebar")
    if (likebar.style.visibility === "hidden") {
        likebar.style.visibility = "visible"
    }

    const container = document.createElement("div")
    container.setAttribute("data-id", movieToLike.id)
    container.classList.add("likeBarContainer")

    const title = document.createElement("p")
    title.textContent = movieToLike.title

    container.appendChild(title)

    const trashBtn = createIconButton("fas fa-trash", () => {
        const likedMovie = likedMovies.findIndex(movie => movie.id === movieToLike.id)
        if (likedMovie !== -1) {
            likedMovies.splice(likedMovie)
        }
        removeFromLikeBar(movieToLike)

        const movieElements = document.getElementsByClassName("movie")
        let movieElement = null
        for (const movieEl of movieElements) {
            if (movieEl.getAttribute("data-id") === movieToLike.id.toString()) {
                movieElement = movieEl
            }
        }
        const likeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-up")
        likeBtn.classList.remove("like")


        recalculateCounters()

    })

    container.appendChild(trashBtn)

    document.getElementById("likebarmovies").appendChild(container)
}

const removeFromLikeBar = (movieToRemove) => {
    const movieElements = document.getElementsByClassName("likeBarContainer")

    let movieElement = null
    for (const movieEl of movieElements) {
        if (movieEl.getAttribute("data-id") === movieToRemove.id.toString()) {
            movieElement = movieEl
        }
    }

    if (movieElement) {
        movieElement.remove()
    }

    if (likedMovies.length === 0) {
        const likebar = document.getElementById("likebar")
        if (likebar.style.visibility === "visible") {
            likebar.style.visibility = "hidden"
        }
    }
}

const dislikeMovie = (movieToDislike) => {
    if (dislikedMovies.find(movie => movie.id === movieToDislike.id)) {
        return
    }

    const movieElements = document.getElementsByClassName("movie")
    let movieElement = null
    for (const movieEl of movieElements) {
        if (movieEl.getAttribute("data-id") === movieToDislike.id.toString()) {
            movieElement = movieEl
        }
    }

    const likedMovie = likedMovies.findIndex(movie => movie.id === movieToDislike.id)
    if (likedMovie !== -1) {
        likedMovies.splice(likedMovie)
        const likeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-up")
        likeBtn.classList.remove("like")
    }

    dislikedMovies.push(movieToDislike)

    const dislikeBtn = movieElement.querySelector(".buttons > a > .fa-thumbs-down")
    dislikeBtn.classList.add("dislike")

    recalculateCounters()
    removeFromLikeBar(movieToDislike)
}

const recalculateCounters = () => {
    const like = document.getElementById("like")
    like.innerText = likedMovies.length.toString()

    const dislike = document.getElementById("dislike")
    dislike.innerText = dislikedMovies.length.toString()
}

const createIconButton = (icon, onClick) => {
    const a = document.createElement("a")
    const i = document.createElement('i')
    i.className = icon

    a.appendChild(i)

    a.addEventListener('click', onClick)

    return a
}

window.addEventListener("load", setup)