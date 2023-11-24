// https://leetcode.com/problems/fair-candy-swap/description/

// /**
//  * @param {number[]} aliceSizes
//  * @param {number[]} bobSizes
//  * @return {number[]}
//  */
// var fairCandySwap = function (aliceSizes, bobSizes) {
//     let a_sum = 0;
//     let b_sum = 0;
//     let count_a = 0;
//     let count_b = 0;

//     for (let i = 0; i < aliceSizes.length; i++) // N
//     {
//         a_sum += aliceSizes[i];
//     }
//     // console.log(a_sum);

//     for (let i = 0; i < bobSizes.length; i++) // N
//     {
//         b_sum += bobSizes[i];
//     }

//     // console.log(b_sum);

//     while (a_sum > b_sum) {
//         if(a_sum === b.sum) {
//             break;
//         }
//         a_sum--;
//         b_sum++;
//         count_a++;
//     }

//     while (a_sum < b_sum) {
//         if(a_sum === b_sum) {
//             break;
//         }
//         a_sum++;
//         b_sum--;
//         count_b++;
//     }
//     // console.log(a_sum, b_sum);
//     // console.log(count_a, count_b);

//     if(count_a > count_b) {
//         return count_b;
//     } else {
//         return count_a;
//     }

// };

// let aliceSizes = [1, 1];
// let bobSizes = [2, 2];

// fairCandySwap(aliceSizes, bobSizes);
