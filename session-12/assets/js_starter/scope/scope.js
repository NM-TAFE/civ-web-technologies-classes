// Step 1 Global
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function localFunction() {
  // Step 2 Local
  // var x = 10;
  // const z = 5;

  console.log(`local: ${x}`);
  console.log(`local: ${y}`);
  console.log(`local: ${z}`);

  {
    // Step 3 Block
    // var x = 11;
    // const z = 6;

    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }

  //   Step 4 Function scoping
  //   console.log(`local: ${x}`);
  //   console.log(`local: ${y}`);
  //   console.log(`local: ${z}`);
}

localFunction();


