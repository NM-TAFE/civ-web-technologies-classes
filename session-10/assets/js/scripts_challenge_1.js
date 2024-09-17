function isValidEmail(email) {
  // Use expression operators, the match method, a regex and strings to validate the email
  const valid = email.match(/^\S+@\S+\.\S+$/) !== null;
  return valid;
}

// Test cases
console.log(isValidEmail("john@example.com")); // Should return true
console.log(isValidEmail("invalidemail@.com")); // Should return false
console.log(isValidEmail("no spaces@example.com")); // Should return true
