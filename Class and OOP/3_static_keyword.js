/**
 * Static Keyword
 */

class IdolModel {
    name;
    year;
    static groupName = '아이브'; // Static property, shared across all instances

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Static method that can access static properties
    static returnGroupName() {
        return this.groupName;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // Does not show groupName because it's a static property
console.log(IdolModel.groupName); // Static properties are accessed on the class, not instances
console.log(IdolModel.returnGroupName()); // Call static method

/**
 * Main use case for static
 * Factory methods
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Create an instance using an object
    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    // Create an instance using an array
    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1],
        );
    }
}

// If you have data, it becomes easy to create an instance based on that data

const yuJin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
});

console.log(yuJin2);

const wonYoung = IdolModel2.fromList(
    [
        '장원영',
        2003,
    ]
);

console.log(wonYoung);