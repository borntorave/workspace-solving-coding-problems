// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

/**
 * @param {number[]} nums
 * @param {number} target3
 * @return {number}
 */
var countPairs = function (nums, target) {
    let flag = 0;
    let x = nums.sort((a,b) => a-b);
    let left = 0;
    let right = x.length-1;

    while(left < right) {
        if(x[left] + x[right] < target) {
            flag += right - left;
            left += 1;
        } else {
            right--;
        }
    }
    return flag;

};

let nums = [-6,2,5,-2,-7,-1,3]
let target = -2;

let x = countPairs(nums, target);
console.log(x);
