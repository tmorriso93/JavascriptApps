// create a function that accepts an array of Data
// the function must return only the numbers within
// the array

function filterNums2(arr) {
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'number'){
            results.push(arr[i])
        }
    }
    return results
}

console.log(filterNums2([1,'char',2,'string',3]))

// short hand way of solving this problem

const filterNums1 = arr =>
    arr.filter(element => typeof element == 'number')

    console.log(filterNums1([1,'word',2,3]))

