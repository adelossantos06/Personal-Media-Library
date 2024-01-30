import React, { useState } from 'react'




function Challenge() {
    const [songs, setSongs] = useState([{ id: 1, title: "A Case of You", genre: "folk", artist: "Joni Mitchell" }, { id: 2, title: "Everything in its Right Place", genre: "rock", artist: "Radiohead" }, { id: 3, title: "Perfect Day", genre: "rock", artist: "Lou Reed" }, { id: 4, title: "Harvest Moon", genre: "folk", artist: "Neil Young" }, { id: 5, title: "Missing U", genre: "pop", artist: "Robyn" }])

    const [songGenre, setSongGenre] = useState("")

    const filterGenre = songs.filter(song => song.genre.toLowerCase().includes(songGenre.toLowerCase()))

    function handleSearch(e) {
        setSongGenre(e.target.value)
    }

    return (

        <div>
            <input type="text" value={songGenre} onChange={handleSearch} ></input>
            <h3>Songs go below:</h3>
            <ul>
                {filterGenre.map(song => <li>{song.title} : {song.genre}</li>)}
            </ul>
        </div>
    );
}

export default Challenge

//input -> search songs based on genre

// In SongsContainer:
// Add functionality to be able to filter songs by genre