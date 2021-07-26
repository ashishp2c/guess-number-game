'use strict';

// define the secret number between 1 and 20

let secretNumber = Math.ceil(Math.random() * 20);

//  select elements from the page
const checkButton = document.querySelector('.check');
const inputBox = document.querySelector('.guess');
const messageBox = document.querySelector('.message');
const scoreBoard = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
let enteredValue;
let score = 20; // starting score
let highScoreValue = 0; //starting highscore

// reloads the page on click of the again btn
againBtn.addEventListener('click', function () {
  //   location.reload();
  // reload can be used but to implement the highscore we will
  // need to browser memory
  gameReset();
});

checkButton.addEventListener('click', function () {
  enteredValue = Number(inputBox.value); // fetch the value

  //value entered is within 1-20
  if (enteredValue >= 1 && enteredValue <= 20) {
    // value entered is same as secret number
    if (enteredValue === secretNumber) {
      messageBox.textContent = 'Correct Number!!!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';

      //   set highscore
      if (score > highScoreValue) {
        highScoreValue = score;
        highScore.textContent = highScoreValue;
      }
      alert('You Won!!!');
      // disable button if win
      checkButton.disabled = 'true';
    }
    // value entered is higher than secret number
    else if (enteredValue > secretNumber) {
      messageBox.textContent = 'Too HIGH!!!';
      checkScore();
    }
    // value entered is less than secret number
    else if (enteredValue < secretNumber) {
      messageBox.textContent = 'Too LOW!!!';
      checkScore();
    }
  }

  //   value entered is outside the range of 1-20
  else if (enteredValue < 0 || enteredValue > 20) {
    messageBox.textContent = 'Please enter a value from 1 to 20';
    console.log(enteredValue);
  }

  //   display message if no value is entered
  //   entered value = 0
  else {
    messageBox.textContent = 'Please enter a value to PLAY!!!';
  }
});

const checkScore = function () {
  score--; // decrease score by 1
  scoreBoard.textContent = score; // update score
  // if the score goes to 0
  if (score === 0) {
    alert('You LOST!!! Try Again!!!');
    gameReset();
  }
};

const gameReset = function () {
  secretNumber = Math.ceil(Math.random() * 20);
  score = 20;
  inputBox.value = '';
  scoreBoard.textContent = score;
  messageBox.textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  checkButton.disabled = 'false';
};
