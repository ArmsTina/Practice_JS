/**
 * Inheritance
 */

// Parent (super) class
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// Child class
// Use 'extends' for inheritance
class FemaleIdol extends IdolModel {
    dance() {
        return 'The female idol is dancing.';
    }
}

class MaleIdol extends IdolModel {
    sing() {
        return 'The male idol is singing.';
    }
}

const yuJin = new FemaleIdol('YuJin', 2003);
const wonYoung = new MaleIdol('WonYoung', 2002);

console.log(yuJin);
console.log(wonYoung);
console.log(yuJin.dance());
console.log(wonYoung.sing());

console.log(yuJin instanceof IdolModel); // true
console.log(yuJin instanceof FemaleIdol); // true
console.log(yuJin instanceof MaleIdol); // false