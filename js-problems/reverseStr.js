//reverse string
const revStr = (str) => {
    return str.split('').reverse().join('')
    } 

    //Longer solution
    // const solution = (str) => {
    //     let result = ''
    //     for(let i of str){
    //     result = i + result
    //     }
    //     return result
    // }