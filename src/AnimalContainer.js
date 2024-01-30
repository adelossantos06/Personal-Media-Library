import React, { useState } from "react";

function AnimalContainer() {
    const [animals, setAnimals] = useState([{ id: 1, name: "Ron", species: "Lion", hungry: true }, { id: 2, name: "Leslie", species: "Rabbit", hungry: false }, { id: 3, name: "Ann", species: "Koala", hungry: false }, { id: 4, name: "April", species: "Hyena", hungry: true }])


    const [isHungry, setIsHungry] = useState(false)
    const [searchSpieces, setSearchSpieces] = useState("")

    const filterAnimals = animals.filter(animal => animal.species.toLowerCase().includes(searchSpieces.toLowerCase()))

    function handleSearchSpieces(e) {
        setSearchSpieces(e.target.value)

    }


    function handleFullAnimals() {
        setIsHungry(false)
    }


    function handleHungryAnimals() {
        setIsHungry(true)
    }

    const filteredAnimals = isHungry ? animals.filter(animal => animal.hungry) : animals.filter(animal => !animal.hungry)

    return (
        <div>
            <input value={searchSpieces} onChange={handleSearchSpieces}></input>
            <button onClick={handleHungryAnimals}>Hungry Animals</button>
            <button onClick={handleFullAnimals}>Full Animals</button>
            <h3>Animals go below:</h3>
            <ul>

                {filteredAnimals.map(animal => <li key={animal.id} >{`${animal.name}  ${!animal.hungry ? " is not" : "is"} hungry`}</li>)}

            </ul>
            <h3>Display By Spieces</h3>
            <ul>
                {filterAnimals.map(animal => <li key={animal.id} >{`${animal.name} is a ${animal.species}`}</li>)}
            </ul>
        </div>
    );
}

export default AnimalContainer

//display only hungry animals when "Hungry Animals" is clicked
//display only full animals when "Full Animals" is clicked
//should say "Andy is hungry" or "Andy is not hungry"

//if hungry === true display in "Hungry Animals"
//if hungry === false display in "Full Animals"

//input -> search animal by spieces

// In AnimalContainer:
// When a User clicks the button "Hungry Animals", display only the hungry animals
// When a User clicks the button "Full Animals", display only the animals who are not hungry
// The display should include the animal name and whether or not they are hungry. For example, "Andy is hungry"
// Also be mindful of not having two sources of truth. If I later want to add create or delete functionality, I shouldn't have to update state in two places

//Add functionality to be able to search for an animal by species