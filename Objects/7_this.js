/**
 * this
 *
 * JavaScript uses lexical scoping, meaning a function's scope is determined
 * at the time it's defined. However, the `this` keyword is bound at the time
 * the object is created.
 */

const testFunction = function () {
  return this;
};

console.log(testFunction() === global); // true in Node.js, false in browsers

const yuJin = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};

console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;
  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const yuJin2 = new Person("안유진", 2003);
console.log(yuJin2.sayHello());
console.log(yuJin2);

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`; // "this" does not refer to "yuJin2" here
  }
  return dance2();
};
console.log(yuJin2.dance()); // undefined이 춤을 춥니다.

/**
 * What does the `this` keyword refer to?
 * 1) When calling a regular function, `this` refers to the top-level object (global or window).
 * 2) When calling a method, `this` refers to the calling object.
 * 3) When using the `new` keyword to create an object, `this` refers to the newly created object.
 */

/**
 * `apply()`, `call()`, `bind()`
 */

function returnName() {
  return this.name;
}
console.log(returnName()); // undefined, since global doesn't have a name property

const yuJin3 = {
  name: "안유진",
};
console.log(returnName.call(yuJin3)); // 안유진
console.log(returnName.apply(yuJin3)); // 안유진

// `call` passes arguments in order using commas
// `apply` requires an argument list in an array
function multiply(x, y, z) {
  return `${this.name} / Result: ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 1, 2, 3));
console.log(multiply.apply(yuJin, [1, 2, 3]));

// `bind()` doesn't execute the function immediately but returns a new bound function
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc); // [Function: bound multiply]
console.log(laterFunc()); // You can invoke it later
