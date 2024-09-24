/**
 * Data Types in JavaScript
 * There are 6 Primitive Types and 1 Object Type.
 * 
 * JS using dynamic typing - The type of a variable is determined at runtime based on the value assigned to it.
 * 
 * Primitive Types:
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. Symbol
 * 
 * Object Type:
 * 1. Object (including Arrays, Functions, and Objects)
 */

// 1. Number
let age = 1;
console.log("Age:", typeof age); // number

// 2. String
let name = 'dongyoung';
console.log("Name:", typeof name); // string

// 3. Boolean
let korean = true;
console.log("Korean:", typeof korean); // boolean

// 4. Undefined: The variable is declared but not initialized.
let idk;
console.log("Undefined:", typeof idk); // undefined

// 5. Null: It represents an intentional absence of any object value.
// Note: `typeof null` returns "object" due to a historical bug in JavaScript.
// Null is actually a primitive type, not an object.
let nothing = null;
console.log("Null:", typeof nothing); // object

// 6. Symbol: A unique and immutable primitive value.
// Even if two symbols have the same description, they are always unique and not equal.
let uniqueId1 = Symbol('id');
let uniqueId2 = Symbol('id');
console.log("=== Symbol ===");
console.log(uniqueId1 === uniqueId2); // false, symbols with the same description are still unique
console.log(typeof uniqueId1); // symbol
console.log("================");


// 7. Object: A complex data type that can store collections of data.
// This includes arrays, functions, and objects.
let person = {
    name: 'dongyoung',
    age: 24
};
let people = ['me', 'you','we'];
console.log("Person Object:", typeof person); // object
console.log("People Array:", typeof people); // object

const testFucntion = new Function();
console.log("testFunction:", typeof testFucntion); // function
// Note: In JavaScript, functions are special types of objects. 

/**
 * Template Literals
 * 1. Newline: \n
 * 2. Tab: \t
 * 3. Backslash: \\
 * 4. Single quote: ' or double quote: " can be used inside string literals without escaping.
 * 5. Interpolation: `${expression}` allows embedding expressions within a string.
 */
console.log('Hello\nNew Line and Tab\tand backslash\\'); // Newline, tab, and backslash example
console.log("Show ' in String"); // Show single quote in double-quoted string
console.log('Show " in String'); // Show double quote in single-quoted string
const country = 'Korea';
console.log(`${country} is a great country.`); // Korea is a great country.
