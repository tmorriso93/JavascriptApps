// check if the string passed in the first argument ends 
// with the 2nd argument(also a string)
// Examples
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// option 1
function stringEndsWith1(str, ending){
    if(ending.length == 0) return true
  return str.substr(-ending.length) == ending;
} 

stringEndsWith1("pizza", "zza") //true

// option 2
function stringEndsWith2(str, ending){
    return str.endsWith(ending);
  }

  stringEndsWith2("home", "me") //true