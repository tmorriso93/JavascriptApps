//take any array and count how many True values it has

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
} 

console.log(countSheeps(['true','true','false']))