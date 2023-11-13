// https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let require_work = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            require_work += 1;
        }
    }

    return require_work;
};