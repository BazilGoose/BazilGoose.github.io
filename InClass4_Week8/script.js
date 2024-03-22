// ------------------------- ARRAYS -----------------------------

console.log("Script is running...");

let mixArray = [10, "A String", [1, 2, 3], {myKey: "my Value"}, true];

console.log(mixArray[0]); // Will return the element at index 0 of the Array (i.e. the first element).

mixArray.push("Dinosaur"); // Array.push() will appen the argument passed as a new element at the end of the array.
console.log(mixArray);

mixArray.pop();// Array.pop() will remove the last element in the array.
console.log(mixArray);

mixArray.unshift(200); // Array.unshift() will append a new element to the begining of an array.
console.log(mixArray);

mixArray.shift(); // Array.shift will remove an element from the beginning of an array.
console.log(mixArray);

mixArray.splice(2, 1); // Array.slice() will remove a certain amount of elements (second value) starting from a given index (first value) and optionally replace them with new elements.
console.log(mixArray);

console.log(mixArray.length); // Will return the number of elements in the array.

console.log(mixArray[mixArray.length - 1]) // Will return the last element in the array.

let copyOfMixArray = [...mixArray]; // The spread operator (...) will copy the contents of the container that your are referencing.
console.log(mixArray.includes(10)); // Will return true if the array includes the argument, and false otherwise.

// ------------------------ OBJECTS ---------------------------

let car = {
    type: "Supercar", // type => KEY, "Supercar" => Value
    brand: "Rimac Nevera",
    year: 2024,
    color: "red",
    numArray: [1,2,3],
    subCar: {color: "yellow"}, // Nesting is when you have an object inside of another object
    greeting: () => console.log("Hello Rimac Nevera!") // This is a method in the car object
};

console.log(car);
console.log(car.type);
console.log(car["type"]);
car.greeting();
console.log(car.subCar.color);
console.log(car["subCar"]["color"]);


console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

// ----------------------------- FUNCTIONS -----------------------------

function findSum(a, b){
    // debugger;
    let sum = a + b;
    return sum;
};

console.log(findSum(325, 286));
let calculatedSum = findSum(325, 286);

function convertStringToArray(inputString){
    let convertedArray = inputString.split("");
    return convertedArray;
};

let dinosaurArray = convertStringToArray("Dinosaur");

console.log(dinosaurArray);

// Function Declaration - HOISTED: Available anywhere in your code, preloaded into code.
function sumDec(a, b){
    console.log(a + b);
    return a + b;
};

// Function Expression - Block Scope: Acts like a variable, only loaded once it has been initialized or passed.
const sumEx = function (a, b){
    console.log(a + b);
    return a + b;
};

// Arrow Function - Block Scope
const sumAr = (a, b) => console.log(a + b);

sumDec(5, 10);
sumEx(5, 15);
sumAr(5, 20);

// Callback Functions

const nums = [5, 3, 8, 0, 1, 3, 9, 2, 7];

// For arrow functions, we have something called IMPLICIT return
const filteredArray = nums.filter((eachNum) => eachNum > 5); // Implicit Return

const filteredArrayExplicit = nums.filter((eachNum) => { return eachNum > 5; }); // Explicit Return
