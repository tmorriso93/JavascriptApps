//rock paaper scissors game
const rps = (p1, p2) => {
    if(p1 === p2) return 'Draw!';
    if(p1 === "scissors" && p2 === "paper") return 'player 1 won!'
    if(p1 === "scissors" && p2 === "rock") return 'player 2 won!'
    if(p1 === "rock" && p2 === "paper") return 'player 2 won!'
    if(p1 === 'rock' && p2 === "scissors") return 'player 1 won!'
    if(p1 === "paper" && p2 === "rock") return 'player 1 won!'
    if(p1 === 'paper' && p2 === "scissors") return 'player 2 won!'
} 

console.log(rps("rock", "paper"))


//a cleaner way to code this game 
const rps2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
}
else {
        return "Player 2 won!";
    }
}

console.log(rps2('scissors', 'paper'))