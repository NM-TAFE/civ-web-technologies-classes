// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
let lastElement = number.pop()
// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(lastElement)
// Use the slice() method to exclude the first 3 elements and return a new array
let newArray = numbers.slice(3)
// Set the value of the outputfield inner html to the new array
let outputField = document.getElementById('OutputField')
outputField.innerHTML = newArray