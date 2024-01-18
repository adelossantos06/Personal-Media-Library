import React, { useState } from 'react'
import NavBar from './NavBar'
import "./AddForm.css"

function AddForm() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [genre, setGenre] = useState("")
    const [liked, setLiked] = useState("")
    const [review, setReview] = useState("")
    const [category, setCategory] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const formData = ({ title, image, genre, liked, review, category })

        fetch("http://localhost:4000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then(r => r.json())
            .then(addedMedia => { console.log(addedMedia) })
    }

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" value={title} onChange={(e => setTitle(e.target.value))}></input>
                    <br />
                    <label htmlFor="image">Image:</label>
                    <input id="image" type="text" value={image} onChange={(e => setImage(e.target.value))}></input>
                    <br />
                    <label htmlFor="genre">Genre:</label>
                    <input id="genre" type="text" value={genre} onChange={(e => setGenre(e.target.value))}></input>
                    <br />
                    <label>Liked:</label>
                    <select id="liked" type="text" value={liked} onChange={(e => setLiked(e.target.value))} className="dropdown">
                        <option></option>
                        <option value="Yes" >Yes</option>
                        <option value="No" >No</option>
                    </select>
                    <br />
                    <label htmlFor="review">Review:</label>
                    <textarea id="review" className='review' value={review} onChange={(e => setReview(e.target.value))} ></textarea>
                    <br />
                    <label>Category:</label>
                    <select id="category" value={category} onChange={(e => setCategory(e.target.value))} className="dropdown">
                        <option></option>
                        <option>Movies</option>
                        <option>TV Shows</option>
                        <option>Books</option>
                        <option>Podcasts</option>
                    </select>
                    <br />

                    <button className="submitButton" type="submit">Submit</button>

                </form>
            </div>
        </>
    )
}

export default AddForm
