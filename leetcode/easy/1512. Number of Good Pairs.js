// https://leetcode.com/problems/number-of-good-pairs/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function(nums) {
    // set, get

    let x = {
        k1:v1,
        k2:v2
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if(i <= j && nums[i] === nums[j]) {
                x.i = j;
            }
        }
    }

    let hm = new Map();
    for(let i = 0; i < nums.length; ++i) {
        hm.set(i, nums[i]);
    }
};
nums = [1,2,3,1,1,3];
let x  = []

for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
        if(i < j && nums[i] === nums[j]) {
            x += i;
            x += ",";
            x += j;
            x += '; ';
        }
    }
}

console.log(x);