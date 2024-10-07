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
console.log('==============');
let comp1 = [1, 2, 3];
let comp2 = [1, 2, 3];
console.log(comp1 === comp2); // false

// Using the spread operator to create a shallow copy (by value) of an array
console.log('==============');
let comp3 = [...comp2];
console.log(comp3); // [1, 2, 3]
console.log(comp2 === comp3); // false

const obj1 = {
    name: 'test',
    age: 12,
}
const obj2 = {
    ...obj1
}
console.log(obj2); // { name: 'test', age: 12 }
console.log(obj1 === obj2); // false

// Adding something before or after the spread operator
console.log('==============');
let comp4 = [10, ...comp2];
console.log(comp4); // [10, 1, 2, 3]
let comp5 = [...comp2, 10];
console.log(comp5); // [1, 2, 3, 10]

const obj3 = {
    test: 'test',
    ...obj1
}
const obj4 = {
    ...obj1,
    test: 'test'
}
console.log(obj3); // { test: 'test', name: 'test', age: 12 }
console.log(obj4); // { name: 'test', age: 12, test: 'test' }
