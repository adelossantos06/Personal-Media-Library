import React, { useState } from "react";

function FoodForm() {
    const [favoriteFood, setFavoriteFood] = useState("")
    const [country, setCountry] = useState("")
    const [originMessage, setOriginMessage] = useState("")



    function handleFoodChange(e) {
        //if the user types more than 10 characters 
        //cannot type anymore
        if (e.target.value.length <= 10) {
            setFavoriteFood(e.target.value)
        }
    }

    function handleCountryChange(e) {
        setCountry(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCountry("")
        setFavoriteFood("")
        if (country === "America") {
            setOriginMessage("Delicious!")
        }
        else if (country === "Italy") {
            setOriginMessage("Delizioso!")
        }
        else if (country === "Mexico" || "Spain") {
            setOriginMessage("Delicioso!")
        }
        else if (country === "") {
            setOriginMessage("")
        } else {
            setOriginMessage("Yummy!")
        }

    }

    return (
        <div>
            <h1>Put form below:</h1>
            <form onSubmit={handleSubmit}>
                <label>Favorite Food:</label>
                <input type="text" onChange={handleFoodChange} value={favoriteFood} ></input>
                <label>Country:</label>
                <input type="text" onChange={handleCountryChange} value={country} ></input>
                <button>Submit</button>
            </form>
            <div>
                <h1>{originMessage}</h1>
            </div>
        </div>
    );
}

export default FoodForm



// # Challenge
// ### In the Food Form component:
// ### Create a controlled component with:
// - A field for a user to type the name of their favorite food
//   - Do not let a user enter more than ten characters for the food (Do not use the maxlength attribute for this)
// - A field for a user to type the food’s country of origin
// - A Submit button

// ### When a User submits the form: 
// - The form should clear
// - If the country of origin is America, render a h1 with the text Delicious!
// - If the country of origin is Italy, render a h1 with the text Delizioso!
// - If the country of origin is Mexico or Spain, render a h1 with the text Delicioso!
// - If the country of origin is not one of those countries, render a h1 with the text Yummy!
// - This message should not be displayed before a user submits the form
// - If the User fills out the form again, the text should update