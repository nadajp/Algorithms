function solution(A, K) {
    const N = A.length;
    if (K === 0 || N <= 1) {
        return A;
    }
    if (K > N) {
        K = K % N;
    }

    let rotated = new Array(N);
    let j = 0;
    for (let i = N-K; i < N; i++) {
        rotated[j++] = A[i];
    }
    for (let i = 0; i < N-K; i++) {
        rotated[j++] = A[i];
    }
    return rotated;
}

const A = [1,2,3,4,5];
const K = 10;
let result = solution(A, K);
console.log(solution(A, K));