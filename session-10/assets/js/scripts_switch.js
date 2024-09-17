function isValidEmail(email) {
  // Initialize a variable to store feedback
  let feedback = "";

  // Check for basic email format
  // hint: email.match()
  if (email.match(/^\S+@\S+\.\S+$/) === null) {
    feedback = "Invalid email format.";
  }

  // Check for spaces in the email
  // hint: use includes()
  if (email.includes(" ")) {
    feedback += " Remove spaces.";
  }

  // Check for the "@" symbol
  // hint: use includes()
  if (!email.includes("@")) {
    feedback += ' Add "@" symbol.';
  }

  // Check for multiple "@" symbols
  // hint: use split()
  // hint: count the number of parts using .length
  if (email.split("@").length > 2) {
    feedback += ' Remove extra "@" symbols.';
  }

  // Check for "@." sequence
  // hint: use includes()
  if (email.includes("@.")) {
    feedback += ' Add a valid domain after "@" symbol.';
  }

  // Check for "@" at the start or end
  // hint: use startsWith(), endsWith() & the or comparison opertor ||
  if (email.startsWith("@") || email.endsWith("@")) {
    feedback += ' Move "@" symbol to a valid position.';
  }

  // Determine the final validation result
  if (feedback === "") {
    return `Valid email: "${email}"`;
  } else {
    return `Invalid email: "${email}" - ${feedback.trim()}`;
  }
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalid email@.com"));
console.log(isValidEmail("no spaces@example.com"));
console.log(isValidEmail("bademail@.com"));
console.log(isValidEmail("@invalid.com"));
console.log(isValidEmail("extra@@invalid.com"));
