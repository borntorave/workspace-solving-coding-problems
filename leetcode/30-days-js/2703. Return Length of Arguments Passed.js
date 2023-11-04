/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	// let count = 0;
    let i = 0;
    while (i < args.length) {
        i++;
    }
    return i; // return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */