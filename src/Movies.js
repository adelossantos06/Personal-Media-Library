import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import "./Card.css"
import Card from './Card'

function Movies() {
    const [movies, setMovies] = useState([])
    // const [category, setCategory] = useState("")

    useEffect(() => {
        fetch("http://localhost:4000/media")
            .then(r => r.json())
            .then(data => setMovies(data))
    }, [])

    let movieListing = movies.filter(movie => movie.category === "Movies")

    const moviesList = movieListing.map(movie => {
        return <Card key={movie.id} image={movie.image} title={movie.title} genre={movie.genre} liked={movie.liked} review={movie.review} id={movie.id} category={movie.category} />
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