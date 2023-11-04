// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let temp = init
    
    return {
        increment() {
            temp += 1;
            return (temp);
        },
        decrement() {
            temp -= 1;
            return (temp);
        },
        reset() {
            temp = init;
            return (init);
        }
    };
};

// var createCounter = function (init) {
//     let inc = 0;
//     let dec = 0;
    
//     return {
//         increment() {
//             init += 1;
//             inc ++;
//             return (init);
//         },
//         decrement() {
//             init -= 1;
//             dec++;
//             return (init);
//         },
//         reset() {
//             init = inc-dec;
//             inc = 0;
//             dec = 0;
//             return (init);
//         }
//     };
// };

const counter = createCounter(0)
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.reset()); // 0
console.log(counter.decrement()); // -1