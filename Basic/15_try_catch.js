/**
 * try...catch, finally(optional)
 * 1. When an error occurs, 'throw' the error
 * 2. Then, 'catch' the error
 * 3. Regardless of whether an error occurs, 'finally' will always execute
 */

function runner(){
    try {
        console.log('Hello');
        throw new Error('Test Error Description'); // Error: Test Error Description
        console.log("It's me"); // This line will not execute due to the error above
    } catch (e) { // The variable name can vary, but 'e' is commonly used
        console.log("Caught Here"); // Caught Here
        console.log(e); // Display the error message
    } finally {
        console.log('Done.'); // Done.
    }
}

runner();