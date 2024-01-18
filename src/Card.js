import React from 'react'

function Card({ image, title, genre, liked, review, id, onDelete }) {

    function handleDelete() {
        fetch(`http://localhost:4000/media/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                onDelete(id);
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