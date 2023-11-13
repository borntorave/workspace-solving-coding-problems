// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

var findMaxConsecutiveOnes = function(nums) {
    let search = 0;
    let track = 0;

    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] = 1) {
            search++;
            if(search > track) {
                track = search;
            }
        } else {
            search = 0;
        }
    }
    return track;
};

