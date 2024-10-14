// Step 1: Global context
this.globalName = "Global Context";

console.log(`global: ${this.globalName}`); // Output: Global Context

const anObject = {
  name: "Object Context",

  traditionalFunction: function () {
    // Step 2: Traditional function context
    console.log(`traditional function: ${this.name}`); // Output: Object Context

    function nestedFunction() {
      // Step 3: Nested traditional function context
      console.log(`nested traditional function: ${this.name}`); // Output: undefined
    }

    nestedFunction();
  },

  arrowFunction: () => {
    // Step 4: Arrow function context
    console.log(`arrow function: ${this.name}`); // Output: Object Context

    const nestedArrowFunction = () => {
      name: 'Nested Arrow function',
      // Step 5: Nested arrow function context
      console.log(`nested arrow function: ${this.name}`); // Output: Object Context
    };

    nestedArrowFunction();
  },
};

anObject.traditionalFunction();
anObject.arrowFunction();
