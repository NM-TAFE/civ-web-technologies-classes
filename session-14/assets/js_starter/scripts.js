const books = [
  { title: "Book 1", author: "Author A", price: 15, ISBN: "ISBN-111" },
  { title: "Book 2", author: "Author B", price: 20, ISBN: "ISBN-222" },
  { title: "Book 3", author: "Author C", price: 25, ISBN: "ISBN-333" },
  { title: "Book 4", author: "Author D", price: 30, ISBN: "ISBN-444" },
  { title: "Book 5", author: "Author E", price: 35, ISBN: "ISBN-555" },
  { title: "Book 6", author: "Author F", price: 40, ISBN: "ISBN-666" },
  { title: "Book 7", author: "Author G", price: 45, ISBN: "ISBN-777" },
  { title: "Book 8", author: "Author H", price: 50, ISBN: "ISBN-888" },
  { title: "Book 9", author: "Author I", price: 55, ISBN: "ISBN-999" },
  { title: "Book 10", author: "Author J", price: 60, ISBN: "ISBN-1010" },
];

// 1. find: Finds the first book priced above 30
const bookAbove30 = books.find((book) => book.price > 30);
console.log(bookAbove30);

// 2. some: Checks if any book is priced above 50
const anyBookAbove50 = books.some((book) => book.price > 50);
console.log(anyBookAbove50);

// 3. every: Checks if every book is priced above 10
const allBooksAbove10 = books.every((book) => book.price > 10);
console.log(allBooksAbove10);

// 4. sort: Sorts books by price in ascending order
const sortedBooks = books.slice().sort((a, b) => a.price - b.price);
console.log(sortedBooks);

// 5. concat: Concatenates another array of books with the current books array
const additionalBooks = [
  { title: "Book 11", author: "Author K", price: 65, ISBN: "ISBN-1111" },
  { title: "Book 12", author: "Author L", price: 70, ISBN: "ISBN-1212" },
];
const allBooks = books.concat(additionalBooks);
console.log(allBooks);

// 6. flatMap: Creates a new array with prices and titles, flattening the structure
const pricesAndTitles = books.flatMap((book) => [book.price, book.title]);
console.log(pricesAndTitles);

// 7. forEach: Logs each book's title to the console
books.forEach((book) => console.log(book.title));

// 8. filter: Filters books that are priced above 30
const booksAbove30 = books.filter((book) => book.price > 30);
console.log(booksAbove30);

// 9. map: Maps to a new array of book titles
const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// 10. reduce: Calculates the total price of all books
const totalPrice = books.reduce((total, book) => total + book.price, 0);
console.log(totalPrice);
