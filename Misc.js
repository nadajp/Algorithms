// You are given a sorted array consisting of only integers where every element appears exactly twice, 
// # except for one element which appears exactly once. Find this single element that appears only once.
// #  Input: nums = [1,1,2,3,3,4,4,8,8]
// #   Output: 2

function findLoneInt(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] !== nums[i+1]) {
            return nums[i+1]
        }
    }
}

const nums = [1,1,2,3,3,4,4,8,8]

/**
 """
Consider an auction: there are BIDDERS in the audience. Each BIDDER is given a paddle with a unique number (e.g.: 57). At the front, there is an ORGANIZER. When a BIDDER raises their paddle, the ORGANIZER sees it and recognizes the number. For instance, a BIDDER might raise paddle #78, and the ORGANIZER recognizes the number 78.

Sometimes, however, a BIDDER accidentally holds the paddle upside down. For instance, a BIDDER with the number 68 holds it upside down, showing the number 89. The ORGANIZER assumes it's 89, which is a mistake. We'll call any number that--when turned upside down--is a different, valid number, a CONFUSABLE number.

Write a function that, given a room with 800 BIDDERS, identifies all the confusable numbers.
"""

 */

// 6, 9, 16, 18, 19, 61, 66, 68, 81, 86, 89, 91, 96, 98, 109, 119, 161, 189, 601, 611, 661, 669, 681, 691
const flipMap = new Map()
flipMap.set('0', '0')
flipMap.set('1', '1')
flipMap.set('6', '9')
flipMap.set('9', '6')
flipMap.set('8', '8')

function flip(num) {
    let str = num.toString()
    let flipped = new Array(str.length)
    for (let i = 0; i < str.length; i++) {
        if (flipMap.has(str[i])) {
            flipped[str.length - i - 1] = flipMap.get(str[i])
        }
        else {
            return NaN
        }
    }
    let strFlipped = new String(flipped.join(''))
    console.log('flipped string: ' + strFlipped + ' int: ' + parseInt(strFlipped))
    return parseInt(new String(flipped.join('')))
}

function isConfusable(num) {
    const flipped = flip(num)
    return Number.isInteger(flipped) && flipped !== num && flipped >= 1 && flipped <= 800
}

function solve () { 
    let result = []
    for (let i = 1; i <= 800; i++) {
        if (isConfusable(i)) {
            result.push(i)
        }
    }
    return result
}
//console.log(solve())

// let sampleWord = "baa45sdfsd";
// let pwRegex = /(?=\w{6,})(?=\d{2,})/
// let result = pwRegex.test(sampleWord)
// console.log(result)

function sum(array) {
    return _sum(array, 0)
}

function _sum(array, idx) {
    if (idx === array.length) return 0
    return array[idx] + _sum(array, idx+1)
}

//console.log(sum([5, 6, 7, 8, -5]))

var canFinish = function(numCourses, prerequisites) {
    // create adjacency list graph
    let graph = new Array(numCourses).fill(0).map(()=> [])
    for (req of prerequisites) {
        graph[req[0]].push(req[1])
    }

    let visited = new Set()
    for (let i = 0; i < numCourses; i++) {
        let currPath = new Set()
        let result = dfs(i, graph, visited, currPath)
        if (result === false) {
            return false
        } 
    }
   return true
};

function dfs(course, graph, visited, currPath) {
   if (currPath.has(course)) {
       return false
   }
   if (visited.has(course)) return true
   
   currPath.add(course)
   visited.add(course)

   for (let edge of graph[course]) {
        const result = dfs(edge, graph, visited, currPath)
        if (result === false) return false
        currPath.delete(edge)
   }
   return true
}

// console.log(canFinish(2, [[1,0],[0,1]])) // false
// console.log(canFinish(4, [[1,0],[1,3],[2,0],[3,1],[3,2]])) // false
// console.log(canFinish(4, [[2,0],[1,0],[3,1],[3,2],[1,3]])) //false
// console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]])) //true

var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest = 0;
    for (let i =0; i < nums.length; i++) {
        let currentNum = nums[i]
        if (!set.has(currentNum) - 1) {
            let sequence = 1
            let j = 1;
            while (set.has(nums[i] + j)) {
                sequence++
                j++
            }
            longest = Math.max(longest, sequence)
        }
        
    }
    return longest
};

//console.log(longestConsecutive([100,4,200,1,3,2]))

function telephoneCheck(str) {
    let regex = /^1? ?(?:\d{3}([-| ]?)|\(\d{3}\) ?)\d{3}[-| |\1]?\d{4}$/
    
    return regex.test(str);
  }
  
  //console.log(telephoneCheck("1 555-555-5555"))

  function rot13(str) {
    let min = 'A'.charCodeAt(0)
    let max = 'Z'.charCodeAt(0)

    let result = ""
    for (let i = 0; i <str.length; i++) {
      let ch = str.charAt(i)
      let code = str.charCodeAt(i)

      if (code >= min && code <= max) {
        code = (code + 13 <= max) ? code + 13 : min + code + 12 - max
        let rot13 = String.fromCharCode(code)
        result += rot13
      } else result += ch
    }
    return result;
  }
  
  //console.log(rot13("SERR PBQR PNZC"))


  class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

let root = new TreeNode(10, )
    

  var pathSum = function(root, targetSum) {
    if (root === null) return 0
    if (targetSum === root.val) return 1
    
    return pathSum(root.left, targetSum - root.val) +
        pathSum(root.right, targetSum - root.val) + 
        pathSum(root.left, targetSum) +
        pathSum(root.right, targetSum)
    
    
};

// function* gen1() {
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)
// }
// const iterator = gen1()
// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)

var findKthPositive = function(arr, k) {
    let count = 0
    let nextInt = 1
    let i = 0
    while (i < arr.length) {
        if (arr[i] !== nextInt) {
            count++
            if (count === k) return nextInt
        } 
        else i++
        nextInt++
    }
    return arr.length + k
};
console.log(findKthPositive([2,3,4,7,11],5))