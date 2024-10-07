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

/**
 * Immutable functions
 */

// Reset to initial values
members = ['Dong', 'Young', 'Yang'];

/**
 * concat() combines the current array with new elements
 * and returns a new array without modifying the original array.
 * Similar with push().
 */
console.log(members.concat('Concat')); // ['Dong', 'Young', 'Yang', 'Concat']
console.log(members); // ['Dong', 'Young', 'Yang']
console.log(members.concat(['test1', 'test2', 'test3'])); // [ 'Dong', 'Young', 'Yang', 'test1', 'test2', 'test3' ]

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

// Reset to initial values
members = ['Dong', 'Young', 'Yang'];

// For sorting numbers, pass a compare function.
// If a - b > 0, a comes after b.
// If a - b < 0, b comes after a.
// If a - b = 0, the order stays the same.
let numbers = [1, 4, 6, 9, 2, 5];
console.log(numbers.sort((a, b) => a - b)); // [1, 2, 4, 5, 6, 9] (ASC)
console.log(numbers.sort((a, b) => b - a)); // [9, 6, 5, 4, 2, 1] (DESC)

/**
 * map()
 * This function creates a new array populated with the results of calling a provided function on every element in the calling array.
 * You can also access the index with the current element, for example,
 * members.map((x, index) => `Index: ${index}, Name: ${x}`)
 */
console.log(members.map((x) => x)); // ['Dong', 'Young', 'Yang']
console.log(members.map((x) => `name:${x}`)); // ['name:Dong', 'name:Young', 'name:Yang']
console.log(members.map((x) => {
    if (x === 'Yang') {
        return `Last Name:${x}`;
    } else {
        return x;
    }
})); // ['Dong', 'Young', 'Last Name:Yang']

/**
 * filter()
 * This function creates a new array with all elements that pass the test implemented by the provided function.
 * You can also access the index with the current element, for example,
 * numbers.filter((x, index) => x > 5 && index % 2 === 0)
 */
console.log(numbers.filter((x) => {
    if (x > 5) {
        return x;
    }
})); // [9, 6]

/**
 * find()
 * This function returns the value of the first element in the array that satisfies the provided testing function.
 * You can also access the index with the current element, for example,
 * numbers.find((x, index) => x > 5 && index % 2 === 0)
 */
console.log(numbers.find((x) => x % 2)); // 9

/**
 * reduce()
 * This function executes a reducer function on each element of the array,
 * resulting in a single accumulated value.
 * Syntax: reduce((accumulator, currentValue) => { ... }, initialValue)
 */
console.log(numbers.reduce((sum, n) => sum + n, 0));
/**
 * numbers = [9, 6, 5, 4, 2, 1]
 * 1. Initialize sum to the initial value, 0.
 * 2. Start with the first element, n = 9.
 * 3. Add n to sum: sum = 0 + 9 = 9.
 * 4. Move to the next element, n = 6.
 * 5. Add n to sum: sum = 9 + 6 = 15.
 * 6. Continue this process for each element:
 *    - n = 5 → sum = 15 + 5 = 20
 *    - n = 4 → sum = 20 + 4 = 24
 *    - n = 2 → sum = 24 + 2 = 26
 *    - n = 1 → sum = 26 + 1 = 27
 * 7. After processing all elements, return the final sum: 27.
 */