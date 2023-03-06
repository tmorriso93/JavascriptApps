function count (string) {  
    const count = {};
  
       //convert string to array
       //if char is
       string.split('').forEach(char => {
          count[char] = count[char] ? (count[char] + 1) : 1
  })
     return count;
  } 