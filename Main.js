//Only need to water plants once a week on wednesday.  A function Expression is used to declare a variable using an anonymous function.

const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}

console.log(plantNeedsWater('Tuesday'));
