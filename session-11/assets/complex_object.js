const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    postCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
};

console.log(userObject.firstName); // Output: John
console.log(userObject.address.city); // Output: Anytown
console.log(userObject.skills[0]); // Output: JavaScript
console.log(userObject.socialProfiles.twitter); // Output: @johndoe

// Place a breakpoint on line 19 & a watch statement on the
// ** userObject ** and then run the following in the console
// userObject.firstName = "Xavier";
// userObject["url"] = "https://www.9thlevel.com";
// delete userObject["url"];

// 2. Properties
//  userObject["fullNamefunction"] = (firstName, lastName) => {
//   console.log(`${firstName} ${lastName}`);
// };

// userObject.fullNamefunction(userObject.firstName, userObject.lastName);

//3. Object
// userObject["fullAddressfunction"] = ({ street, city, postCode }) => {
//   console.log(`${street}, ${city}, ${postCode}`);
// };

// userObject.fullAddressfunction(userObject.address);

// //3. This & arrow functions
// userObject["fullAddressfunction"] = () => {
//   console.log(`This: ${this}`);
// };

// userObject.fullAddressfunction();

// userObject["fullAddressfunction"] = function () {
//   console.log(
//     `This: ${this}``This address: ${this.address.street}, ${this.address.city}, ${this.address.postCode}`
//   );
// };

// userObject.fullAddressfunction();
