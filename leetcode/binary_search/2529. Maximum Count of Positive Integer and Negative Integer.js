/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    let neg = 0;
    let pos = 0;

    for (let i = 0; i < nums.length; i++) { // n+1 => O(n)
        if (nums[i] > 0) { // n => O(n)
            pos++; // n
        } else if (nums[i] < 0) { // n => O(n)
            neg++; // n
        }
    }
    if (neg > pos) { // O(1)
        return neg;
    } else {
        return pos;
    }

    // time complexity: O(n)

};

// test case:
// let nums = [-2,-1,-1,1,2,3];
let nums = [5, 20, 66, 1314];

console.log(maximumCount(nums));