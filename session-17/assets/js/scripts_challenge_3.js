// Challenge 3
// Book constructor
function Book(title, author) {
    this.title = title;
    this.author = author;

    // Method to display book information
    this.displayInfo = function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    };
}
  
// // Method to display book information
// Book.prototype.displayInfo = function() {
//     console.log(`Title: ${this.title}, Author: ${this.author}`);
// };
  
// Creating instances using the Book constructor
let book1 = new Book("Harry Potter I", "J.K. Rowling");
let book2 = new Book("Harry Potter II", "J.K. Rowling");
  
// Displaying book information
book1.displayInfo(); // Outputs: Title: The Catcher in the Rye, Author: J.D. Salinger
book2.displayInfo(); // Outputs: Title: To Kill a Mockingbird, Author: Harper Lee
  