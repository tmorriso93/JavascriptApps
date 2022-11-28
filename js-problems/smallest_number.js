class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }
  
  let arr = [5, 25, 50];
  let smallInt = new SmallestIntegerFinder(arr) 


  //look at the "arr" array and grab the smallest number
  console.log(smallInt.findSmallestInt(arr))