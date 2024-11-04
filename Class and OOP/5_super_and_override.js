/**
 * Super and Override
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `Hello, I am ${this.name}.`;
    }
}

class FemaleIdol extends IdolModel {
    part;

    constructor(name, year, part) {
        // Call the parent's constructor first
        super(name, year); // Equivalent to IdolModel(name, year)
        // Then, initialize the new variable not present in the parent class
        this.part = part;
    }

    // This will override the parent's method, 'sayHello()'
    sayHello() {
        // Use 'this' to refer to all variables
        // Use 'super' to call the parent's method
        return `${super.sayHello()} I am in charge of ${this.part}.`;
    }
}

const yuJin = new FemaleIdol('YuJin', 2003, 'vocal');
console.log(yuJin);
console.log(yuJin.sayHello()); // If two methods have the same name, the one in the child class is used (overrides the parent)
