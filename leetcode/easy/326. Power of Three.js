var isPowerOfThree = function (n) {
//     let count = 1;
//     if (n < 0) {
//         return false;
//     }

//     while(n % 3 === 0) {
//         n /= 3;
//         count++;
//     }
//     if (n===1) {
//         return true;
//     }
//     return false;
// };

    if(n == 1) return true;
    if(n % 3 != 0 || n <= 0) return false;
    return isPowerOfThree(n/3);
}

console.log(isPowerOfThree(9))
