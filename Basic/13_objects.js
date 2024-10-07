/**
 * Object
 */

/**
 * Characteristics of const Object
 * 1. If you declare an object with const, you cannot reassign the object itself.
 *    - For example: `yuJin = {};` will cause an error because reassigning a const object is not allowed.
 * 2. However, you can mutate the properties or methods within the object.
 *    - This means you can change property values or add new properties without issues.
 */

/**
 * Declare an object with key-value pairs
 * Values can be functions
 * Within functions, object properties can be accessed using this.key
 */
const yuJin = {
    name : 'Yujin',
    group: 'Ive',
    dance: function(){
        return `${this.name} is dancing...`;
    }
};

// Create an object using variables
const nameKey = 'name';
const nameValue = 'Yujin';
const groupKey = 'group';
const groupValue = 'Ive';

const yuJin2={
    [nameKey]: nameValue,
    [groupKey]: groupValue,
}; // { name: 'Yujin', group: 'Ive' }

// If the key and value are the same, you can create an object like this:
const keyAndValue = 'temp';
const temp = {
    keyAndValue,  // Shorthand syntax: equivalent to keyAndValue: keyAndValue
}; // { keyAndValue: 'temp' }



/**
 * Call Object
 */
console.log(yuJin); // { name: 'Yujin', group: 'Ive', dance: [Function: dance] }
console.log(yuJin.name); // Yujin
console.log(yuJin['name']); // Yujin
const key = 'name';
console.log(yuJin[key]); // Yujin
console.log(yuJin.dance()); // Yujin is dancing...

/**
 * Mutate Object
 * You can change values, add new key - value pair
 * delete by using key
 */
yuJin.name = 'YUJIN';
console.log(yuJin['name']); // YUJIN
yuJin.lowerName = 'yujin';
console.log(yuJin['lowerName']); // yujin
delete yuJin.lowerName;
console.log(yuJin['lowerName']); // undefined

// Return array with obeject's keys
console.log(Object.keys(yuJin)); // [ 'name', 'group', 'dance' ]

// Return array with obeject's values
console.log(Object.values(yuJin)); // [ 'YUJIN', 'Ive', [Function: dance] ]

