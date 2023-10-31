// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/python

function smash(words) {
    if (words.length === 0) {
        return "";
    }
    let result = ""
    if (words.length === 1) {
        return result += words[0];
    } else {

        for (let i = 0; i < words.length; i++) {
            result += words[i] + " ";
        }
    }
    return result.trim();
}

let words = ["ana", "mere", "pere", "!"]

console.log(smash(words))
