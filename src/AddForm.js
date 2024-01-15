import React from 'react'
import NavBar from './NavBar'
import "./AddForm.css"

function AddForm() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <form>
                <label>Title:</label>
                <input type="text" ></input>
                <br />
                <label>Genre:</label>
                <input type="text" ></input>
                <br />
                <label>Liked:</label>
                <select>
                    <option value="Yes" >Yes</option>
                    <option value="No" >No</option>
                </select>
                <br />
                <label>Review:</label>
                <input type="text" ></input>
                <br />
                <label>Category:</label>
                <select>
                    <option>Movies</option>
                    <option>TV Shows</option>
                    <option>Books</option>
                    <option>Podcasts</option>
                </select>
                <br />
                <input type="submit" value="Submit"></input>

            </form>
        </>
    )
}

export default AddForm
