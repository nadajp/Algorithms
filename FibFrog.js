function solution(A) { //50% (100% correctness, 0% perf)
    const N = A.length;
    
    // first create fibonacci array
    let fib = [0, 1];

    for (let i = 2; i < N+3; i++) {
        let current = fib[i-2] + fib[i-1];
        fib.push(current);
    }

    console.log(fib);

    if (fib.includes(N+1)) 
        return 1;
    
    let leaves = [-1];
    // now create array of leaves
    for (let i = 0; i < N; i++) {
        if (A[i] === 1) 
            leaves.push(i);
    }
    console.log('leaves: ' + leaves);
    
    const minJumps = jumps(N, leaves, fib, memo={});
    if (minJumps === null) return -1; 
    else return minJumps.length;
}

const jumps = (position, leaves, fib, memo) => {   
    if (position === -1) {
        return[];
    }
    if (position < -1) {
        return null;
    }
    if (position in memo) {
        return memo[position];
    }
    let shortest = null;
    for (let leaf of leaves) {
        const jumpSize = position - leaf;
        let remainingJumps = null;
        if (jumpSize > 0 && fib.includes(jumpSize)) {
            console.log('jump size: ' + jumpSize);
            console.log('leaf: ' + leaf);
            remainingJumps = jumps(leaf, leaves, fib, memo);
        }
        if (remainingJumps != null) {
            const jumps = [ ...remainingJumps, leaf];
            if (shortest === null || jumps.length < shortest.length) {
                shortest = jumps;
            }
        } 
    }
    memo[position] = shortest;
    return shortest;
}

function solutionB(A) {  //75% (correctness 100%, perf 75%)
    const N = A.length;
    
    // first create fibonacci array
    let fibs = [1, 1];

    for (let i = 2; i < N+3; i++) {
        let current = fibs[i-2] + fibs[i-1];
        fibs.push(current);
        if (current > N+1) {
            break;
        }
    }
    if (fibs.includes(N+1)) 
        return 1;
    
    const minJumps = jumpsB(A, N, fibs, memo={});
    if (minJumps === null) return -1; 
    else return minJumps.length;
 }

 const jumpsB = (A, position, fibs, memo)=> {
    if (position === -1) {
        return[];
    }
    if (A[position] === 0) {
        return null;
    }
    if (position < -1) {
        return null;
    }

    if (position in memo) {
        return memo[position];
    }
    let shortest = null;
    for (let fib of fibs) {
        const nextPosition = position - fib;
        let remainingJumps = null;
        if (nextPosition === -1 || (nextPosition >= 0 && A[nextPosition] === 1)) {
            remainingJumps = jumpsB(A, nextPosition, fibs, memo);
        }
        if (remainingJumps != null) {
            const jumps = [ ...remainingJumps, nextPosition];
            if (shortest === null || jumps.length < shortest.length) {
                shortest = jumps;
            }
        } 
    }
    memo[position] = shortest;
    return shortest;
 }

 function solutionC(A) {  
    const N = A.length;
    
    // first create fibonacci array
    let fibs = [1, 2];

    for (let i = 2; i < N+3; i++) {
        let current = fibs[i-2] + fibs[i-1];
        if (current > N+1) {
            break;
        }
        fibs.push(current);
    }

    let leaves = [];
    // now create array of leaves
    for (let i = 0; i < N; i++) {
        if (A[i] === 1) 
            leaves.push(i);
    }
    leaves.push(N);
    console.log(leaves);

    const reachable = new Array(N+1).fill(0);
    reachable[0] = 1;
    for (let i = 0; i <= N; i++) {
        if (reachable[i] > 0 ) {
            for (leaf of leaves) {
                if (leaf > i) {
                    console.log('leaf: ' + leaf);
                    const jump = leaf -i + 1
                    if (fibs.includes(jump)) {
                        reachable[i+leaf] = Math.min(reachable[i+leaf], jump)
                    }
                }
                
            }
        }
    }
    console.log(reachable);

    //Now that we have a reachable array, find shortest path.

 }





const A = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0];
const B = [0, 0, 1, 0, 0, 0, 1, 1, 1, 1]; //2
const C = [0];
const large = new Array(1000).fill(1);
console.log(solutionC(A));
// console.log(solutionB(B));
// console.log(solutionB(C));