// Challenge 2
// Import the array of books
import books from "/books.js";

// Calculate the total price of all books using a callback
// Pass both the books array and the callback function
function calculateTotalPrice(books, callback) {
  let totalPrice = books.reduce((total, book) => total + book.price, 0);
  callback(totalPrice);
}

// Callback function to display the total price
function displayTotalPrice() {
  console.log("Total price", totalPrice);
}

// Call the main function passing in the books and the callback
calculateTotalPrice(books, displayTotalPrice);
