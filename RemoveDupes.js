/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let k = 1
    let i = 0
    let j = 1
    while (i < nums.length-1) {
        while (j < nums.length && nums[j] == nums[i]) {
            j++
        }
        i++
        if (j < nums.length) {
            nums[i] = nums[j]
            k++
        }
    }
    console.log(nums)
    return k
};

let nums = [0,0,1,1,2,2,2, 3, 3,4,4,4]
console.log(removeDuplicates(nums))