/**
 * Array Functions
 */
let members = ['Dong', 'Young', 'Yang'];
console.log(members); // ['Dong', 'Young', 'Yang']

// Mutable functions
// These functions modify the original array.
// It is recommended to avoid mutating arrays directly in modern programming.

/**
 * push() adds an element to the end of the array
 * and returns the new length.
 */
console.log(members.push('Push Test')); // 4
console.log(members); // ['Dong', 'Young', 'Yang', 'Push Test']

/**
 * unshift() adds an element to the beginning of the array
 * and returns the new length.
 */
console.log(members.unshift('Unshift Test')); // 5
console.log(members); // ['Unshift Test', 'Dong', 'Young', 'Yang', 'Push Test']

/**
 * pop() removes the last element from the array
 * and returns the removed element.
 */
console.log(members.pop()); // 'Push Test'
console.log(members); // ['Unshift Test', 'Dong', 'Young', 'Yang']

/**
 * shift() removes the first element from the array
 * and returns the removed element.
 */
console.log(members.shift()); // 'Unshift Test'
console.log(members); // ['Dong', 'Young', 'Yang']

/**
 * splice(x, y) starts at index x, removes y elements,
 * and returns the removed elements as an array.
 */
console.log(members.splice(1, 2)); // ['Young', 'Yang']
console.log(members); // ['Dong']


// Immutable Functions
members = ['Dong', 'Young', 'Yang'];

/**
 * concat() combines the current array with new elements
 * and returns a new array without modifying the original array.
 * Similar with push().
 */
console.log(members.concat('Concat')); // ['Dong', 'Young', 'Yang', 'Concat']
console.log(members); // ['Dong', 'Young', 'Yang']

/**
 * slice(x, y) extracts(cut) elements from index x to y (not including y).
 * It does not modify the original array.
 */
console.log(members.slice(0, 1)); // ['Dong']
console.log(members); // ['Dong', 'Young', 'Yang']

/**
 * Spread operator
 * The spread operator (...) allows an array to be expanded into individual elements.
 */
console.log(members); // ['Dong', 'Young', 'Yang']
console.log(...members); // Dong Young Yang
let newMembers = [...members]; // ['Dong', 'Young', 'Yang']


// Useful Functions

/**
 * join() returns the array elements as a string, separated by a comma by default.
 * You can pass a parameter to use a different separator (e.g., '/' instead of ',').
 */
console.log(members.join()); // Dong,Young,Yang
console.log(members.join('/')); // Dong/Young/Yang

/**
 * sort() and reverse()
 * sort() sorts the array based on ASCII values (works best with strings by default).
 * reverse() reverses the order of the array.
 */

console.log(members.sort()); // ['Dong', 'Yang', 'Young']
console.log(members.reverse()); // ['Young', 'Yang', 'Dong']

// For sorting numbers, pass a compare function.
// If a - b < 0, a comes before b.
// If a - b > 0, b comes before a.
// If a - b = 0, the order stays the same.
let numbers = [1, 4, 6, 9, 2, 5];
console.log(numbers.sort((a, b) => a - b)); // [1, 2, 4, 5, 6, 9] (ASC)
console.log(numbers.sort((a, b) => b - a)); // [9, 6, 5, 4, 2, 1] (DESC)
