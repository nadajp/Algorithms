function solution(A) {
    let N = A.length;
    if (N < 2) {
        return 0;
    }
    let travellingEast = 0;
    let total = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] === 0) {
            travellingEast++;
        } else {
            total += travellingEast;
        }
        if (total > 1000000000) {
            return -1;
        }
    }
    return total;
}
const A = [0,1,0,1,1];
console.log(solution(A));



