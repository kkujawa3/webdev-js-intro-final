"use strict";

const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");
const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const computerGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");

let compNumber = generateCompNumber();
let guessHistoryA = [];
let isGameOver = false;
let attemptsLeft = 3;

//function to generate random number
function generateCompNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// check player's guess
function checkGuess() {
  if (isGameOver) return;
  
  const guess = parseInt(guessInput.value);
  if(isNaN(guess)) return;

    currentGuess.textContent = guess;
    guessHistoryA.push(guess);
    guessHistory.textContent = guessHistoryA;

// generate the computer's guess
  const compGuess = generateCompNumber();
  computerGuess.textContent = compGuess;

// check to see if player has won
  if(guess === compGuess) {
     guessMessage.textContent = "You Won! ";
     endGame();
  } else if (guess > compGuess) {
     guessMessage.textContent = "Your guess is too high ";
  } else if (guess < compGuess) {
     guessMessage.textContent = "Your guess is too low. ";
  } 

// decrease attempts
  attemptsLeft --;

// attempts left
  if (attemptsLeft > 0) {
    guessMessage.textContent += " You have " + (attemptsLeft) + " attempts left.";
  } else if (attemptsLeft <= 0) {
    guessMessage.textContent = "You lost and used your 3 tries, play again"
    endGame();
  } 
}    

// end game
function endGame() {
  isGameOver = true;
  submitBtn.disabled = true;    
  restartBtn.disabled = false;
}

// restart game
function restartGame() {
  isGameOver = false;
  attemptsLeft = 3;
  compNumber = generateCompNumber();
  guessHistoryA = [];
  guessInput.textContent = '';
  guessMessage.textContent = '';
  currentGuess.textContent = '';
  computerGuess.textContent = '';
  guessHistory.textContent = '';
  submitBtn.disabled = false;
  restartBtn.disabled = true;
}

// Event Listeners
submitBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);