// 1351. Count Negative Numbers in a Sorted Matrix


/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {

    let flag = 0;
    // for(let i = 0; i < grid.length; i++) { // n + 1
    //     for(let j = 0; j < grid[i].length; j++) { // n x (n+1)
    //         if(grid[i][j] < 0) { // n x n
    //             flag += 1; // n x n
    //         }
    //     }
    // }
    // // Time complexity: 3n^2 + 2n + 1 -> O(n^2)
    // return flag;

    let row = grid.length;
    let col = grid[0].length;

    let i = 0;
    let j = col - 1;

    while (i < row && j >= 0) {
        if (grid[i][j] < 0) {
            flag += row - i;
            j -= 1;

        } else {
            i += 1;
        }
    }

    return flag;
};

let grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
x = countNegatives(grid);
console.log(x);