import React, { useState } from "react";

function RandomWinnerForm() {
    const [nameInput, setNameInput] = useState("")
    const [nameList, setNameList] = useState([])
    const [winnerName, setWinnerName] = useState("")



    function handleNameInput(e) {
        if (e.target.value.length <= 15)
            setNameInput(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault()

        const newNameListArray = [...nameList, nameInput]

        if (nameInput.length >= 2) {
            setNameList(newNameListArray)
            setNameInput("")
        }
    }

    function handleSelectWinner() {
        let random = nameList[Math.floor(Math.random() * nameList.length)]

        if (nameList.length <= 1) {
            alert("Please add more contestants")
        } else {
            setWinnerName(random)
        }
    }



    return (
        <div>
            <h1>Put Form here!</h1>
            <form onSubmit={handleSubmit}>
                <input value={nameInput} type="text" onChange={handleNameInput}></input>
                <button>Submit</button>
            </form>


            <h3>Put Contestants here:</h3>
            <ul>
                {nameList.map(name => <li key={name} >{name}</li>)}
            </ul>
            <button onClick={handleSelectWinner} >Select Winner</button>
            <h3>Put Winner here</h3>
            {winnerName.toUpperCase()}
        </div>
    );
}

export default RandomWinnerForm

//single input field to type a name
//no more than 15 characters in input field - no maxlength
//a submit button
// at submit - render that name to a list of contestants
//clear the form
//<2 characters do not render - do not clear 
// button with "Select Winner" - the button randomly selects a winner and renders it to the page
//winners name should be in all caps
//if there is one name or less, render "Please add more contestants"
//if the user clicks button again - render a new winner 


// In the Random Winner Form component:
// Create a controlled component with:
// A single input field that allows a User to type a name
// Do not let a user enter more than 15 characters in the input field (Do not use the maxlength attribute for this)
// A Submit button
// When a User submits the form:
// Render that name to a list of "Contestants"
// Clear the form
// If the name does not have at least two characters, do not add it to the list of "Contestants" and do not clear the form
// Create a button with the text "Select Winner"
// When a User clicks that button, randomly select one of the names as the winner and render the winner to the page
// The winner's name should be in ALL CAPS when rendered to the page
// If there is one name or less, render a message: Please add more contestants
// If the User clicks the button again, the Winner should update