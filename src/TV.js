import React from 'react'
import Card from './Card'
import { useOutletContext } from 'react-router-dom'

function TV() {
    const { media, setMedia } = useOutletContext();

    function handleDelete(id) {
        const updatedArray = media.filter(shows => shows.id !== id)
        setMedia(updatedArray)
    }

    function handleUpdatedCard(updatedCard) {
        const updatedCards = media.map(card => card.id === updatedCard.id ? updatedCard : card)

        setMedia(updatedCards)
    }

    let tvListing = media.filter(shows => shows.category === "TV Shows")

    const tvShowList = tvListing.map(shows => {
        return <Card key={shows.id} image={shows.image} title={shows.title} genre={shows.genre} liked={shows.liked} review={shows.review} id={shows.id} category={shows.category} onDelete={handleDelete} onEdit={handleUpdatedCard} />
    })


    return (
        <div>
            <h1 className='titleText' >TV Shows</h1>
            <div className='cardContainer' >{tvShowList}</div>
        </div>
    )
}


export default TV