// function MinWindowSubstring(strArr) { 
//     let N = strArr[0]
//     let K = strArr[1]

//     let minLeft = 0
//     let minRight = N.length-1
//     let minLength = N.length

//     // create a map of character counts for K
//     let Kchars = new Map()
//     for (let i = 0; i < K.length; i++) {
//         insertCharIntoMap(Kchars, K.charAt(i))
//     }

//     let left = 0
//     let right = K.length-1

//     // create map of character counts for N
//     let Nchars = new Map()
//     for (let i = left; i <= right; i++) {
//         insertCharIntoMap(Nchars, N.charAt(i))
//     }
    
//     while (right < N.length && left < N.length) {
//         const winLength = right - left + 1
       
//         if (isValidWindow(Nchars, Kchars)) {
//             if (winLength < minLength) {
//                 minLength = winLength
//                 minLeft = left
//                 minRight = right
//             }

//             if (winLength === K.length) {
//                 return N.substring(left, right+1)
//             } else {
//                 removeCharFromMap(Nchars, N.charAt(left))
//                 left++
//             }
//         } else {
//             right++
//             if (right < N.length) {
//                 insertCharIntoMap(Nchars, N.charAt(right))
//             }
//         }

//     }   
//     return N.substring(minLeft, minRight+1)
  
//   }

//   function insertCharIntoMap(charMap, ch) {
//     if (charMap.has(ch)) {
//         let val = charMap.get(ch) + 1
//         charMap.set(ch, val)
//     } else {
//         charMap.set(ch, 1)
//     }
//   }

//   function removeCharFromMap(charMap, ch) {
//     let val = charMap.get(ch)
//     if (val === 1) {
//         charMap.delete(ch)
//     } else {
//         charMap.set(ch, val-1)
//     }
//   }

//   function isValidWindow(Nchars, Kchars) {
//     if (Nchars.size >= Kchars.size && areCountsValid(Nchars, Kchars)) {
//         return true
//     }
//     return false
//   }

//   function areCountsValid(Nchars, Kchars) {
//     for (const [key, value] of Kchars) {
//         if (!Nchars.has(key) || Nchars.get(key) < Kchars.get(key)) {
//             return false
//         }
//       }
//       return true
//   }
     
//   // keep this function call here 
//   strArr = ["ahffaksfajeeubsne", "jefaa"]
//   strArr1 = ["bacffa", "aff"]
//   console.log(MinWindowSubstring(strArr));

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let tMap = new Map()
    let sMap = new Map()
    let min = Number.MAX_SAFE_INTEGER
    let minLeft = 0
    let minRight = t.length - 1

    if (t.length > s.length) return ""

    for (let i = 0; i < t.length; i++) {
       insertCharIntoMap(t.charAt(i), tMap)
    }

    let left = minLeft
    let right = minRight
    for (let i = 0; i <= right; i++) {
        insertCharIntoMap(s.charAt(i), sMap)
    }
    while (left < right && right < s.length) {
        const winLength = right - left + 1
        if (winLength >= t.length && isValidWindow(tMap, sMap)) {
            if (winLength < min) {
                min = winLength
                minLeft = left
                minRight = right
            }
            let ch = s.charAt(left)
            sMap.set(ch, sMap.get(ch)-1)
            left++
        } else {
            right++
            insertCharIntoMap(s.charAt(right), sMap)
        }
    }
    if (min < Number.MIN_SAFE_INTEGER) 
        return s.substring(minLeft, minRight+1)
    else return ""
};

function insertCharIntoMap(char, map) {
    let count = map.get(char) ?? 0
    map.set(char, count+1)
}

function isValidWindow(tMap, sMap) {
    if (tMap.size > sMap.size) return false
    let result = true
    for (const char of tMap.keys()) {
        if (!sMap.has(char) || sMap.get(char) < tMap.get(char)) {
            result = false
            break;  
        }
    }
    return result
}

console.log(minWindow("A", "B"))