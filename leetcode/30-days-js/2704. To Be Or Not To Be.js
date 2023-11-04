// https://leetcode.com/problems/to-be-or-not-to-be/submissions/1091192174/?envType=study-plan-v2&envId=30-days-of-javascript
// only js

var expect = function (val) {
    return {
        toBe(val1) {
            if (val === val1) {
                return true;
            }
            // throw method
            throw new Error("Not Equal");
        },
        notToBe(val2) {
            if (val !== val2) {
                return true;
            }
            throw new Error("Equal");
        }
    }
};
