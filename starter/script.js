'use strict';
// defining the scores fo both the players.
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

//starting conditions
const init = function () {
  console.log(diceEl.classList);

  scores = [0, 0];

  currentScore = 0;

  activePlayer = 0;

  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// rolling dice

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating a random dice roll.
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. display dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for rolled 1: if true, switch to next player.

    if (dice != 1) {
      // add dice to current score.
      currentScore += dice;
      // currentsScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; //dynamically changes the current score based on the active player.
      // current0El.textContent = currentScore; // change later bc this is not dynamic.(now changed).
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

/* const btnRoll = document.querySelector("btn--roll");
 document.querySelector("btn--roll").addEventListener;
 why was the error showing in the upper code.*/
//you were not giving the random dice no. thats why ig.

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore; // score[activePlayer] = score[activePlayer] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; //here will come score--  (not current score.)
    // here we can put that bracket.

    //2. check if player's score is >= 100
    // finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // cant undeerstand why this is needed.
    } else {
      // if not 100 switch to the next player
      switchPlayer();
    }
  } // we can put this bracket up also but why
});

// resetting game.
btnNew.addEventListener(
  'click',
  init
  //   playing = true;
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove('player--winner');
);
