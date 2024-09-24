/**
 * Types of Variables
 * 1. var - no longer used, outdated version of let
 * 2. let - variable for flexible values
 * 3. const - variable for consistent values
 */

// var - can be updated, can be re-declared
var varHello = "Hello, World with var";
console.log(varHello);
var varHello = "Bye, World with var"; // can be re-declared, can be updated
console.log(varHello);

// let - can be updated, can't be re-declared
let letHello = "Hello, World with let";
console.log(letHello);
// let letHello = "Bye, World with let"; is not working, can't be re-declared
letHello = "Bye, World with let"; // but you can update it
console.log(letHello);

// const - can't be updated, can't be re-declared
const constHello = "Hello, World with const";
console.log(constHello);
// constHello = "Bye, World with const"; is not working, can't be updated

// If you don't assign, it will be undefined
let test;
console.log(test); // undefined
// const must be initialized