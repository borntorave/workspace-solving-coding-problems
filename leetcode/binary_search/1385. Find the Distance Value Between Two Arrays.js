// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/

/*
    Strange description, lack of information;
    Maybe some testcases are wrong?
    I'll come back later for this.
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        let flag_found = false;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) < d) {
                flag_found = true;
                break;
            }
        }
        if (!flag_found) {
            count++;
        }
    }
    // console.log(count-1);
    return count;

};

let arr1 = [1, 4, 2, 3]
let arr2 = [-4, -3, 6, 10, 20, 30]
let d = 3;

findTheDistanceValue(arr1, arr2, d);

