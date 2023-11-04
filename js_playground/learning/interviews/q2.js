/*
Write a function that accept a string in html format and return the correct form
1. The string contains < and > but every time the closing ..

e.g: <p> Hello from HTML <p> --> <p> Hello from HTML </p>
<div> meeow <div> --> <div> meeow </div>

*/
const string = '<p> Hello from HTML <p>';
const correct_string = '<p> Hello from HTML </p>';
// we can try stack/heap solution.
// first in last out --> if > and < make a pair, then add '/' to '<' and free tail.
function close_tags(string) {
    let buffer = [];
    let temp_str = '';
    for(let i = 0; i < string.length; ++i) {
        temp_str += string[i];
        if(string[i] === '>') {
            buffer[1] = '>';
        }
        if(string[i] === '<' && buffer[1] === '>') {
            // temp_str[i++] = '/';
            temp_str += '/';
            buffer[1] = '';
            // i++;
        }
    }
    return temp_str;
};

// console.log(close_tags(string));

// test case:
if(close_tags(string) === correct_string) {
    console.log("Nice job!")
} else {
    console.log("Nice try!");
    console.log(close_tags(string));
}