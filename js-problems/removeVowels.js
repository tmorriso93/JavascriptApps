// remove vowels from string

function disemvowel(str) {
    let theVowels = ["a", "e", "i", "o", "u"];
    let newString = str.split("");
    
    for(let i = 0; i < str.length; i++){
        if(theVowels.includes(newString[i].toLowerCase() || theVowels.includes(newString[i].toUpperCase() ))){
        newString[i] = ''
    }
    }
        
      return newString.join("");
    }
    
    disemvowel("this website is for losers LOL!") 