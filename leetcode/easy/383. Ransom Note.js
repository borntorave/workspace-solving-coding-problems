/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let hm = new Map();
    let count = 0;

    for (let i = 0; i < magazine.length; i++) {
        if(hm.has(magazine[i])) {
            count = hm.get(magazine[i]) + 1;
            hm.set(magazine[i], count);
        } else {
        hm.set(magazine[i], 1);
        }
    }

    for (let x = 0; x < ransomNote.length; x++) {
        if (hm.has(ransomNote[x]) && hm.get(ransomNote[x]) > 0) {
            hm.set(ransomNote[x], hm.get(ransomNote[x]) - 1);
        } else {
            return false;
        }
    }

    return true;

};

x = 'cafe'
y = 'caffein'

console.log(canConstruct(x, y));

