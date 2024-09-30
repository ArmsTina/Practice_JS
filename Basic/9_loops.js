/**
 * 1. for loop
 * Use the for loop to repeat code a specific number of times.
 */
for(let i = 1; i <= 10; i++){
    console.log(i); // prints 1 to 10
}

const tempArray = ['a', 'b', 'c', 'd'];
for(let i = 0; i < tempArray.length; i++){
    console.log(tempArray[i]); // prints 'a', 'b', 'c', and 'd'
}

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i, j); // prints pairs from 1 1, 1 2, ... to 10 10
    }
}

/**
 * 2. for...in loop
 * For objects, it retrieves keys.
 * For arrays, it retrieves indexes.
 */
const person = {
    name: 'Dongyoung',
    age: 24
};

for(let key in person){
    console.log(key); // prints 'name' and 'age'
}

for(let index in tempArray){
    console.log(`${index}: ${tempArray[index]}`); // prints index and values from array
}

/**
 * 3. for...of loop
 * For arrays, it retrieves values directly.
 * It does not work with objects.
 */
for(let value of tempArray){
    console.log(value); // prints values 'a', 'b', 'c', and 'd' from array
}

/**
 * 4. while loop
 * Executes the code block as long as the condition is true.
 */
let number = 0;
while(number < 10){
    console.log(number++); // prints numbers from 0 to 9, incrementing after each print
}

/**
 * 5. do...while loop
 * Executes the code block once, then checks the condition.
 * This guarantees the loop runs at least once.
 */
number = 10;
do{
    console.log(number++); // prints 10 once, then exits since the condition becomes false
}while(number < 10);

/**
 * break
 * The break statement exits a loop immediately when a condition is met.
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('for loop break');
        break; // exits the loop when i equals 5
    }
    console.log(i);
}

while(true){
    let i = 5;
    if(i === 5){
        console.log('while loop break');
        break; // exits the loop immediately
    }
}

/**
 * continue
 * The continue statement skips the remaining code in the loop for the current iteration and proceeds with the next iteration.
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('continue (skipping 5)');
        continue; // skips the iteration when i equals 5
    }
    console.log(i); // prints numbers from 0 to 9, except for 5
}
