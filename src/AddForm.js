import React, { useState } from 'react'
import "./AddForm.css"
import { useOutletContext } from 'react-router-dom'

function AddForm() {
    const { media, setMedia } = useOutletContext();
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [genre, setGenre] = useState("")
    const [liked, setLiked] = useState("")
    const [review, setReview] = useState("")
    const [category, setCategory] = useState("")

    function addMedia(newMedia) {
        setMedia([...media, newMedia])
    }


    function handleSubmit(e) {
        e.preventDefault()
        const formData = ({ title, image, genre, liked, review, category })
        console.log(formData)
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }

        fetch("http://localhost:3000/media", configObj)
            .then(r => r.json())
            .then(mediaObj => addMedia(mediaObj))
        refreshData(formData)
    }

    function refreshData() {
        setTitle("")
        setImage("")
        setGenre("")
        setLiked("")
        setReview("")
        setCategory("")
    }

    return (
        <>

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
                    </select>
                    <br />

                    <button className="submitButton" type="submit">Submit</button>

                </form>
            </div>
        </>
    )
}

export default AddForm
