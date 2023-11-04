/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [2, 5, 1, 9, 2];
find = 9;

var twoSum = function (nums, target) {
    let hm = new Map();
    for (let i = 0; i < nums.length; i++) {
        let f = target - nums[i];
        if (hm.has(f)) {
            return [hm.get(f), i];
        } else {
            hm.set(nums[i], i);
        }
    }
    return [0, 0];
};

console.log(twoSum(nums, find));
