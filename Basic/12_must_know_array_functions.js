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


// Immutable methods
members = ['Dong', 'Young', 'Yang'];

/**
 * concat() combines the current array with new elements
 * and returns a new array without modifying the original array.
 */
console.log(members.concat('Concat')); // ['Dong', 'Young', 'Yang', 'Concat']
console.log(members); // ['Dong', 'Young', 'Yang']
