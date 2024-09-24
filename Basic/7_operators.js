/**
 * Operators in JavaScript:
 * 
 * Arithmetic Operators:
 *   +  : Add
 *   -  : Subtract
 *   *  : Multiply
 *   /  : Divide
 *   %  : Modulo (remainder)
 *   ** : Exponentiation
 *   ++ : Increment
 *   -- : Decrement
 * 
 * Assignment Operators:
 *   =  : Assign value (e.g., x = 5)
 *   += : Add and assign (e.g., x += 3)
 *   -= : Subtract and assign (e.g., x -= 2)
 * 
 * Comparison Operators:
 *   ==  : Equal to (Compare values)
 *   === : Strict equal to (Compare their data types too)
 *   !=  : Not equal to
 *   !== : Strict not equal to
 *   >   : Greater than
 *   <   : Less than
 *   >=  : Greater than or equal to
 *   <=  : Less than or equal to
 * 
 * Logical Operators:
 *   && : AND
 *   || : OR
 *   !  : NOT
 */


// Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(b ** b); // 27

// Increment and Decrement Operators
let count = 0;
count++; // count is now 1
count--; // count is now 0

// Assignment Operators
let x = 5;
x += 3; // x is now 8
x -= 2; // x is now 6

// Comparison Operators
console.log(a === b); // false
console.log(a != b); // true
let c = 3;
console.log(c == b); // true
console.log(c === b); // true

// Logical Operators
let isAdult = true;
let hasLicense = false;
console.log(isAdult && hasLicense); // false
console.log(isAdult || hasLicense); // true
console.log(!isAdult); // false

/**
 * Short Circuit Evaluation (단축평가)
 * true && 'test', return test
 * false && 'test', return false
 * true || 'test', return true
 * false || 'test', return test  
 */
console.log("==============");
console.log(true && 'test'); // test
console.log(false && 'test'); // false
console.log(true || 'test'); // true
console.log(false || 'test'); // test
console.log(true && true && 'test2'); // test2
console.log(false || false && 'test2'); // false