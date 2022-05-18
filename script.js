'use strict';

// Grabbing DOM elements
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

// Starting Conditions
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Helper function to switch players
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
}

//Helper function to restart/initialize the game
const initGame = function() {

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    dice.classList.add('hidden');
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
}

initGame();

// Rolling dice functionality
rollDiceButton.addEventListener('click', function() {

    if(playing) {
        let roll = Math.trunc(Math.random() * 6) + 1;

        dice.classList.remove('hidden');
        dice.src = `Images/dice-${roll}.png`;
    
        if(roll !== 1) {
            currentScore += roll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

// Button HOLD functionality
holdButton.addEventListener('click', function() {

    if(playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 20) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
})

// New Game Button functionality
newGameButton.addEventListener('click', initGame);

