//a function that reverses words

const reverseWords = str => 
  str.split(' ').map(element => [...element].reverse().join('')).join(' ')