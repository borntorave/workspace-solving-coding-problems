/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let hm =  new Map();
  return function(...args) {
    let key = JSON.stringify(args);
    if(hm.has(key)) {
      return hm.get(key);
    }
      let reduce_redundancy = fn(...args);
      hm.set(key, reduce_redundancy);
      return reduce_redundancy;
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/