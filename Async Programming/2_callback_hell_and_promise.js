/**
 * Callback Example
 */

function waitAndRun() {
  setTimeout(() => {
    console.log("Done");
  }, 2000);
}

// waitAndRun();

// This approach works but is not ideal due to nested callbacks (callback hell)
function waitAndRun2() {
  setTimeout(() => {
    console.log("Step 1 Done");
    setTimeout(() => {
      console.log("Step 2 Done");
      setTimeout(() => {
        console.log("Step 3 Done");
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * Using Promises instead of nested callbacks
 */

// Using resolve and then
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed"); // Returns value to `res` in `.then`
  }, 1000);
});

// Both `console.log`s will appear after `timeoutPromise` is resolved
// timeoutPromise.then((res) => {
//   console.log("--------then--------");
//   console.log(res); // `res` receives the argument from `resolve`
// });

// Using parameters with Promises
const getPromise = (seconds) =>
  // Pass `seconds` to control the timeout duration
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Completed");
    }, seconds * 1000);
  });

// getPromise(2)
//   .then((res) => {
//     // `seconds` = 2
//     // `res` = 'Completed'
//     console.log("------2 seconds------");
//     console.log(res);
//     return getPromise(3); // Pass parameter to the next `.then`
//   })
//   .then((res) => {
//     // `seconds` = 3
//     // `res` = 'Completed'
//     console.log("-----Next 3 seconds--------");
//     console.log(res);
//   });

// Handling errors with reject and catch
const getPromise2 = (seconds) =>
  // Pass `seconds` to determine success or failure
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (seconds < 5) {
        resolve("Success");
      } else {
        reject("Error");
      }
    }, seconds * 1000);
  });

// getPromise2(3)
//   .then((res) => {
//     console.log(res);
//   })
//   // If `reject` is called
//   .catch((res) => {
//     // Receives the value from `reject`
//     console.log(res);
//   })
//   .finally(() => {
//     // Executes regardless of success or error
//     console.log("Finally");
//   });

// Running multiple Promises concurrently
Promise.all([getPromise2(1), getPromise2(2), getPromise2(3)])
  .then((res) => {
    console.log(res); // ['Success', 'Success', 'Success'] after 3 seconds
  })
  .catch((res) => {
    console.log(res); // If any promise fails, logs the error
  });
