/**
 * Property Attributes
 *
 * 1) Data Property - A property that holds a real value, consisting of a key and a value.
 * 2) Accessor Property - A property that does not hold a value itself but is defined with functions that are called when the value is accessed or set (e.g., Getters and Setters).
 */

const yuJin = {
  name: "안유진",
  year: 2003,
};

// Output the attributes of the properties
console.log(Object.getOwnPropertyDescriptor(yuJin, "name"));
console.log(Object.getOwnPropertyDescriptor(yuJin, "year"));
console.log(Object.getOwnPropertyDescriptors(yuJin));

/**
 * Attribute List
 * 1) value - The actual value of the property.
 * 2) writable - Indicates if the value can be modified.
 * 3) enumerable - Indicates if the property can be enumerated (e.g., using a for...in loop).
 * 4) configurable - Indicates if the property can be redefined. If set to false, deletion and modification of the attributes are prohibited. However, if writable is true, the value can be changed, and writable can be set to false.
 */

const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    // new Date().getFullYear() gets the current year from the local system
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin2);
console.log(yuJin2.age);
yuJin2.age = 32;
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptors(yuJin2));

// Add a new property with specific attribute settings
// By default, properties added directly (e.g., yuJin2.height = 172) have writable, enumerable, and configurable set to true
Object.defineProperty(yuJin2, "height", {
  value: 172,
  // If you don't specify the following attributes, they default to false
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

// Modify existing property attributes
// 1. writable
// Specifies if the value can be modified
Object.defineProperty(yuJin2, "height", {
  writable: false,
});
yuJin2.height = 180;
console.log(yuJin2); // height remains 172 because writable is false

// 2. enumerable
// Specifies if the property appears in for ... in loops
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

Object.defineProperty(yuJin2, "height", {
  enumerable: false,
});

// height will no longer appear in loops
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}
console.log(yuJin2.height); // The property still exists

// 3. configurable
// Specifies if the property attributes can be changed or the property deleted
Object.defineProperty(yuJin2, "height", {
  writable: true,
  configurable: false,
});
yuJin2.height = 180;
console.log(yuJin2.height); // 180

Object.defineProperty(yuJin2, "height", {
  // Even if configurable is false, writable can be set from true to false
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, "height"));

try {
  Object.defineProperty(yuJin2, "height", {
    // However, you cannot set writable back to true when configurable is false
    writable: true,
  });
} catch (e) {
  console.log("Error: cannot modify property, configurable is false.");
}
