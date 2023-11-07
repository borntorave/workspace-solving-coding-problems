// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let flag = 0;
    return function (...args) {
        if(!flag) {
            flag = true;
            return fn(...args);
        } else {
            return undefined
        }
    }
};


let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

