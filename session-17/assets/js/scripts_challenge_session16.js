class ComplexObject {
    constructor(firstName, lastName, age, isStudent, address, skills, socialProfiles, isEmployed) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;
        this.address = address;
        this.skills = skills;
        this.socialProfiles = socialProfiles;
        this.isEmployed = isEmployed;
    }
}

// Create an instance of the ComplexObject class
const complexObjectInstance = new ComplexObject(
    "John",
    "Doe",
    30,
    false,
    {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    ["JavaScript", "HTML", "CSS"],
    {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    true
);

console.log(complexObjectInstance);



