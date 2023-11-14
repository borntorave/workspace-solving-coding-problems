// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    let result = [];
    let hm = {};

    for (let i = 0; i < nums1.length; i++) {
        hm[nums1[i]] = 1;
    }

    for (let i = 0; i < nums2.length; i++) {

        if(hm[nums2[i]] === 1) {
            result.push(nums2[i]);
            hm[nums2[i]] = 0;
        }
    }

    return result;
};

// var intersection = function (nums1, nums2) {

//     let result = [];
//     let hm = [];

//     for (let i = 0; i < nums1.length; i++) {
//         hm.push({ [nums1[i]]: 1 });
//     }

//     for (let i = 0; i < nums2.length; i++) {

//         if (hm.find(nums2[i], nums2[i] > 1));
//         {
//             result.push(nums2[i]);
//         }
//         hm.push({ [nums2[i]]: 1 });
//     }
//     console.log(hm)
// };

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

let x = intersection(nums1, nums2);
console.log(x);
