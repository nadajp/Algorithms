var searchRange = function(nums, target) {
    if (nums.length === 1 && nums[0] === target)
        return [0, 0]

    let left = 0
    let right = nums.length-1
    let result = [-1, -1]

    while (left <= right) {
        let mid = left + Math.floor((right-left)/2)
        if (nums[mid] === target) {
            let i = mid
            while (nums[i] === target && i > 0) 
                i--
            if (nums[i] !== target) i++
            result[0] = i
            i = mid
            while (nums[i] === target && i < nums.length-1)
                i++
            if (nums[i] !== target) i--
            result[1] = i
            return result
        } else if (nums[mid] > target) 
            right = mid-1
         else if (nums[mid] < target) 
            left = mid+1
    }
    return result
};

let a = [5,7,7,8,8,10]
console.log(searchRange([1,4], 4))