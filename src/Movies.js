import React from 'react'
import "./Card.css"
import Card from './Card'
import { useOutletContext } from 'react-router-dom'

function Movies() {

    const { media, setMedia } = useOutletContext();

    function handleDelete(id) {
        const updatedArray = media.filter(shows => shows.id !== id)
        setMedia(updatedArray)
    }

    function handleUpdatedCard(updatedCard) {
        const updatedCards = media.map(card => card.id === updatedCard.id ? updatedCard : card)

        setMedia(updatedCards)
    }



    let movieListing = media.filter(movie => movie.category === "Movies")

    const moviesList = movieListing.map(movie => {
        return <Card key={movie.id} image={movie.image} title={movie.title} genre={movie.genre} liked={movie.liked} review={movie.review} id={movie.id} category={movie.category} onDelete={handleDelete} onEdit={handleUpdatedCard} />
    })


    return (
        <div>

            <h1 className='titleText' >Movies</h1>
            <div className='cardContainer' >{moviesList}</div>
        </div>
    )
}



export default Movies