let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let count1 = 0;
let count2 = 0;


function onePlusOne() {
    count1 += 1
    score1.innerText = count1
}
function onePlusTwo() {
    count1 += 2
    score1.innerText = count1
}
function onePlusThree() {
    count1 += 3
    score1.innerText = count1
}


function twoPlusOne() {
    count2 += 1
    score2.innerText = count2
}
function twoPlusTwo() {
    count2 += 2
    score2.innerText = count2
}
function twoPlusThree() {
    count2 += 3
    score2.innerText = count2
}