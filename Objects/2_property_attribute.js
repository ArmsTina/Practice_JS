/**
 * Property Attribute
 * 
 * 1) Data Property - A property that holds a real value, consisting of a key and a value.
 * 2) Accessor Property - A property that does not hold a value itself but is composed of functions called when a value is retrieved or set (e.g., Getters and Setters).
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}

// Output the attributes of the property
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

/**
 * Attribute Lists
 * 1) value - The actual value of the property.
 * 2) writable - Indicates if the value can be modified.
 * 3) enumerable - Indicates if the property can be enumerated (e.g., using a for...in loop).
 * 4) configurable - Indicates if the property can be redefined. If set to false, deletion and modification of the attributes are prohibited. However, if writable is true, the value can be changed, and writable can be set to false.
 */

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age() {
        // new Date().getFullYear() = Get the current year from the local server
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        return this.year = new Date().getFullYear() - age;
    },
}
console.log(yuJin2);
console.log(yuJin2.age);
yuJin2.age = 32;
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptors(yuJin2));

// Add a new key and value with attribute settings
// If you add a key, e.g., yuJin2.height = 172, the default settings for writable, enumerable, and configurable are true
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    // If you don't specify the following attributes, they will default to false
    writable: true,
    enumerable: true,
    configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Modify the existing value of a property
// 1. writable
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
yuJin2.height = 180;
console.log(yuJin2); // height remains 172

// 2. enumerable
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
}

Object.defineProperty(yuJin2, 'height', {
    enumerable: false,
});

// height will no longer show up in loops
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
    console.log(key);
}
console.log(yuJin2.height); // The property still exists

// 3. configurable
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
yuJin2.height = 180;
console.log(yuJin2.height); // 180
Object.defineProperty(yuJin2, 'height', {
    // Even if configurable is false, you can change writable from true to false
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

try {
    Object.defineProperty(yuJin2, 'height', {
        // However, you cannot change it back to writable: true
        writable: true,
    });
} catch (e) {
    console.log('Error, configurable is false.');
}