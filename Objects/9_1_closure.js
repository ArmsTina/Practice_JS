/**
 * Closure
 *
 * A closure occurs when an inner function has access to the variables of an outer function,
 * even after the outer function has finished executing. The inner function "closes over" its
 * environment, keeping references to variables that it needs.
 */

function getNumber() {
  var number = 5;
  function innerGetNumber() {
    return number;
  }
  return innerGetNumber; // Return the function itself, not the result
}

const runner = getNumber();
console.log(runner()); // innerGetNumber lives longer than getNumber due to closure

/**
 * Where to use closures?
 *
 * 1) Data Caching
 */
function cacheFunction() {
  var number = 10 * 10; // Assume this calculation takes a long time
  function innerCacheFunction(newNum) {
    return number * newNum;
  }
  return innerCacheFunction;
}
// Assume you need to use this function multiple times. By caching the `number` value,
// closures help avoid recalculating it each time, improving efficiency.
const runner2 = cacheFunction(); // The heavy calculation is done only once here
// Now `number` is available to innerCacheFunction
console.log(runner2(20)); // Uses cached value
console.log(runner2(30)); // Uses cached value
console.log(runner2(40)); // Uses cached value

/**
 * 2) Persistent State
 */
function cacheFunction2() {
  var number = 99;
  function increment() {
    number++;
    return number;
  }
  return increment;
}
const runner3 = cacheFunction2();
// `increment` function retains access to `number` even after cacheFunction2 finishes
console.log(runner3()); // 100
console.log(runner3()); // 101

/**
 * 3) Information Hiding
 * Closures can be used to create private variables and methods, which aren't directly accessible
 * from outside the function.
 */
function Idol(name, year) {
  this.name = name;
  var _year = year; // Private variable

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const yuJin = new Idol("안유진", 2003);
console.log(yuJin.sayNameAndYear()); // Access to `name` and `_year` via a method
console.log(yuJin.name); // Publicly accessible property
console.log(yuJin._year); // Undefined, as `_year` is not directly accessible outside the closure
