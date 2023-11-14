// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {

    let list_k = [];

    for (let i = 0; i < mat.length; i++) {
        let count = 0;
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                count++;
            } else {
                break;
            }
        }
        list_k.push({ index: i, count: count });
    }

    // list_k = {0, 2; 1, 5; etc}
    list_k.sort((a, b) => a.index - b.index || a.count - b.count);

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(list_k[i].index);
    }
    return result;

};

let mat =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]];

let k = 3;
let x = kWeakestRows(mat, k);

console.log(x);
