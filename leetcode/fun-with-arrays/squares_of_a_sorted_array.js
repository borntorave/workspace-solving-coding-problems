// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

/**
* @param {number[]} nums
* @return {number[]}
*/

var sortedSquares = function(nums) {
    new_arr = []
    
    for(let i = 0; i < nums.length; i++) {
        new_arr[i] = nums[i] * nums[i]
    }
    
    return new_arr.sort((a,b) => a-b);
    
};

nums = [-7,-3,2,3,11]
// [4,9,9,49,121]

a = sortedSquares(nums)
console.log(a)