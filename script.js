'use strict';

const again = document.querySelector('.again');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let attempts = 20,
  currScore = 20,
  highestScore = 0;

const getRandomValue = function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let correctAnswer = getRandomValue(1, 20);

console.log(correctAnswer);

again.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  guess.value = '';
  number.textContent = '?';
  score.textContent = '20';
  document.body.style.backgroundColor = '#222';
  currScore = 20;
  correctAnswer = getRandomValue(1, 20);
  disableTxt(0);
});

check.addEventListener('click', function () {
  if (guess.value == correctAnswer) {
    message.textContent = "Yay! That's correct..";
    number.textContent = correctAnswer;
    document.body.style.backgroundColor = 'green';
    disableTxt(1);
    highestScore = Math.max(highestScore, currScore);
  } else {
    if (guess.value < correctAnswer)
      message.textContent = 'Your guess is less than the correct answer...';
    else message.textContent = 'Your guess is more than the correct answer...';
    currScore -= 1;
    attempts -= 1;
  }
  updateScores(currScore);
});

function disableTxt(disable) {
  if (disable) guess.disabled = true;
  else guess.disabled = false;
}

function updateScores(curScore) {
  score.textContent = curScore;
  highScore.textContent = highestScore;
}
