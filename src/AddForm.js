import React from 'react'
import NavBar from './NavBar'
import "./AddForm.css"

function AddForm() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="formDiv">
                <form>
                    <label>Title:</label>
                    <input type="text" ></input>
                    <br />
                    <label>Image:</label>
                    <input type="text" ></input>
                    <br />
                    <label>Genre:</label>
                    <input type="text" ></input>
                    <br />
                    <label>Liked:</label>
                    <select className="dropdown">
                        <option value="Yes" >Yes</option>
                        <option value="No" >No</option>
                    </select>
                    <br />
                    <label>Review:</label>
                    <textarea className='review' ></textarea>
                    <br />
                    <label>Category:</label>
                    <select className="dropdown">
                        <option>Movies</option>
                        <option>TV Shows</option>
                        <option>Books</option>
                        <option>Podcasts</option>
                    </select>
                    <br />
                    <input className="submitButton" type="submit" value="Submit"></input>

                </form>
            </div>
        </>
    )
}

export default AddForm
