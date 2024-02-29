const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000"
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe"
  },
  isEmployed: true
};

console.log(userObject.firstName); // Output: John
console.log(userObject.address.city); // Output: Anytown
console.log(userObject.skills[0]); // Output: JavaScript
console.log(userObject.socialProfiles.twitter); // Output: @johndoe
