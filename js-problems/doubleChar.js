
//return a string and repeat every character in the string twice 

function doubleChar(str) {
    let results = ""
      for (const char of str){
      results += char + char
      }
      return results;
  }