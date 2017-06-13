/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

function handValue (hand) {
  for (i = 0; i < hand.length; i++){
    if ((hand[i] == "K") || (hand[i] == "Q") || (hand[i] == "J")){

      hand[i] = 10;

    } else if (hand[i] == "A"){
      hand[i] = 11;

    } else {
      hand[i] = parseInt(hand[i]);
    }
  }

  let sum = hand.reduce((a, b) => a + b, 0);

  if (sum > 21){
    for (i = 0; i < hand.length; i++){
      if (hand[i] == 11){
        hand[i] = hand[i] - 10;

      }
    }
  }
  //console.log(hand); //don't need this, shows the hand

  sum = hand.reduce((a, b) => a + b, 0);
  console.log(hand,sum); //don't need this, shows hand and sum
  return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/