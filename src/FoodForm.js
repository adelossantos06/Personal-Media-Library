import React, { useState } from "react";

function FoodForm() {
    const [favoriteFood, setFavoriteFood] = useState("")
    const [countryOrigin, setCountryOrigin] = useState("")
    const [delicious, setDelicious] = useState("")


    function handleFavoriteFood(e) {

        if (e.target.value.length <= 10) {
            setFavoriteFood(e.target.value)
        }


    }

    function handleCountry(e) {
        setCountryOrigin(e.target.value)

    }

    function handleSubmit(e) {
        e.preventDefault()

        if (countryOrigin === "America") {
            setDelicious("Delicious!")
        } else if (countryOrigin === "Italy") {
            setDelicious("Delizioso!")
        } else if (countryOrigin === "Mexico" || countryOrigin === "Spain") {
            setDelicious("Delicioso!")
        } else {
            setDelicious("Yummy!")
        }

        setFavoriteFood("")
        setCountryOrigin("")
    }

    return (
        <div>
            <h1>Put form below:</h1>
            <form onSubmit={handleSubmit}>
                <label>Favorite Food:</label>
                <input type="text" value={favoriteFood} onChange={handleFavoriteFood}></input>
                <label>Country of Origin</label>
                <input type="text" value={countryOrigin} onChange={handleCountry}></input>
                <button>Submit</button>
            </form>
            <div>
                <h1>{delicious}</h1>
            </div>
        </div>
    );
}

export default FoodForm


//input -> user types in their favorite food -> character should be <= 10 
//input -> user type country of origin
//button -> submit -> form should clear
// if the country  is America -> "Delicious!"
// if the country  is Italy -> "Delizioso!"
// if the country  is Mexico or Spain -> "Delicioso!"
// if it none of those -> "Yummy!"






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