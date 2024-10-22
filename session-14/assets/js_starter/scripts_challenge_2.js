// Challenge 2 Starter
const userObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
  changeAge(newAge) {
    this.age = newAge;
  },
};

// Deep clone the complexObject three times using the spread operator for shallow cloning
const clone1 = { ...userObject };
const clone2 = { ...userObject };

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const clone3 = deepClone(userObject);

// Store the cloned objects in an array
const clonedObjects = [clone1, clone2, clone3];

// Sort the array of cloned objects based on the 'age' property in ascending order
clonedObjects.sort((a, b) => a.age - b.age);

// Log the sorted array to the console
console.log(clonedObjects);
