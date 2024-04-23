// Step 1 Global
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${x}`);

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

// Code snippets from the Session 11 presentation
// const items = ["a", "b", "c", "d", "e", "f"];

// const i = 3;
// const filteredItemns = items
//   .slice(0, i - 1)
//   .concat(items.slice(i, items.length));

// const b = Array(12).fill(0);

// let a = [1, 2, 3];
// const d = a.map((item, index, arr) => console.log(item, index, arr));

// a = [10, 2, 7, 4, 5];
// a.sort((a, c) => (a > c ? 1 : -1));
// console.log(b);
