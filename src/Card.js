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

    const isLiked = { liked } ? <p>Liked: <span className="thumbsUp">👍</span></p> : <p>Liked: 👎</p>

    return (
        <div>
            <div className='containerContents'>
                <img src={image} ></img>
                <div>
                    <h2>{title}</h2>
                    <p><span>Genre:</span> {genre}</p>
                    <h4>{isLiked}</h4>
                    <p><span>Review:</span> {review}</p>
                </div>
                <div>
                    <button onClick={handleDelete} className='deleteButton'>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default Card