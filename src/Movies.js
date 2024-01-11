import React from 'react'
import NavBar from './NavBar'
import "./Card.css"
import Card from './Card'

function Movies() {
    return (
        <div>
            <NavBar />
            <h1 className='titleText' >Movies</h1>
            <Card />
        </div>
    )
}

export default Movies