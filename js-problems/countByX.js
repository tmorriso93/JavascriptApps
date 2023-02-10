// create a function that takes 2 arguments x and n 
// multiply x by n. if n is 5 multiply x by 1 leading up to 5.
// it will return an array with each answer. 
// example if you call the function  like this countBy(2,3) 
//youll get [2,4,6] //2 X 1 = 2, 2 X 2 = 4, 2 X 3 = 6

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
      z.push(x * i)
    }
    return z;
  }

console.log(countBy(2,5))