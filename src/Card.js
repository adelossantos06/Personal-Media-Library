import React from 'react'

function Card({ image, title, genre, liked, rating }) {

    return (
        <div>
            <div className='containerContents'>
                <img src={image} ></img>
                <div>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                    <p>Reccomend: {liked}</p>
                    <p>rating: {rating}</p>
                </div>
                <div>
                    <button className='deleteButton' >Delete</button>
                </div>
            </div>

        </div>
    )
}

export default Card