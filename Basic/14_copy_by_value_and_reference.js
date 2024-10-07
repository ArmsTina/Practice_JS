// Copy by value
// Copying value to a new variable
let original = 'hello';
let clone = original;
console.log(original); // hello
console.log(clone); // hello

// Modifying clone does not affect the original
clone += 'there';
console.log('==============');
console.log(original); // hello
console.log(clone); // hellothere
console.log(original === clone); // false

// Copy by reference
// Copying the reference (address) of the original object
console.log('==============');
let test = [1, 2, 3];
let cloneArr = test;
console.log(test); // [1, 2, 3]
console.log(cloneArr); // [1, 2, 3]

// Modifying cloneArr also affects the original
console.log('==============');
cloneArr.push(4);
console.log(test); // [1, 2, 3, 4]
console.log(cloneArr); // [1, 2, 3, 4]
console.log(test === cloneArr); // true

// Even if two objects (or arrays) have the same values, they are not equal
// because they reference different locations in memory.
let comp1 = [1, 2, 3];
let comp2 = [1, 2, 3];
console.log(comp1 === comp2); // false