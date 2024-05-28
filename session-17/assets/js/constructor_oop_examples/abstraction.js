// Parent constructor
function Animal(name) {
    this.name = name;
  }
  
  // Method in the parent prototype
  Animal.prototype.makeSound = function() {
    console.log("Generic animal sound");
  };
  
  // Child constructor inheriting from Animal
  function Cat(name) {
    Animal.call(this, name);
  }
  
  // Inheriting from Animal
  Cat.prototype = Object.create(Animal.prototype);
  
  // Overriding the makeSound method for Cat
  Cat.prototype.makeSound = function() {
    console.log("Meow");
  };
  
  // Creating instances
  var genericAnimal = new Animal("Generic");
  var fluffy = new Cat("Fluffy");
  
  genericAnimal.makeSound(); // Outputs: "Generic animal sound"
  fluffy.makeSound(); // Outputs: "Meow"
  