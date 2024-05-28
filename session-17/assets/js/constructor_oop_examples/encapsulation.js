// Constructor function
function Animal(name) {
    // Encapsulation: Property encapsulated within the object
    this.name = name;
  
    // Method encapsulated within the object
    this.sayName = function() {
      console.log("My name is " + this.name);
    };
  }
  
  // Creating instances using the constructor
  var cat = new Animal("Fluffy");
  var dog = new Animal("Buddy");
  
  // Abstraction: Details of the Animal implementation are abstracted away
  cat.sayName(); // Outputs: "My name is Fluffy"
  dog.sayName(); // Outputs: "My name is Buddy"
  