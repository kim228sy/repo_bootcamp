let performance = require('perf_hooks').performance;

// Recursive Fibonacci with table lookup
let fibTable = {0: 0, 1: 1};
function fib_recursive(n) {
    if (!(n in fibTable)) {
        fibTable[n] = fib_recursive(n-1) + fib_recursive(n-2);
    }
    return fibTable[n];
}

// Iterative Fibonacci
function fib_iterative(n) {
    let a = 0, b = 1;
    for(let i = 0; i < n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return a;
}

let n = 30;  // Change this value to test with different inputs

let start = performance.now();
console.log(fib_recursive(n));
let end = performance.now();
console.log(`Recursive (with lookup) time: ${end - start} milliseconds`);

start = performance.now();
console.log(fib_iterative(n));
end = performance.now();
console.log(`Iterative time: ${end - start} milliseconds`);
