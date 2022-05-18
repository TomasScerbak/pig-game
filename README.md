# PIG GAME - SCORE 100 and WIN!

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Play game with other player
- Roll the dice to generate random number 1-6
- Hold the total score
- Reset whole game

### Links

- Solution URL: [https://github.com/TomasScerbak/pig-game.git]
- Live Site URL: [https://tomasscerbak.github.io/pig-game/]

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Desktop only
- JavaScript

### What I learned

I learned how to create helper functions to keep DRY principle. Learned the logic how to switch bewteen states depending on game status. How to manipulate with DOM elements, updating them and adding functionalities.

```js
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

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

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

```

### Continued development

creating as much projects as possible with JavaScript

## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
