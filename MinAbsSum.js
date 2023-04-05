function solution(A) {
    const N = A.length;

    if (N === 1) {
        return Math.abs(A[0]);
    } 
    let sums = new Array(N);

    sums[0] = Math.abs(A[0]);
    for (let i = 1; i < N; i++) {
        sums[i] = Math.abs(A[i] + A[i-1]); 
    }

    sums.sort();
    return sums[0];
}
//let A = [-8,4,5,-10,3];
//let A = [1,4,-3]
let A = new Array(100000);
A.fill(1);
console.log(solution(A));