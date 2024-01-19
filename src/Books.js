import React, { useState, useEffect } from 'react'
import Card from './Card'

function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/media")
            .then(r => r.json())
            .then(data => setBooks(data))
    }, [])

    function handleDelete(id) {
        const updatedArray = books.filter(book => book.id !== id)
        setBooks(updatedArray)
    }

    function handleUpdatedCard(updatedCard) {
        const updatedCards = books.map(card => card.id === updatedCard.id ? updatedCard : card)

        setBooks(updatedCards)
    }


    let bookListing = books.filter(book => book.category === "Books")

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