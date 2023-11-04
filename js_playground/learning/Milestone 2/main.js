// pre-ES6 && post-ES6 = Modern JS

// Functions
// function call_name() {
//     console.log("My name");
// }
// call_name();

// const myName = () => console.log("My name");
// myName()

// Conditionals

// write a function to capitalize every other letter from a string:
// string can be a word, or a pharse or nothing. 
// treat every case!

// Ana are mere -> ANa ArE mErE

const string = 'Ana are mere si merge la padure';

// let s = string.toUpperCase();

function ex1(str) {

    if(str == null || str == undefined) return;

    for(let i = 0; i < str.length; ++i) {
        if(i % 2 == 0) {
            process.stdout.write(str[i].toUpperCase());
        } else {
            process.stdout.write(str[i]);
        }
    }
};

ex1(string);

// process .stdout.write(ex1(string));

