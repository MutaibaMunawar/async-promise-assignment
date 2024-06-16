//  Q 1 //
function fetchGreeting() {
    setTimeout(() => {
        console.log("Hello everyone");
    }, 2000);
}
fetchGreeting();
// Q 2 //
function simulateTask() {
    console.log("task started");
    setTimeout(() => {
        console.log("task completed");
    }, 1000);
}
simulateTask();
// Q 3 //
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetch successfully");
        }, 1000);
    });
}
fetchData().then((result) => {
    console.log(result);
});
// Q 4 //
function fetchWitherror() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetch successfully");
        }, 1000);
        reject("data fetch failed");
    });
}
fetchWitherror().then((result) => console.log(result))
    .catch((error) => console.log(error));
// Q 5 //
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
export {};
