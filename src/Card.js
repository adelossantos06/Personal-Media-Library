import React, { useState } from 'react'

function Card({ image, title, genre, liked, review, id, category, onDelete, onEdit }) {
    const [cardEdit, setCardEdit] = useState(false)
    const [editedCard, setEditedCard] = useState({ id, title, image, genre, liked, review, category })

    function handleDelete() {
        fetch(`http://localhost:4000/media/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => {
                onDelete(id);
            });
    }

    function handleEdit() {
        setCardEdit(true)
    }

    function handleEditSubmitForm(e) {
        e.preventDefault()

        fetch(`http://localhost:4000/media/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedCard)
        })
            .then((r) => r.json())
            .then((updatedCard) => {
                onEdit(updatedCard)
            });
        setCardEdit(false)
    }



    return (
        <div>
            {cardEdit ? (
                <form onSubmit={handleEditSubmitForm} >
                    <label>Title:</label>
                    <input
                        type="text"
                        value={editedCard.title}
                        onChange={(e) =>
                            setEditedCard({ ...editedCard, title: e.target.value })
                        }
                    />
                    <label>Image:</label>
                    <input
                        type="text"
                        value={editedCard.image}
                        onChange={(e) =>
                            setEditedCard({ ...editedCard, image: e.target.value })
                        }
                    />
                    <label>Genre:</label>
                    <input
                        type="text"
                        value={editedCard.genre}
                        onChange={(e) =>
                            setEditedCard({ ...editedCard, genre: e.target.value })
                        }
                    />
                    <label>Liked:</label>
                    <select type="text"
                        value={editedCard.liked}
                        onChange={(e) =>
                            setEditedCard({ ...editedCard, liked: e.target.value })
                        }
                        className='dropdown'
                    >
                        <option value="Yes" >Yes</option>
                        <option value="No" >No</option>
                    </select>
                    <br />
                    <label>Review:</label>
                    <input
                        type="text"
                        value={editedCard.review}
                        onChange={(e) =>
                            setEditedCard({ ...editedCard, review: e.target.value })
                        }
                    />
                    <button type='submit' onClick={onEdit} >Save</button>
                </form>
            ) : (
                <div className='containerContents'>
                    <img src={image} ></img>
                    <div>
                        <h2>{title}</h2>
                        <p><span>Genre:</span> {genre}</p>
                        <p><span>Liked:</span> {liked}</p>

                        <p><span>Review:</span> {review}</p>
                    </div>
                    <div>
                        <button onClick={handleEdit} className='editButton'>Edit</button>
                        <button onClick={handleDelete} className='deleteButton'>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card