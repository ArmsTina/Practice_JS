/**
 * Using a function to create objects
 */

function IdolModel(name, year) {
  // To prevent errors if 'new' is not used
  if (!new.target) {
    // If 'new' was not used, recall the function with 'new'
    return new IdolModel(name, year);
  }
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name} is dancing.`;
  };
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.dance());

// This is not recommended, but what if 'new' is not used?
const yuJin2 = IdolModel("안유진", 2003);
console.log(yuJin2); // This will still create a new object due to the safeguard in the function

// Arrow function version
const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

// 'new' does not work with arrow functions
try {
  const yuJin3 = new IdolModelArrow("안유진", 2003); // This will throw an error
} catch (error) {
  console.log("Error: 'new' cannot be used with arrow functions.");
}
