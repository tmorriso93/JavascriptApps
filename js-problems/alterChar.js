String.prototype.toAlternatingCase = function () {
    let newStr = '';
         for(const char of this) {
         if (char === char.toUpperCase()){
         newStr += char.toLowerCase()
     }   else {
         newStr += char.toUpperCase()
     }
 }
     return newStr
 } 