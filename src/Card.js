import React from 'react'

function Card({ image, title, genre, liked, review, id }) {

    function handleDelete() {
        fetch(`http://localhost:4000/movies/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                console.log("success");
            });
    }

    return (
        <div>
            <div className='containerContents'>
                <img src={image} ></img>
                <div>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                    <p>Recommend: {liked}</p>
                    <p>Review: {review}</p>
                </div>
                <div>
                    <button onClick={handleDelete} className='deleteButton'>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default Card