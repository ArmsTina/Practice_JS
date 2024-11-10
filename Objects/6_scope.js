/**
 * Scope
 */

var numberOne = 20; // Global variable

function levelOne() {
  console.log(numberOne); // Global scope
}

levelOne(); // 20

// Override levelOne with a new version
function levelOne() {
  var numberOne = 50; // Local scope
  console.log(numberOne);
}

levelOne(); // 50
console.log(numberOne); // 20 (global scope)

function levelOne1() {
  var numberOne = 40; // Local to levelOne1
  function levelTwo() {
    var numberTwo = 99; // Local to levelTwo
    console.log(`levelTwo One ${numberOne}`); // 40 (from levelOne1)
    console.log(`levelTwo Two ${numberTwo}`); // 99
  }
  levelTwo();
  console.log(`levelOne One ${numberOne}`); // 40
}

levelOne1(); // Runs levelOne1 and levelTwo inside it

/**
 * Lexical Scope in JavaScript
 */
var numberThree = 3; // Global variable

function functionOne() {
  var numberThree = 100; // Local to functionOne
  functionTwo(); // Calls functionTwo, which uses global scope
}

function functionTwo() {
  console.log(numberThree); // 3 (from global scope)
}

functionOne(); // 3

// Demonstrating var vs. let scoping in loops
var i = 999; // Global variable

// var in loop; does not create block scope
for (var i = 0; i < 10; i++) {
  console.log(i); // 0 to 9
}
console.log(i); // 10 (var is globally scoped)

console.log("=================");
i = 999; // Reset i to 999

// let in loop; creates block scope
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 to 9
}
console.log(i); // 999 (let is block-scoped, global i remains unchanged)

// Summary:
// - `var` is function-scoped, affecting the outer variable when used in loops.
// - `let` and `const` are block-scoped, so they don't affect outer scope variables in loops.
