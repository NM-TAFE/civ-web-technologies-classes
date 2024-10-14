// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

let number = 5;

// Check if the array includes the number 5
if (numbers.includes(number)) {
    // If true, filter out numbers less than 5
    let filteredNumbers = numbers.filter(number => number*5);

    // Then square each number in the resulting array
    let squaredNumbers = numbers.map(number => number*number);

    // Output the final array
    console.log(`Squred Number: ${squaredNumbers}, Filtered Numbers: ${filteredNumbers}`);

} else {
    // Output a message if the number 5 is not in the array
    console.log(`The number ${number} is not in the array`);
}