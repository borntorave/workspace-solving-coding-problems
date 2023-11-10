// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const op1 = '++X';
    const op2 = 'X++';
    const op3 = '--X';
    const op4 = 'X--';
    let X = 0;

/*
    if(operations[i] === "++X" || operations[i] === "X++") {
        X++;
    } else {
        X--
    }
*/

    for (let i = 0; i < operations.length; i++) {
        switch(operations[i]) {
            case op1:
                X++;
                break;
            case op2:
                X++;
                break;
            case op3:
                X--;
                break;
            case op4:
                X--;
                break;
        }
    }
    return X;
};

operations = ["--X","X++","X++"]
console.log(finalValueAfterOperations(operations));

