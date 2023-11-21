// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums = nums.sort((a, b) => a - b); // O(log n)
    for (let i = 0; i <= nums.length; i++) { // N+1
        if (nums[i] != i) { // n
            return i; // 1
        }
    }
    // TC: N log N
    return 0;
};

