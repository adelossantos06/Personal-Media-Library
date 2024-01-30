import React, { useState } from "react";

function ItemsContainer() {
    const [items, setItems] = useState([{ id: 1, name: "Milk", category: "Dairy", price: 2 }, { id: 2, name: "Banana", category: "Produce", price: 10 }, { id: 3, name: "Vanilla Ice Cream", category: "Dairy", price: 4 }, { id: 4, name: "Saffron Truffle Gold-Flecked Ice Cream", category: "Dairy", price: 14 }, { id: 5, name: "Spinach", category: "Produce", price: 4 }, { id: 6, name: "Pomegranates", category: "Produce", price: 11 }])

    const [selectedCategory, setSelectedCategory] = useState("")
    const [showAllPrices, setShowAllPrices] = useState(true)


    const filteredItems = items.filter(item => item.category.toLowerCase().includes(selectedCategory.toLowerCase()))

    const cheapItems = filteredItems.filter(item => item.price < 5)

    const itemsToDisplay = showAllPrices ? filteredItems : cheapItems


    function handleSearch(e) {
        setSelectedCategory(e.target.value)
    }

    function handleCheap() {
        setShowAllPrices(false)
    }

    function handleAllPrices() {
        setShowAllPrices(true)
    }

    return (
        <div>
            <input type="text" value={selectedCategory} onChange={handleSearch}></input>
            <button onClick={handleCheap} >Cheap</button>
            <button onClick={handleAllPrices} >All Prices</button>
            <h3>Items go here:</h3>
            <ul>
                {itemsToDisplay.map(item => <li key={item.id} >{item.name} : {item.category} : ${item.price}</li>)}
            </ul>
        </div>
    );
}

export default ItemsContainer


//input -> search for item by category -> case insensitive 
//allPricews button -> shows all prices
//cheap button -> shows < 5 




// In Items Container:
// Add a controlled input field that allows for a user to search for an item by category
// This should be case insensitive
// Also be mindful of not having two sources of truth. If I later want to add create or delete functionality, I shouldn't have to update state in two places
// Add the following buttons to allow a user to switch between viewing all items and only the cheap items
// Add a button with the text "Cheap" that displays only the items with a price less than 5 when clicked. A user should still be able to use the search functionality in conjunction with this (For example, if a user searches for "Dairy" and clicks the "Cheap" button, they should only see the dairy products with a price less than 5)
// Add a button with the text "All Prices" that displays items of any price