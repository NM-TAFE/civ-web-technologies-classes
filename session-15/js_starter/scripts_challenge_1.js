// Challenge 1
// Import the array of books
import books from "/books.js"

// Find a book by ISBN
const findBookByISBN = (ISBN) => {
    // Use the find function to search for a ISBN number (checking against book.ISBN)

    // If found log a title

};

// Double the prices of all books
const doublePrices = () => {
    // Create a constant which takes the result of mapping over the books

        // Use each iteration to double the price of the book 
        // adding it to doubledPrices


    console.log("Doubled prices:", doubledPrices);
};

// Calculate the total price of all books
const calculateTotalPrice = () => {
    // Create a constant that take the result of the reduce function

    // Also add a total accumulator to the reduce function arguments

    console.log("Total price of all books:", totalPrice);
};

// DONT FORGET to Call the functions
findBookByISBN("ISBN-222");
doublePrices();
calculateTotalPrice();



