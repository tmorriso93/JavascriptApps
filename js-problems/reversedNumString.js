//Convert number to reversed array of digits

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = (n) => {
    return String(n).split('').map(Number).reverse()
  } 

  console.log(digitize("3456")) 
  //6, 5, 4, 3