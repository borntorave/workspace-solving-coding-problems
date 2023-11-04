// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
// js only

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let temp = []

    for(let i =0; i < arr.length; i++)
    {
        if(fn(arr[i], i)) {
            temp.push(arr[i]);
            // temp.append(arr[i]);
        }
    }

    return temp;
};