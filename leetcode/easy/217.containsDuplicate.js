nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
nums = [3, 3];
var containsDuplicate = function (nums) {
    //
    // sorting method
    //
    // nums.sort();
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] == nums[i + 1]) {
    //         return true;
    //     }
    // }

    //
    // hashmap method
    //

    let hashmap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hashmap.has(nums[i])) {
            return true;
        }
        hashmap.set(nums[i], true);
    }

    return false;
};

console.log(containsDuplicate(nums));
