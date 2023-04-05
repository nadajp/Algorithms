function solution(A) { // 50% (timeout)
    let minAvg = Number.MAX_SAFE_INTEGER;
    let minPosition = 0;
    const n = A.length;

    // for each position, compute smallest avg that starts in that position
    for (let p = 0; p < n -1; p++) {
        sum = A[p];
        for (let q = p+1; q < n; q++) {
            sum += A[q];
            avg = sum/(q-p+1);
            console.log(p + ' ' +  q + ': ' + sum + ' avg: ' + avg);
            if (avg < minAvg) {
                minAvg = avg;
                minPosition = p;
            }
        }
    }
    return minPosition;
}

function solutionB(A) {  //100%
    const n = A.length;
    
    let minTwoSlicePosition = 0;
    let minThreeSlicePosition = n-2;
    let minTwoSliceAvg = (A[0] + A[1])/2;
    let minPosition = 0;
    let minThreeSliceAvg = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < n-1; i++) {
        twoSliceAvg = (A[i] + A[i+1])/2;
        if (twoSliceAvg < minTwoSliceAvg) {
            console.log(i + '. two avg: ' + twoSliceAvg);
            minTwoSliceAvg = twoSliceAvg;
            minTwoSlicePosition = i;
        }
        if (i < n-2) {
            threeSliceAvg = (A[i] + A[i+1] + A[i+2])/3;
            console.log(i + '. Three slice avg: ' + threeSliceAvg);
            console.log(i + '. Three slice min avg: ' + minThreeSliceAvg);

            if (threeSliceAvg < minThreeSliceAvg) {
                console.log(i + '. three avg: ' + threeSliceAvg);
                minThreeSliceAvg = threeSliceAvg;
                minThreeSlicePosition = i;
            }
        }
        if (minTwoSliceAvg < minThreeSliceAvg) {
            minPosition = minTwoSlicePosition;
        } else if (minTwoSliceAvg > minThreeSliceAvg) {
            minPosition = minThreeSlicePosition
        } else {
            minPosition = Math.min(minTwoSlicePosition, minThreeSlicePosition);
        }
    }
       
    return minPosition;
}

let A = [4, 2, 2, 5, 1, 5, 8];
//let A = [-3, -5, -8, -4, -10]
console.log(solutionB(A));