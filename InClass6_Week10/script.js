console.log("Script is running...");

let nums = [1, 2, 3, 4, 5]

for (let i = 0; i < nums.length; i++) {
    // This loop will execute the code block inside of the curly brackets
    // as long as the condition i < nums.length is true
    console.log(nums[i]);
};

// The method below will achieve the same outcome as the loop above
nums.forEach(function (number, indexOfNumber, wholeNumsArray) {
    console.log(`The current element that we are iterating over is ${number}
    and it has an index of ${indexOfNumber}`);
});

nums.forEach((num, i) => {
    num += num;
    console.log(num);
});

// Map: same as forEach except is returns a new array instead of modifying the existing array
let newNums = nums.map((num, i) => {
    return (num += num);
});
console.log(newNums);

//
const expenses = [
    { name: "Alice", amount: 45.75 },
    { name: "Bob", amount: 60.0 },
    { name: "Charlie", amount: 35.5 },
    { name: "Dave", amount: 50.0 },
    { name: "Eve", amount: 75.75 },
];

// forEach: Display each expense
expenses.forEach(function (expense) {
    console.log(`${expense.name}: ${expense.amount}`);
});

// map: Convert each expense to a different currency
const exchangeRate = 0.82;
const expenseInPounds = expenses.map((expense) => {
    return {
        name: expense.name,
        amount: expense.amount * exchangeRate
    };
});
console.log(expenseInPounds);

if ("Truth") console.log("True!");

// filter: Fund expenses more than $50
// The arrow function below is IMPLICITLY returning the expression ex.amount > 50
const overBudget = expenses.filter(ex => ex.amount > 50);
// The arrow function below is EXPLICITLY returning the expression ex.amount > 50
const overBudget2 = expenses.filter((ex) => {
    return ex.amount > 50;
});
console.log(overBudget);
console.log(overBudget2);

// reduce: Calculate total expenses
const totalExpense = expenses.reduce((total, expense) => {
    return total += expense.amount;
}, 0);
console.log(totalExpense);

// find: Find the first person whose expense is exactly $50
const spent50Dollars = expenses.find((ex) => ex.amount == 50);
console.log(spent50Dollars);

// some: Check if any expense is above $100
const hasLargeExpense = expenses.some((ex) => ex.amount > 100);
console.log(hasLargeExpense);

// every: Check if all expense are below $100
const allBelowHundred = expenses.every((ex) => ex.amount < 100);
console.log(allBelowHundred);

// sort: Sorts the original array
const sortedExpense = expenses.sort((a, b) => a.amount - b.amount);
console.log(sortedExpense);

//