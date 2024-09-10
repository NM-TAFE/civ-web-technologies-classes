let integerNumber = 42;
let floatNumber = 3.14;

const circleRadius = 5;
const circumference = 2 _ Math.PI _ circleRadius;
console.log(circumference);

const num = 5.7;
const truncatedNum = Math.trunc(num);
console.log(truncatedNum);

const numToRound = 5.7;
const roundedNum = Math.round(numToRound);
console.log(roundedNum);

const numToCeil = 5.1;
const ceilingNum = Math.ceil(numToCeil);
console.log(ceilingNum);

const numToFloor = 5.9;
const floorNum = Math.floor(numToFloor);
console.log(floorNum);

const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
console.log(result);

const values = [3, 1, 5, 2, 7];
const minValue = Math.min(...values);
const maxValue = Math.max(...values);
console.log(minValue, maxValue);

// Generates a random number between 0 and 1
const randomNum = Math.random();
console.log(randomNum);
