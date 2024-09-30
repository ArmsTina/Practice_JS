let age = 32;

/**
 * Caution:
 * Be careful when combining strings and numbers.
 * The '+' operator can concatenate if one operand is a string.
 * JavaScript automatically converts types, leading to unexpected results.
 */
console.log(age + ''); // "32" (number converted to string)
console.log('98' + 2); // "982" (concatenation)
console.log('98' * 2); // 196 (string converted to number for multiplication)

// How to explicitly convert types:

/**
 * 1. toString()
 * Converts a value to a string.
 */
console.log(typeof age.toString()); // "string"
console.log(typeof (99).toString()); // "string"
console.log(typeof (true).toString()); // "string"

// 1-1. You can also use String(value).
console.log(typeof String(99)); // "string"
console.log(typeof String(true)); // "string"

// 1-2. Convert numbers to different base representations (e.g., binary, hexadecimal).
console.log(typeof (10).toString(2), (10).toString(2)); // "string", "1010" (binary representation)

/**
 * 2. parseInt()
 * Converts a string to an integer.
 * Decimal parts are discarded.
 */
let number = parseInt('1.9'); // 1
console.log(typeof number, number); // "number", 1

// 2-1. You can also use Number(value).
console.log(typeof Number('1'), Number('1')); // "number", 1

/**
 * 3. parseFloat()
 * Converts a string to a floating-point number.
 */
number = parseFloat('1.2'); // 1.2
console.log(typeof number, number); // "number", 1.2

// 3-1. You can also use Number(value).
console.log(typeof Number('1.1'), Number('1.1')); // "number", 1.1

/**
 * 4. Converting to Boolean
 * In JavaScript, most values are "truthy" except for falsy values.
 * Falsy values: '', 0, null, undefined, NaN, false.
 * Truthy values include non-empty strings, non-zero numbers, objects, arrays, etc.
 * Double negation (!!) converts a value to its Boolean equivalent.
 */
console.log(!!''); // false (empty string)
console.log(!!'0'); // true (non-empty string)
console.log(!!0); // false (number 0)
console.log(!!null); // false (null)
console.log(!!undefined); // false (undefined)
console.log(!![]); // true (empty array is truthy)
console.log(!!{}); // true (empty object is truthy)