/**
 * Hoisting in JavaScript:
 * - Variables declared with 'var' are moved to the top of their scope.
 * - Before they are assigned a value, they are 'undefined'.
 */

console.log(name); // Outputs: undefined
var name = "Hello";
console.log(name); // Outputs: Hello

// To avoid unexpected 'undefined', use 'let' or 'const' instead of 'var'.
