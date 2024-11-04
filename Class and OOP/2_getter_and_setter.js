/**
 * Getter and Setter
 */

class IdolModel {
    name;
    year;
    
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) When returning new data that has been processed
     * 2) When returning a private value
     */
    get nameAndYear() {
        return `${this.name}-${this.year}`;
    }

    // Usually, the setter has the same name as the variable being modified
    // Commonly not used often
    set setName(name) { // Added 'set' here for clarity
        this.name = name;
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.nameAndYear); // Call without ()
yujin.name = '장원영';
console.log(yujin);
yujin.setName = '안유진';
console.log(yujin);

console.log("=======================================");

// Getters and Setters are commonly used with private variables

class IdolModel2 {
    // #variableName = private variable declaration
    #name;
    #year;

    constructor(name, year) {
        // Variables inside the constructor also need the # symbol
        this.#name = name;
        this.#year = year;
    }

    // Return private values to the outside
    get nameAndYear() {
        return `${this.#name}-${this.#year}`;
    }

    // Modify private values
    set name(name) {
        this.#name = name;
    }
}

const yujin2 = new IdolModel2('안유진', 2003);
console.log(yujin2); // Cannot read private values directly
console.log(yujin2.nameAndYear); // Outputs returned private values
yujin2.name = '장원영'; // Modify private values using the setter
console.log(yujin2.nameAndYear);
