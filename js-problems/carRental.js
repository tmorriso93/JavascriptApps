//rent a car for $40/day after 7 days - $50 after 3 days - $20
function rentalCarCost1(d) {
    return 40 * d - ( d > 6 ? 50 : d > 2 ? 20 : 0)
 }

 //another way to solve problem with functions
 function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost2(days) {
    return baseCost(days, 40) - discountRate(days);
  }