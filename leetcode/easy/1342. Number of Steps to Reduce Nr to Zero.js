// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

/**
* @param {number} num
* @return {number}
*/
var numberOfSteps = function(num) {
    let steps = 0;
    if (num === 0) {
        return steps;
    }

    while(num >= 0) {
        if(num % 2 === 0) {
            num = num / 2;
            steps++;
        } else {
            num--;
            steps++;
        }
    }
    return (steps);
};

//console.log(numberOfSteps(0));

// 53 ms 42 mb


var numberOfSteps = function(num) {
    let steps = 0;
    while(num > 0) {
        if(num & 1) {
            num--;
        } else {
            num >>= 1;
        }
        steps++;
    }
    return steps;
};
// 46 ms 42 mb