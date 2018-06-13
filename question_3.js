// Question 3 -- changePossibilities(amount, amount)

// Your quirky boss collects rare, old coins. They found out you're
// a programmer and asked you to solve something they've been 
//working on for a long time.

// Write a function that, given an amount of money and an array of 
//coin denominations, computes the number of ways to make the 
//amount of money with coins of the available denomations. 

// Example: For amount =4(4c) and denomintions [1,2,3](1x,2x,3x), 
//your program would output 4 - the number of ways to make 4x with 
//those denominations.

// 1c, 1c, 1c, 1c
// 1c, 1c, 2c
// 1c, 3c
// 2c, 2c


//
// NOTE: I had difficulty understanding how to solve this problem.
// My initial response upon reading the problem was that this would 
// involve recursion. After considerable trail and error, I did not 
// solve the problem and had to look for hints online.
// 
// After studying several explanations on this problem, I 
// learned about dynamic programming and how to break the problem 
// down into subsets/smaller problems. I learned how to approach
// the problem with a combination of recursive logic and dynamic
// programming. I documented my understanding in the comments below. 
//

function changePosibilities(amount, denomintion){
  // this variable outside the change function keeps track of the number of posibilities
  let count = 0;
  let coins = denomintion;

  // takes a target amount and denomination and checks  
  function makeChange(index, targetAmount){
    // largest denomination in the set
    let currentCoin = coins[index];
    
    // check if we are at the 0 index (last/smallest denomination to check)
    if( index === 0){
      // if the target is divisable by the last/smallest denomination, increase count
      if( targetAmount % currentCoin === 0){
        count++;
      }
      return;
    }

    // while target is not 0, makeChange for the target amount and subtract the result
    while( targetAmount >= 0 ){
      makeChange(index-1, targetAmount);
      targetAmount -= currentCoin;
    }
  }

  makeChange(coins.length-1, amount);
  return count;
};

changePosibilities(4, [1, 2, 3]); // 4