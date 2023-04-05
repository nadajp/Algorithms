/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

var findMin = function(nums) {
    if (nums.length === 1) {
       return nums[0]
   }
   let start = 0
   let end = nums.length - 1
  
  if (nums[end] > nums[start]) return nums[start]

   while (end >= start) {
        let mid = Math.floor(start + (end - start) / 2)
        if (mid === start) return Math.min(nums[start], nums[end]) 

       if (nums[mid] > nums[mid + 1]) {
           return nums[mid + 1];
       }
       if (nums[mid - 1] > nums[mid]) {
           return nums[mid];
       }

       if (nums[start] > nums[mid]) {
           end = mid-1
       }
       else {
           start = mid + 1
       }
   }
 

};
console.log(findMin([2,3,4,5,1]))

