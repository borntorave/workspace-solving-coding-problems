// https://leetcode.com/problems/richest-customer-wealth/description/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
 let max_wealth = 0;
 let hm = new Map();
 
// console.log(accounts.length); // 2
 
 for (let i = 0; i < accounts.length; i++) {
  hm.set(i, accounts[i]);
  console.log(hm.get(i));
 }
 
 hm.forEach((i) => {
  let sum = 0;
  i.forEach((j) => {
   sum += j;
  })
  if (sum > max_wealth) {
   max_wealth = sum;
  }
 })
 
 return max_wealth;
 
};

accounts = [[1,2,3], [3, 2, 1]];
console.log(maximumWealth(accounts));

