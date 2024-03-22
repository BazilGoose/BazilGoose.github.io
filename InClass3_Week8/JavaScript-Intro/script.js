console.log("Hello world!");

// String primitive datatype
var greeting = "Hello world!"; // You can use either single ' or double " quotation marks

// Number primitive data type
let myNumber = 10;

// Boolean primitive data type
const isLearning = true; // Lowercase t, reserved keywords are case-sensitive

// var: variable value that is available throughout the function where it's defined. Function-level scope.
// let: variable value that is only available inside the block where it's defined. Block-level scope.
// const: constant value, can't be changed. Block-level scope.

// Null & Undefined
let iAmNull = null; // Used a placeholder for when you haven't assigned a value so it has a value assigned to it. The value of null.
let iAmUndefined; // Uninitialized variable / value assigned to it.

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.concat(" I am super excited to learn JS!"));
// String interpolation (Using Template Literals)
console.log(`The greeting is ${greeting.length} characters long`);
console.log(greeting[0]); // Returns the character at index 0 of the String "H"
console.log(greeting.replaceAll("l",""));

// ----------------------- NUMBERS & OPERATORS -------------------------

let a = 5;
let b = 10;

// Addition
console.log(a + b);

// Subtraction
console.log(a - b);

// Multiplication
console.log(a * b);

// Division
console.log(a / b);

// Modulus
console.log(b % a);

// Square Root
console.log(Math.sqrt(a));
console.log(Math.sqrt(b));

// ----------------------- RELATIONS & LOGICAL EXPRESSIONS -------------------------

let c = 10;
let d = 15;
let f = "10";

console.log(c == d); // false
console.log(c != d); // true
console.log(c == f); // true (checks value but not datatype)
console.log(c === f); // false (checks both datatype and value. Strict Equality Operator)
console.log(d > c); // true
console.log(d <= c); // false
console.log(c != d && d < f); // false (needs both to be true)
console.log(c != d || d < f); // true (only one needs to be true)
