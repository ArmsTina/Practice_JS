let number = 5;

/**
 * 1. if + else
 * Use if(condition){} else {} to run code based on a condition.
 * When the condition is true, execute the code inside the if block.
 * Otherwise, execute the code inside the else block.
 */
if(number % 2 === 0){
    console.log(`${number} is even.`);
}else{
    console.log(`${number} is odd.`);
}

/**
 * 2. if + else if
 * Use if(condition A){} else if(condition B){} else {} to check multiple conditions.
 * If condition A is true, the if block is executed.
 * If condition A is false, but condition B is true, the else if block is executed.
 * If none of the conditions are true, the else block is executed.
 */
if(number % 2 === 0){
    console.log(`${number} is even.`);
}else if(number % 3 === 0){
    console.log(`${number} is divisible by 3.`);
}else{
    console.log(`${number}`);
}

/**
 * 3. switch
 * The switch statement evaluates a variable and executes the case block
 * that matches the value of the variable. If no case matches, the default block is executed.
 */
switch(number){
    case 1:
        console.log('Number is 1');
        break;
    case 3:
        console.log('Number is 3');
        break;
    case 5:
        console.log('Number is 5');
        break;
    case 7:
        console.log('Number is 7');
        break;
    default:
        console.log(`Number is ${number}`);
}
