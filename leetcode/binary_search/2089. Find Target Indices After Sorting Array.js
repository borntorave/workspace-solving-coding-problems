// https://leetcode.com/problems/find-target-indices-after-sorting-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {

    let flags = []
    if (nums.length == 0) {
        return [];
    }
    let sorted_nums = nums.sort((a, b) => a - b); // sort function() -> O(log N)

    for (let i = 0; i < sorted_nums.length; i++) { // n + 1 -> O(n)
        if (sorted_nums[i] == target) { // n -> O(n)
            flags.push(i); // n -> O(n)
        }
    }

    // Time Comp -> O(log N) * O(n) -> n Log N

    return flags;


    // Binary Search attempt

    // let l = 0;
    // let r = sorted_nums.length - 1;

    // while (l <= r) {
    //     let mid = (l + r) >> 1;

    //     if (sorted_nums[mid] == target) {
    //         flags.push(mid);
    //     }

    //     if (sorted_nums[mid] < target) {
    //         l = mid + 1;
    //     } else {
    //         r = mid - 1;
    //     }

    // }

    // return flags.sort((a, b) => a - b);

};

let nums = [1, 2, 5, 2, 3]
let target = 5;

let x = targetIndices(nums, target);
console.log(x);
