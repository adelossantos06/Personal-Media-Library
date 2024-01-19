import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useOutletContext } from 'react-router-dom'

function Books() {
    const { media, setMedia } = useOutletContext();

    function handleDelete(id) {
        const updatedArray = media.filter(book => book.id !== id)
        setMedia(updatedArray)
    }

    function handleUpdatedCard(updatedCard) {
        const updatedCards = media.map(card => card.id === updatedCard.id ? updatedCard : card)

        setMedia(updatedCards)
    }


    let bookListing = media.filter(book => book.category === "Books")

    const bookList = bookListing.map(book => {
        return <Card key={book.id} image={book.image} title={book.title} genre={book.genre} liked={book.liked} review={book.review} id={book.id} category={book.category} onDelete={handleDelete} onEdit={handleUpdatedCard} />
    })


    return (
        <div>
            <h1 className='titleText' >Books</h1>
            <div className='cardContainer' >{bookList}</div>
        </div>
    )
}

export default Books