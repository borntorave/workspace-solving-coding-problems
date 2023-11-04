// // declare hashmap 
// let hashm = new Map();

// // add elements to hashmap, with .set extension
// // hashm.set('k1', 'v1');
// // hashm.set('k2', 'v2');

// for(let i=0; i<10; i++) {
//     hashm.set(i, i);
// }
// //
// // extract elements from hashmap, with .get
// //
// for(let i=0; i<10; i++) {
//     console.log(hashm.get(i));
// }
// // check if a specific element exist in hashmap, with .has

// console.log(hashm.has(3));


let HM = new Map()
let n = [1,2, 8, 3]
let t = 5


for (let x = 0; x < n.length; x++) {
    HM.set(n[x], x);
}

for (let x = 0; x < n.length-1; x++) {
    let comp = t - n[x]
    if(HM.get(n[x]) + HM.get(n[x+1]) == t) {
        console.log(HM.get(x), HM.get(x+1));
        return
    } else {
        console.log("error");
        return
    }
}
