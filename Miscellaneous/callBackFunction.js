// It proves that callbackfunction is not async in nature

// console.log("Task Starts");

// function asyncTask(cb) {
//   console.log("Task is Running");
//   cb();
// }

// asyncTask(() => {
//   console.log("My Name is Vinayak ");
//   console.log("My Name is ",name); // will not work since its working in sync mode
// });
// console.log("Task Ends");

// let name = "Vinayak Vispute";
// ======================================
// ASync callback function

// console.log("Task Starts");

// function asyncTask(cb) {
//   setTimeout(cb, 0);
// }

// asyncTask(() => {
//   console.log("My Name is Vinayak ");
//   console.log("My Name is ", name); // will still work
// });
// console.log("Task Ends");

// let name = "Vinayak Vispute";
// ======================================

// Error Handling in Callback function

console.log("Task Starts");

function asyncTask(cb) {
  setTimeout(() => {
    cb("Error Incoming");
    // cb(null, "Viayak");
  }, 0);
}
asyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
console.log("Task Ends");
