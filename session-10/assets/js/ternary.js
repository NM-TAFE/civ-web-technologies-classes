// Example 1: Simple conditional check
const age = 20;
const canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote yet.";
console.log(canVote); // Output: Yes, you can vote!

// Example 2: Assigning default values
const userInput = ""; // User did not input anything
const message = userInput ? userInput : "Default message";
console.log(message); // Output: Default message

// Example 3: Nested ternary operator (not recommended for readability)
const number = 10;
const checkNumber = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(checkNumber); // Output: Positive

// Example 4: Ternary with functions
function isEven(num) {
  return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
}
console.log(isEven(4)); // Output: 4 is even
console.log(isEven(7)); // Output: 7 is odd

// Example 5: Ternary with complex expressions
const temperature = 30;
const weather =
  temperature > 35
    ? "Very Hot"
    : temperature > 25
    ? "Warm"
    : temperature > 15
    ? "Cool"
    : "Cold";
console.log(weather); // Output: Warm

// Example 6: Conditional rendering (for example in React)
const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(welcomeMessage); // Output: Welcome back!

// Example 7: Using ternary in template literals
const speed = 120;
const drivingStatus = `You are driving ${
  speed > 100 ? "too fast" : "within the limit"
}.`;
console.log(drivingStatus); // Output: You are driving too fast.

// Example 8: Multiple conditions with logical operators
const isAdult = true;
const hasPermission = true;
const canEnterClub =
  isAdult && hasPermission ? "Entry allowed" : "Entry denied";
console.log(canEnterClub); // Output: Entry allowed

// Example 9: Using ternary to avoid undefined or null (nullish checks)
const name = null;
const displayName = name !== null && name !== undefined ? name : "Guest";
console.log(displayName); // Output: Guest

// Example 10: Short-circuiting (using ternary for conditional assignment)
const discount = 0;
const finalPrice = discount > 0 ? 100 - discount : 100;
console.log(finalPrice); // Output: 100

// Example 11 - Use ternary operator to show or hide the message
messageElement.style.display = isVisible ? "block" : "none";
