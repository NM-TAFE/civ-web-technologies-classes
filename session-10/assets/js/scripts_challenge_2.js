function isValidEmail(email) {
  // Use expression operators, strings, the match method
  // and a template literal containing a ternary operator to validate the email
  // Use expression operators, the match method, a regex and strings to validate the email
  if (email.match(/^\S+@\S+\.\S+$/) !== null) {
    return ` The email "${email}" is valid`;
  } else {
    return ` The email "${email}" is invalid`;
  }
}

// Test cases
console.log(isValidEmail("john@example.com"));
console.log(isValidEmail("invalidemail@.com"));
console.log(isValidEmail("no spaces@example.com"));
