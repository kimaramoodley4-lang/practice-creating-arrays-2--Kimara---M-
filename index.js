// Task 1: Initialize the Array
// Create an array with a size of 7
let arrayOne = new Array(7); 
// Fill all slots with "Hello"
arrayOne.fill("Hello");
console.log("Task 1 Result:", arrayOne);

// Task 2: Update the Array
// Fill only part (from index 0 to 3) with a different value
// .fill(value, start, end) -> end is not inclusive
arrayOne.fill("Hi", 0, 3);
console.log("Task 2 Result:", arrayOne);

// Task 3: Populate the Array with a for Loop
let arrayTwo = new Array(5);
for (let i = 0; i < arrayTwo.length; i++) {
    arrayTwo[i] = i * 10;
}
console.log("Task 3 Result:", arrayTwo);
