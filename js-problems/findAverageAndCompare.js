//you have an array with test scores, calculate the class average and compare your score
//return true if your score is better than the class average

function betterThanAverage(classGrades, yourGrade){
    let classAvg = 0;
    for(let i = 0; i < classGrades.length; i++){
        //take each class point
        classAvg += classGrades[i]
    }
    classAvg = classAvg / classGrades.length;
    //return true if your grade is bigget than the class Average
    return yourGrade > classAvg
}

console.log(betterThanAverage([77, 87, 80, 75], 85))