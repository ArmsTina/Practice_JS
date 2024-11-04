/**
 * Class Keyword
 */

/**
 * 클래스는 객체 지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위해
 * 변수와 메소드를 정의하는 일종의 틀이다.
 * Type of class is a function
 * Instance of class is an object
 */

class IdolModel{
    name = 'Default';
    year = 2024;

    // If you use constructor, initial values are not necessary, but recommended
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // You can define a method
    sayName = () => {
        console.log(`Hi! My name is ${this.name}`);
    }
}

const yuJin = new IdolModel();
console.log(yuJin); // IdolModel { name: 'Default', year: 2024 }
console.log(yuJin.name); // Default
console.log(yuJin.year); // 2024

yuJin.name = 'Dongyoung'
yuJin.year = 1999
console.log(yuJin); // IdolModel { name: 'Dongyoung', year: 1999 }

// Using Constructor
const young = new IdolModel('young', 1999);
console.log(young); // IdolModel { name: 'young', year: 1999 }
young.sayName(); // Hi! My name is young