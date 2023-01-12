// create a function that will remove the first and last character in a string

function removeChar(str) {
    //1 is the first char and -1 is the last char
    return str.slice(1, -1)
}

console.log(removeChar("bitch"))