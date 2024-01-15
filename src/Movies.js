import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import "./Card.css"
import Card from './Card'

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/movies")
            .then(r => r.json())
            .then(data => setMovies(data))
    }, [])


    const moviesList = movies.map(movie => {
        return <Card key={movie.id} image={movie.image} title={movie.title} genre={movie.genre} liked={movie.liked} review={movie.review} id={movie.id} />
    })

    return (
        <div>
            <NavBar />
            <h1 className='titleText' >Movies</h1>
            <div className='cardContainer'>{moviesList}</div>
        </div>
    )
}

export default Movies