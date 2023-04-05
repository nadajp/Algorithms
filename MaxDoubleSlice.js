function solution(A) {
    const N = A.length;

    let leftSums = new Array(N).fill(0); 
    // fill with max sums up until that position from left
    for (let i = 1; i < N-2; i++) {
        leftSums[i] = leftSums[i-1] + Math.max(0, A[i]);
    }

    let rightSums = new Array(N).fill(0);
    for (let i = N-2; i > 1; i--) {
        rightSums[i] = rightSums[i+1] + Math.max(0, A[i]);
    }

    let max = leftSums[0] + rightSums[2];

    for (var i = 2; i < A.length-1; i++) {
        max = Math.max(max, leftSums[i-1] + rightSums[i+1]);
    }
    return max;
}

const A = [3, 2, 6, -1, 4, 5, -1, 2];
console.log(solution(A));