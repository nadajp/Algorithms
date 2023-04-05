function solution(N) {
    let binary = N.toString(2)
    let longestGap = 0;
    
    let i = 0;
    while (i < binary.length) {
        if (binary.charAt(i) === '1') {
            i++;
            let count = 0;
            while (i < binary.length && binary.charAt(i) === '0') {
                count++;
                i++;
            }
            if (i < binary.length && binary.charAt(i) === '1') {
                longestGap = Math.max(longestGap, count)
            }
        } else {
            i++;
        }
    }
    return longestGap
}
console.log(solution(32))