// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
  constructor(
    firstName,
    lastName,
    age,
    isStudent,
    address,
    skills,
    socialProfiles,
    isEmployed
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.student = isStudent;
    this.address = address;
    this.skills = skills;
    this.socialProfiles = socialProfiles;
    this.isEmployed = isEmployed;
  }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const userObjectInstance = new UserObject(
  "John",
  "Doe",
  30,
  false,
  {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  ["JavaScript", "HTML", "CSS"],
  {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  true
);

// Log the new instance of the object
console.log(userObjectInstance);
