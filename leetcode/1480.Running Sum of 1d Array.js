// https://leetcode.com/problems/running-sum-of-1d-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

nums = [1, 2, 3, 4];
var runningSum = function (nums) {
    sum = 0;
    res = []
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        res[i] = sum;
    }

    console.log(res);
};

runningSum(nums);
