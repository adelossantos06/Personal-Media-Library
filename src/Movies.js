import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import "./Card.css"
import Card from './Card'

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/media")
            .then(r => r.json())
            .then(data => setMovies(data))
    }, [])

    function handleDelete(id) {
        const updatedArray = movies.filter(movie => movie.id !== id)
        setMovies(updatedArray)
    }

    function handleUpdatedCard(updatedCard) {
        const updatedCards = movies.map(card => card.id === updatedCard.id ? updatedCard : card)

        setMovies(updatedCards)
    }

    let movieListing = movies.filter(movie => movie.category === "Movies")

    const moviesList = movieListing.map(movie => {
        return <Card key={movie.id} image={movie.image} title={movie.title} genre={movie.genre} liked={movie.liked} review={movie.review} id={movie.id} onDelete={handleDelete} category={movie.category} onEdit={handleUpdatedCard} />
    })


    return (
        <div>
            <NavBar />
            <h1 className='titleText' >Movies</h1>
            <div className='cardContainer' >{moviesList}</div>
        </div>
    )
}



export default Movies