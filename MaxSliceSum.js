function solution(A) { // 84% Codility
    const n = A.length;
    let result = A[0];

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += A[j];
            result = Math.max(result, sum);
        }
    }
    return result;
}

function solutionB(A) { // 100%!!
    const n = A.length;
    let maxEnding = A[0];
    let result = A[0];

    // for each position, compute largest sum that ends in that position
    for (let i = 1; i < n; i++) {
        maxEnding = Math.max(A[i], maxEnding + A[i]);
        // check if bigger than current max
        result = Math.max(result, maxEnding);
    }
    return result;
}


//let A = [3, 2, -6, 4, 0];
let A = [-10, -2, -1, -1, 1, -5];
console.log (solutionB(A));

