
function solution(A) {  // 100% Codility
    const n = A.length;
    let delta = new Array(n);

    delta[0] = 0;
    for (let i = 1; i < n; i++) {
        delta[i] = A[i] - A[i-1];
    }
    let maxProfit = 0;
    let currentProfit = 0;
    for (let i = 1; i < n; i++) {
        currentProfit = Math.max(0, currentProfit + delta[i]);
        maxProfit = Math.max(maxProfit, currentProfit);
    }
    return maxProfit;
}
let A = [1, 2, 1, 5];
// A[0] = 23171
// A[1] = 21011
// A[2] = 21123
// A[3] = 21366
// A[4] = 21013
// A[5] = 21367
//console.log(solution(A));


var maxProfit = function(prices) {
    let deltas = new Array(prices.length)
    deltas[0] = 0
    for (let i = 1; i < prices.length; i++) {
        deltas[i] = prices[i] - prices[i-1]
    }
    let currentProfit = 0
    let maxProfit = 0
    for (let i = 0; i < deltas.length; i++) {
        currentProfit = Math.max(currentProfit + deltas[i], 0)
        maxProfit = Math.max(maxProfit, currentProfit)
    }    
    return maxProfit
};

console.log(maxProfit([2,1,2,0,1]))
console.log(maxProfit([7,1,5,3,6,4]))

