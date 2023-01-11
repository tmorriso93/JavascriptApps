// make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially,
//  rearrange the digits to create the highest possible number.
// Example - Input: 42145 Output: 54421

const descendingOrder = (n) =>
 Number( [...String(n)].sort((a,b) => b - a).join(''))