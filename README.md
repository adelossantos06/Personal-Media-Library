# Personal Media Library

This application is designed as a personal catalog to log movies, tv shows and books that the user has watched or read to keep track of what the user has seen and how they would rate them. 

The information displayed is a personal demonstration of the application. 

# Description

It is a single page application made with React. Every page contains cards with information that fits the category. Each information card contains the title, an image, the genre, whether the user liked it or not, and a review. The cards also contain two buttons one button that will edit the card and the second button that will delete the card. 

Clicking on the edit button will produce a new form used to ammend any desired information and my clicking save, the user will persist those changes to information card. 

To add a new card, the user clicks on the "Add More" button in the navigation menu and fills out the form with the desired information and by selecting the category on the form the user selects on which page the card will be displayed. 

Clicking submit in the AddForm component will update the json server, just as clicking the delete button will remove the card's information from the backend. 
