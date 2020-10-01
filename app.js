import { getRandomThrow, doesUserWin } from './get-random-throw.js';

const clickButton = document.querySelector('#play-button');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');
const thrownSpan = document.querySelector('#thrown-span');
const messageSpan = document.querySelector('#message-span');
const resultsSpan = document.querySelector('#results-span');
const resetButton = document.querySelector('#reset-button');

let wins = 0;
let losses = 0;
let draws = 0;

// ***********START OF PLAY BUTTON**************
clickButton.addEventListener('click', () => {

    const gameButton = document.querySelector(':checked');
    const userPicks = gameButton.value;

    const computerChoices = getRandomThrow();

    const finalAnswer = doesUserWin(userPicks, computerChoices);
    messageSpan.textContent = finalAnswer;

    if (finalAnswer === 'You win!') {
        wins++;
    } else if (finalAnswer === 'You lose.') {
        losses++;
    } else if (finalAnswer === 'Draw!') {
        draws++;
    }

    thrownSpan.textContent = `Computer chose: ${computerChoices}.`;
    resultsSpan.textContent = `Wins: ${wins}; Losses ${losses}; Draws: ${draws}`;
});
// ***********END OF PLAY BUTTON**************


const resetSpan = document.querySelector('#reset-span');
let resets = 0;

// ***********START OF RESET BUTTON***********
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    resets ++;
    resultsSpan.textContent = `Wins: ${wins}; Losses ${losses}; Draws: ${draws}`;
    resetSpan.textContent = resets;
})
// ***********END OF RESET BUTTON***********