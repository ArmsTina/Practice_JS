/**
 * DRY Principle:
 * D: Don't
 * R: Repeat
 * Y: Yourself
 * 
 * The DRY principle emphasizes avoiding the repetition of code by encouraging reuse of existing functionality.
 */

/**
 * The 'calculate' function takes a parameter 'number' and prints its value incremented by 1.
 * The loop variable 'i' is passed as the argument to 'calculate'.
 */
function calculate(number){
    console.log(number + 1);
}
for(let i = 0; i < 5; i++){
    calculate(i);
}

/**
 * Default parameter values:
 * You can assign default values to function parameters, which will be used if the function is called without those arguments.
 */
function multiply(x = 5, y = 10){
    console.log(x * y);
}
multiply(2, 5); // Outputs 10
multiply(2); // Outputs 20 (y defaults to 10)
multiply(); // Outputs 50 (x defaults to 5 and y defaults to 10)

// You can return values from functions
function returnNum(){
    return 1;
}
let num = returnNum();
console.log(returnNum(), num); // Outputs 1 1

/**
 * Arrow Function:
 * A more concise syntax for writing functions. It is particularly useful in situations requiring shorter function expressions.
 */
const multi1 = (x, y) => {
    return x * y;
}
const multi2 = (x, y) => x * y; // This version returns the value directly without the `return` keyword.
console.log(multi1(2, 2)); // Outputs 4
console.log(multi2(3, 3)); // Outputs 9

// Arrow functions can return functions, enabling currying:
const multi3 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multi3(2)(5)(7)); // Outputs: "x: 2 y: 5 z: 7"

// Equivalent to:
// const multi3 = function(x){
//     return function(y){
//         return function(z){
//             return `x: ${x} y: ${y} z: ${z}`;
//         }
//     }
// }

/**
 * 'arguments' is an object that holds all the arguments passed to the function.
 * It is useful in cases where the number of arguments isn't fixed.
 */
function test(x, y, z){
    console.log(arguments); // Outputs the arguments object containing all parameters.
}
test(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }

/**
 * Spread arguments:
 * You can pass an indefinite number of arguments to a function, and the 'rest' operator (...) will collect them into an array.
 */
function test2(...args){ // 'args' is an array of all passed arguments
    console.log(args);
}
test2(1, 2, 3, 4, 5, 6, 7, 8); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]
test2(1, 2, 3); // Outputs: [1, 2, 3]

// Immediately Invoked Function Expression (IIFE):
// A function that is executed immediately after it is defined.
(function(x, y){
    console.log(x * y); // Outputs the product of x and y
})(1, 2); // Outputs 2
