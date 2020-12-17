const now = require("performance-now");

// Recursive Startegy
const grid = (m, n) =>{
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    return grid(m-1, n) + grid(m, n-1);
}

console.log(grid(1,1));
console.log(grid(2,3));
console.log(grid(4,5));
console.log(grid(9,12));

// Dp Solution using Memoization
const grid1 = (m,n, memo={}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    memo[key] = grid1(m-1, n,memo) + grid1(m, n-1, memo);
    return memo[key]
}

var start = now()
console.log(grid1(40,30));
var end = now()
console.log(`Time Elapsed ${(end-start).toFixed(3)/1000} seconds.`)

// Dp Solution using Memoization Optimal (My solution)
const grid2 = (m,n, memo={}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(key in memo) {
        var keyarr, newkey;
        keyarr = key.split(',');
        temp1 = keyarr[0];
        temp2 = keyarr[1];
        newkey = keyarr[1] +',' +keyarr[0];
        if(newkey in memo) return memo[newkey];
        memo[newkey] = memo[key]
    }
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    memo[key] = grid2(m-1, n,memo) + grid2(m, n-1, memo);
    return memo[key]
}

var start = now()
console.log(grid2(40,30));
var end = now()
console.log(`Time Elapsed ${(end-start).toFixed(3)/1000} seconds.`)

/*
    Final Output:-
    1
    3
    35
    75582
    13750991318793419000
    Time Elapsed 0.002601 seconds.
    13750991318793419000
    Time Elapsed 0.001538 seconds.

*/