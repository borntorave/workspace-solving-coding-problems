// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let good_pairs = 0;
    // declare hashMap
    let hm = new Map();
    // include element and their position in hM
    for (let i = 0; i < nums.length; i++) {
        if (hm.has(nums[i])) {
            good_pairs += hm.get(nums[i]);
            hm.set(nums[i], hm.get(nums[i]) + 1);
        } else {
            hm.set(nums[i], 1);
        }
    }

    return good_pairs;

};

nums = [1, 2, 3, 1, 1, 3]
let x = numIdenticalPairs(nums)
console.log(x);
