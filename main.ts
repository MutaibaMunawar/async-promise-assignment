import { rejects } from "assert";
import { resolve } from "path";

//  Q 1 //
//Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout
function fetchGreeting() {
  setTimeout(() => {
    console.log("Hello everyone");
  }, 2000);
}
fetchGreeting();

// Q 2 //
//Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask() {
  console.log("task started");
  setTimeout(() => {
    console.log("task completed");
  }, 1000);
}
simulateTask();

// Q 3 //
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second

function fetchData() {
  return new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      resolve("data fetch successfully");
    }, 1000);
  });
}
fetchData().then((result) => {
  console.log(result);
});

// Q 4 //
//Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchWitherror() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data fetch successfully");
    }, 1000);
    reject("data fetch failed");
  });
}
fetchWitherror()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Q 5 //
//Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called

function fetchData1() {
  return new Promise((resolve, reject) => {
    resolve("Assignment completed");
  });
}

function processData() {
  return new Promise((resolve, reject) => {
    reject("Assignment not completed");
  });
}

function executeSequentially() {
  fetchData1().then((result) => console.log(result));
  processData().catch((error) => console.log(error));
}

executeSequentially();
