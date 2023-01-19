//return numbers over 18 and over

let ages = [19, 21, 17, 23, 15, 16];
let ages2 = [19, 21, 17, 23, 15, 16];
let ages3 = [19, 21, 17, 23, 15, 16];


//target a specific array

const adults = ages.filter(
   adult => adult >= 18 
)

console.log(adults)


//general function works with any array of numbers
function grown(arr) {
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > 18){
            console.log(arr[i])
        }
    }
}

grown(ages2)
