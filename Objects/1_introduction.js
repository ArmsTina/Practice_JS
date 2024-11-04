/**
 * All about objects
 * 
 * Ways to create objects:
 * 1) Use object literal - basic way, {}
 * 2) Create an instance of a class - using classes and OOP principles
 * 3) Use a function to create an object
 */

// 1. Using an object literal
const yuJin = {
    name: 'YuJin',
    year: 2003,
};
console.log(yuJin);

// 2. Creating an instance of a class
class IdolModel {
    name;
    year;
    
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
const yuJin2 = new IdolModel('YuJin', 2003);
console.log(yuJin2);

// 3. Using a constructor function
function IdolFunction(name, year) {
    this.name = name;
    this.year = year;
}
const yuJin3 = new IdolFunction('YuJin', 2003);
console.log(yuJin3);
