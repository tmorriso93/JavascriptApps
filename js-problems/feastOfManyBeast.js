// create a function that takes two arguments. the first arguments first letter 
// must match the second arguments first letter. The first arguments last letter 
// must match the second arguments last letter.

// Assume that beast and dish are always lowercase strings, and that each has
//  at least two letters. beast and dish may contain hyphens and spaces, but these will not appear
//   at the beginning or end of the 
// string. They will not contain numerals.

const feast = (beast, dish) => 
  beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length -1]

// older way to solve problem
//   function feast(beast, dish) {
//     if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
//       return true;
//     }
//     else {return false;}
//   }

//   console.log(feast("crab", "carb"))
