let age = 32;

/**
 * Caution:
 * Be mindful when using strings and numbers together.
 * The '+' operator can result in concatenation if one of the operands is a string.
 * JavaScript will automatically convert types, which can lead to unexpected results.
 */
console.log(age + ''); // String: "32"
console.log('98' + 2); // String: "982" (concatenation)
console.log('98' * 2); // Number: 196 (multiplication converts string to number)

// So, how can we convert a type of value?

/**
 * 1. toString()
 * Converts a value to a string.
 */
console.log(typeof age.toString()); // "string"
console.log(typeof (99).toString()); // "string"
console.log(typeof (true).toString()); // "string"

// 1-1. You can use String(value) too.
console.log(typeof String(99)); // "string"
console.log(typeof String(true)); // "string"

// 1-2. You can convert numbers to different base representations, such as binary, hexadecimal, etc.
// The parameter in toString() defines the base (radix) from 2 to 36.
console.log(typeof (10).toString(2), (10).toString(2)); // "string", "1010"

/**
 * 2. parseInt()
 * Converts a string to an integer.
 * It will truncate decimal values.
 */
let number = parseInt('1.9'); // Result: 1 (decimal is dropped)
console.log(typeof number, number); // "number", 1

// 2-1. You can use Number(value) too.
console.log(typeof Number('1'), Number('1')); // "number", 1

/**
 * 3. parseFloat()
 * Converts a string to a floating-point number.
 */
number = parseFloat('1.2'); // Result: 1.2 (decimal is preserved)
console.log(typeof number, number); // "number", 1.2

// 3-1. You can use Number(value) too.
console.log(typeof Number('1.1'), Number('1.1')); // "number", 1.1

/**
 * 4. Converting to Boolean type
 * In JavaScript, most values are "truthy" except for a few falsy values.
 * Falsy values: '', 0, null, undefined, NaN, and false.
 * Truthy values include non-empty strings, numbers other than 0, objects, arrays, etc.
 * The double negation (!!) converts any value to its Boolean equivalent.
 */
console.log(!!''); // false (empty string)
console.log(!!'0'); // true (non-empty string)
console.log(!!0); // false (number 0)
console.log(!!null); // false (null)
console.log(!!undefined); // false (undefined)
console.log(!![]); // true (empty array is truthy)
console.log(!!{}); // true (empty object is truthy)
