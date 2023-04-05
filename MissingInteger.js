// Codility 100%
// given an array A of N integers, returns the smallest positive integer 
// (greater than 0) that does not occur in A.

function solution(A) {
    const MAX = 1000000
    let posNums = new Set()
    for (let num of A) {
        if (num > 0) posNums.add(num)
    }
    for (let i = 1; i < MAX; i++) {
        if (!posNums.has(i)) return i
    }
 }   

 const A = [2, 3, 1, 5];
 console.log(solution(A))