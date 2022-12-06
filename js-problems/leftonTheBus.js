//Number of people on the bus
//write a functon that accepts an array with two values
//the first value is how many enter the bus and the second value is how many exit.
//after the last stop return how many people are left on the bus that have fallen asleep.

var number = function(busStops){
    let totalPpl = 0;

  for (let i = 0; i < busStops.length; i++){
        let currStop = busStops[i]
        let getOn = currStop[0];
        let getOff = currStop[1];

        totalPpl += getOn;
        totalPpl -= getOff;
        
    }
        return totalPpl
}

console.log(number([[10,0],[3,5],[5,8]]) ); //5 left
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) ); //17 left