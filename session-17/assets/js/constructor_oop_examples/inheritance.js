// Parent constructor
function Shape(color) {
    this.color = color;
  }
  
  // Child constructor inheriting from Shape
function Circle(radius, color) {
    // Inheriting properties from Shape
    Shape.call(this, color);
  
    // Adding new properties specific to Circle
    this.radius = radius;
  }
  
// Setting up the prototype chain for inheritance
Circle.prototype = Object.create(Shape.prototype);
  
// Adding a method to the Circle prototype
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };
  
// Creating instances
var redCircle = new Circle(5, "red");
  console.log(redCircle.color); // Outputs: "red"
  console.log(redCircle.getArea()); // Outputs: Area of the circle
  