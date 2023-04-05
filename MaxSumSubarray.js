// Find Maximum sum of contiguous subarray of size 3
function maxSum(a) {
    let left = 0
    let right = 2

    let sum = a[0] + a[1] + a[2]
    let maxSum = sum

    while (right < a.length - 1) {
        sum -= a[left]
        left++
        right++
        sum += a[right]
        maxSum = Math.max(sum, maxSum)
    }
    return maxSum

}

const a = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0]
//console.log(maxSum(a))

// find minimum sized subarray with sum >= k
function minSubarray(a, k) {

    let minSubarray = Number.MAX_SAFE_INTEGER
    let left = 0
    let right = 0
    let currentSum = a[0]
    let winLen = 1
    while(right < a.length) {
        if (currentSum >= k) {
            minSubarray = Math.min(minSubarray, winLen)
            if (minSubarray === 1) return 1
            currentSum -= a[left]
            left++
            winLen--
        }
        else {
            right++
            currentSum += a[right]
            winLen++
        }
    }
    return minSubarray
}

//console.log(minSubarray(a, 20))

// Find longest substring length with K distinct characters
function longestSubstring(s, k) {
    const charMap = new Map()
    let longest = Number.MIN_SAFE_INTEGER
    let left = 0
    let right = 0
    let currentSize = 1
    charMap.set(s.charAt(0), 1)
    let currentChar

    while (right < s.length) {
        if (charMap.size === k) {
            longest = Math.max(longest, currentSize)
            if (longest === k) return k
            currentChar = s.charAt(left)
            charMap.set(currentChar, charMap.get(currentChar)-1)
            left++
            currentSize--
        } else {
            right++
            currentSize++
            currentChar = s.charAt(right)
            let count = charMap.get(currentChar) ?? 0 
            charMap.set(currentChar, count+1)
        }
    }
    return longest
}
console.log(longestSubstring("aabaaacaab", 3))