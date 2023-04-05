var singleNonDuplicate = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let left = 0
    let right = nums.length-1

    while (left < nums.length && left <= right) {
        let mid = left + Math.floor((right - left)/2) 

        // if mid is odd, matching num should be to the left of it
        // if mid is even, matching num should be to the right of it. if it is, our num is in the right half
        if (mid % 2 === 0 && nums[mid] === nums[mid-1] ||
            mid %2 !== 0 && nums[mid] === nums[mid+1]) { // search on the left
                right = mid - 1
        } else if (mid % 2 === 0 && nums[mid] === nums[mid+1] || 
            mid %2 !== 0 && nums[mid] === nums[mid-1]) { //search on the right
                left = mid + 1
        } else {
            return nums[mid]
        } 
    }
};

console.log(singleNonDuplicate([6,6,7]))