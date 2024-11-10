/**
 * Prototype
 */

const testObj = {};
// Every JavaScript object has a __proto__ property
// This acts as the object's internal prototype link to inherit properties.
console.log(testObj.__proto__); // [Object: null prototype] {}

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolModel.prototype); // {}
// `IdolModel.prototype` is an empty object by default.

console.log(IdolModel.prototype.constructor === IdolModel); // true
// The constructor property of `IdolModel.prototype` points back to `IdolModel`.

console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true
// This confirms a circular reference: `IdolModel.prototype.constructor` points to `IdolModel`.

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype); // true
// yuJin's prototype (`__proto__`) points to `IdolModel.prototype`.

console.log(testObj.__proto__ === Object.prototype); // true
// `testObj` is a plain object, so its prototype is `Object.prototype`.

// Object.prototype is the top-level prototype in JavaScript.
console.log(IdolModel.__proto__ === Function.prototype); // true
// `IdolModel` is a function, so its prototype (`__proto__`) is `Function.prototype`.

console.log(Function.prototype.__proto__ === Object.prototype); // true
// `Function.prototype` itself is an object, so it inherits from `Object.prototype`.

console.log(IdolModel.prototype.__proto__ === Object.prototype); // true
// `IdolModel.prototype` is an object, so its prototype is `Object.prototype`.

// `toString` is in `Object.prototype`, so instances like `yuJin` can use it.
console.log(yuJin.toString()); // [object Object]

function IdolModel2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}

const yuJin2 = new IdolModel2("안유진", 2003);
const wonYoung2 = new IdolModel2("장원영", 2002);
console.log(yuJin2.sayHello()); // 안유진이 인사를 합니다.
console.log(wonYoung2.sayHello()); // 장원영이 인사를 합니다.
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false
// Each instance has its own `sayHello` method, so they are not shared.

console.log(yuJin2.hasOwnProperty("sayHello")); // true
// `sayHello` is a unique property on each `IdolModel2` instance.

function IdolModel3(name, year) {
  this.name = name;
  this.year = year;
}
IdolModel3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};
// Now, `sayHello` is defined in the prototype, so it’s shared among instances.

const yuJin3 = new IdolModel3("안유진", 2003);
const wonYoung3 = new IdolModel3("장원영", 2002);
console.log(yuJin3.sayHello()); // 안유진이 인사를 합니다.
console.log(wonYoung3.sayHello()); // 장원영이 인사를 합니다.
console.log(yuJin3.sayHello === wonYoung3.sayHello); // true
// Both instances share the same `sayHello` function, saving memory.

console.log(yuJin3.hasOwnProperty("sayHello")); // false
// `sayHello` is on the prototype, not directly on the instance.

// Define a static method on `IdolModel3`
IdolModel3.sayStaticHello = function () {
  return `나는 Static method 입니다.`;
};
console.log(IdolModel3.sayStaticHello()); // 나는 Static method 입니다.

/**
 * Overriding
 */
function IdolModel4(name, year) {
  this.name = name;
  this.year = year;

  // This instance method overrides the prototype method.
  this.sayHello = function () {
    return "나는 instance method 입니다.";
  };
}

IdolModel4.prototype.sayHello = function () {
  return "나는 prototype method 입니다.";
};

const yuJin4 = new IdolModel4("안유진", 2003);
console.log(yuJin4.sayHello()); // 나는 instance method 입니다.

/**
 * getPrototypeOf, setPrototypeOf
 *
 * Change an instance's prototype (`__proto__`) vs. change a constructor's prototype property
 */

function IdolModel(name, year) {
  this.name = name;
  this.year = year;
}

IdolModel.prototype.sayHello = function () {
  return "인사를 합니다.";
};

function FemaleIdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}가 춤을 춥니다.`;
  };
}

const gaEul = new IdolModel("가을", 2004);
const ray = new FemaleIdolModel("레이", 2004);

console.log(gaEul.__proto__); // { sayHello: [Function (anonymous)] }
console.log(gaEul.__proto__ === IdolModel.prototype); // true
// `Object.getPrototypeOf` gets the prototype of an instance.
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello()); // 인사를 합니다.
console.log(ray.dance()); // 레이가 춤을 춥니다.

Object.setPrototypeOf(ray, IdolModel.prototype);
// Change ray's prototype to `IdolModel.prototype`.
console.log(ray.sayHello()); // 인사를 합니다.
console.log(ray.dance()); // 레이가 춤을 춥니다.

console.log(ray.constructor === FemaleIdolModel); // false
// Changing the prototype also affects the `constructor` reference.
console.log(ray.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false
// `ray` now inherits directly from `IdolModel.prototype`.

console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

FemaleIdolModel.prototype = IdolModel.prototype;
// Now, `FemaleIdolModel` and `IdolModel` share the same prototype.

const eSeo = new FemaleIdolModel("이서", 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
console.log(eSeo.dance(), eSeo.sayHello()); // 이서가 춤을 춥니다. 인사를 합니다.
