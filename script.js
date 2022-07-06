'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

//function to display messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Click event listener function and Game logic//

//Click event listener function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Game logic //

  //when there is no input
  if (!guess) {
    displayMessage('Input a number');

    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    // Implementing highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High' : 'Too low';
      // score--;
      displayMessage(guess > secretNumber ? 'Too High' : 'Too low');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#2b6191';
  document.querySelector('.number').style.width = '15rem';
});
