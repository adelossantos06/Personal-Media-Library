import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Card from './Card'

function TV() {
    const [tv, setTv] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/media")
            .then(r => r.json())
            .then(data => setTv(data))
    }, [])

    function handleDelete(id) {
        const updatedArray = tv.filter(shows => shows.id !== id)
        setTv(updatedArray)
    }

    let tvListing = tv.filter(shows => shows.category === "TV Shows")

    const tvShowList = tvListing.map(shows => {
        return <Card key={shows.id} image={shows.image} title={shows.title} genre={shows.genre} liked={shows.liked} review={shows.review} id={shows.id} category={shows.category} onDelete={handleDelete} />
    })


    return (
        <div>
            <NavBar />
            <h1 className='titleText' >Movies</h1>
            <div className='cardContainer' >{tvShowList}</div>
        </div>
    )
}


export default TV