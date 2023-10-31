/*
Write a function to capitalize every other letter from a string:
1. String can be a word, or a pharse or nothing. 
2. Treat every case!

e.g: Ana are mere -> ANa ArE mErE
*/
const string = 'Ana are mere si merge la padure';


function ex1(str) {

  if (str == null || str == undefined) return;

  for (let i = 0; i < str.length; ++i) {
    if (i % 2 == 0) {
      process.stdout.write(str[i].toUpperCase());
    } else {
      process.stdout.write(str[i]);
    }
  }
};

const fun = (str) => {
  // base case (null or undefined)
  if (str == null || str == undefined) return;

  for (let i = 0; i < str.length; ++i) {
    if (i % 2 == 0) {
      process.stdout.write(str[i].toUpperCase());
    } else {
      process.stdout.write(str[i]);
    }
  }
}

// ex1(string);
fun(string);

// process .stdout.write(ex1(string));
