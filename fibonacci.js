var now = require("performance-now")

// Basic Implementation (Recursive)
const fib = (n) => {
    if(n<=2) return 1;
    return fib(n-1) + fib(n-2);
}

var start = now()
console.log(fib(40));
var end = now()
console.log(`Time Elapsed ${(end-start).toFixed(3)/1000} seconds.`)

// Simple For Loop Implementation (More Effective)
const fib2 = (n) => {
    let temp1 = 1; temp2 = 1;
    let result;
    for(var i=2; i<n; i++){
        result = temp1 + temp2;
        temp1 = temp2;
        temp2 = result;
    }
    return result;
}

console.log("FIB2")
var start1 = now()
console.log(fib2(40));
var end1 = now()
console.log(`Time Elapsed ${(end1-start1).toFixed(3)/1000} seconds.`)

// Dynamic Programming Approach Memoization

const fib3 = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib3(n-1, memo) + fib3(n-2, memo)
    return memo[n]
}

console.log("FIB3")
var start2 = now()
console.log(fib3(40));
var end2 = now()
console.log(`Time Elapsed ${(end2-start2).toFixed(3)/1000} seconds.`)

/*
    Final Output:-

    102334155
    Time Elapsed 0.8790359999999999 seconds.
    FIB2
    102334155
    Time Elapsed 0.000201 seconds.
    FIB3
    102334155
    Time Elapsed 0.00023899999999999998 seconds.
    
*/