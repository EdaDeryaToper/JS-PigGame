'use strict';
//Math.random() Returns a decimal number between 0 and 1
//Math.trunc convert decimal to integer
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Activating the btn check class on HTML
//Adding a click event to the button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('❌ No Number');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🪘 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //css'de tanımlandığı gibi rem değerini büyütmüş olduk

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--; //score = score-1
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😒 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when the guess is too high
  /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--; //score = score-1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }

    //when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😒 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
