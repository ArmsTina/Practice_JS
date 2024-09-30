/**
 * DRY Principle:
 * D: Don't
 * R: Repeat
 * Y: Yourself
 * 
 * The DRY principle encourages reusing existing functionality to avoid code repetition.
 */

/**
 * The 'calculate' function takes a parameter 'number' and logs its value incremented by 1.
 * The loop variable 'i' is passed as the argument to 'calculate'.
 */
function calculate(number) {
    console.log(number + 1);
}
for (let i = 0; i < 5; i++) {
    calculate(i);
}

/**
 * Default parameter values:
 * You can assign default values to function parameters, which will be used if the function is called without those arguments.
 */
function multiply(x = 5, y = 10) {
    console.log(x * y);
}
multiply(2, 5); // 10
multiply(2); // 20 (y defaults to 10)
multiply(); // 50 (x defaults to 5 and y defaults to 10)

/**
 * Functions can return values.
 */
function returnNum() {
    return 1;
}
let num = returnNum();
console.log(returnNum(), num); // 1 1

/**
 * Arrow Functions:
 * A concise syntax for functions, useful for shorter expressions.
 */
const multi1 = (x, y) => x * y;
console.log(multi1(2, 2)); // 4

const multi2 = (x, y) => x * y; // Direct return without 'return' keyword.
console.log(multi2(3, 3)); // 9

/**
 * Arrow functions can also return functions, enabling currying.
 */
const multi3 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multi3(2)(5)(7)); // "x: 2 y: 5 z: 7"

/**
 * 'arguments' object holds all arguments passed to the function.
 * Useful when the number of arguments isn't fixed.
 */
function test(x, y, z) {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
}
test(1, 2, 3);

/**
 * Spread arguments:
 * Use the 'rest' operator (...) to collect all passed arguments into an array.
 */
function test2(...args) {
    console.log(args);
}
test2(1, 2, 3, 4, 5, 6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]
test2(1, 2, 3); // [1, 2, 3]

/**
 * Immediately Invoked Function Expression (IIFE):
 * A function that is executed immediately after it is defined.
 */
(function(x, y) {
    console.log(x * y); // 2
})(1, 2); // 2
