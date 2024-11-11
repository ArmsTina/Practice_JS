// Sync Programming
function longWork() {
  const now = new Date();
  // Milliseconds since epoch
  const milliseconds = now.getTime();
  const afterTwoSecond = milliseconds + 2 * 1000;
  while (new Date().getTime() < afterTwoSecond) {
    // will be done after 2 seconds
  }
  console.log("완료");
}
console.log("Hello");
longWork();
console.log("World");
// Hello
// [after 2 seconds]
// 완료
// World

// Async Programming
function longWork2() {
  setTimeout(() => {
    console.log("완료");
  }, 2000);
}
console.log("Hello");
longWork2();
console.log("World");
// Hello
// World
// [after 2 seconds]
// 완료
