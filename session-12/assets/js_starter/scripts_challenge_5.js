// Challenge 5 Solution
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Define the function doubleNumbers
function doubleNumbers(arr) {
  // Use the map() method to double each number in the array
  let doubled = arr.map((number) => number * 2);
  // Return the new array
  return doubled;
}

// Call the function with the numbers array
let result = doubleNumbers(numbers);

// Console log the new array
console.log(result);