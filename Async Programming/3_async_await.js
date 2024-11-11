/**
 * Async / Await
 * The most common method for handling asynchronous code in JavaScript.
 */

// Create a Promise function
const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seconds >= 3) {
        reject("Error");
      }
      resolve("Completed");
    }, seconds * 1000);
  });

// Create an async function and use await with the Promise inside
async function runner() {
  try {
    // Each line waits for the previous await to complete
    // These await calls do not block other parts of the program,
    // but they pause execution within this async function until each Promise resolves or rejects
    const result1 = await getPromise(1);
    console.log(result1); // "Completed"

    const result2 = await getPromise(2);
    console.log(result2); // "Completed"

    const result3 = await getPromise(3); // Throws an error (rejects)
    console.log(result3);
  } catch (e) {
    console.log(e); // "Error" (from rejected Promise in result3)
  } finally {
    console.log("finally"); // Runs regardless of success or error
  }
}

runner();
