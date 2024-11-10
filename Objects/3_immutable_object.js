/**
 * Immutable Object
 */

const yuJin = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);

/**
 * Extensibility
 */

console.log(Object.isExtensible(yuJin)); // true
// This means you can add properties to this object
yuJin["position"] = "vocal";

// This will prevent further extensions of the object
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // false

yuJin["groupName"] = "Ive"; // Does not throw an error
console.log(yuJin); // But the property is not added

delete yuJin["position"]; // You can still delete properties
console.log(yuJin);

/**
 * Seal
 */
const yuJin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log("================================");
console.log(yuJin2);

console.log(Object.isSealed(yuJin2)); // false
Object.seal(yuJin2); // Now the object is sealed
console.log(Object.isSealed(yuJin2)); // true

// Now you cannot add or remove properties
yuJin2["groupName"] = "Ive"; // Does not throw an error
delete yuJin2["name"]; // Does not throw an error
console.log(yuJin2); // Properties cannot be added or removed

// You can still modify values and attributes of properties
Object.defineProperty(yuJin2, "name", {
  value: "장원영",
  writable: false,
});
console.log(yuJin2);

// Sealing is equivalent to setting configurable to false
console.log(Object.getOwnPropertyDescriptor(yuJin2, "name"));

/**
 * Freeze
 *
 * When an object is frozen, you can only read properties; modifications are not allowed.
 */
const yuJin3 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },

  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
console.log("================================");
console.log(Object.isFrozen(yuJin3)); // false
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3)); // true

yuJin3["groupName"] = "Ive"; // Does not throw an error
delete yuJin3["name"]; // Does not throw an error
console.log(yuJin3); // Properties cannot be added, removed, or modified

try {
  // Modifying property attributes throws an error because the object is frozen
  Object.defineProperty(yuJin3, "name", {
    value: "장원영",
    writable: false,
  });
} catch (e) {
  console.log("The object is frozen!");
}
console.log(Object.getOwnPropertyDescriptor(yuJin3, "name"));

// If there is an object within the object, you need to freeze it separately
console.log(Object.isFrozen(yuJin3.wonYoung)); // false
Object.freeze(yuJin3.wonYoung);
console.log(Object.isFrozen(yuJin3.wonYoung)); // true
