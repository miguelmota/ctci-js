/**
 * What's the probablity of picking an even number or a number between 1 and 5?
 *
 * P(x is even or x <=5)
 *  = P(x is even) + P(x <= 5) - P(x is even and x <= 5)
 *  = P(x is even) + p(x <= 5) - ((x is even given x <= 5) * p(x <= 5))
 *
 * p100
 */

function prob(x) {
  var max = 10;
  var probIsEven = 1/2;
  var probIsLessThanX = x/max;
  return probIsEven + probIsLessThanX - (2/x * probIsLessThanX);
}

console.log(prob(5)); // 0.8


