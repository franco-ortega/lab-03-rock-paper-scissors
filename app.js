import { getRandomThrow, doesUserWin } from './get-random-throw.js';

const clickButton = document.querySelector('#play-button');
const messageSpan = document.querySelector('#message-span');
const resultsSpan = document.querySelector('#results-span');
const resetButton = document.querySelector('#reset-button');
const resetSpan = document.querySelector('#reset-span');
const computerChose = document.querySelector('#computer-chose');
const concealImage = document.querySelector('#conceal-image');

let wins = 0;
let losses = 0;
let draws = 0;
let resets = 0;

// ***********START OF PLAY BUTTON**************
clickButton.addEventListener('click', () => {

    const gameButton = document.querySelector(':checked');
    const userPick = gameButton.value;

    const computerChoice = getRandomThrow();

    const finalAnswer = doesUserWin(userPick, computerChoice);
    messageSpan.textContent = finalAnswer;

    if (finalAnswer === 'You win!') {
        wins++;
    } else if (finalAnswer === 'You lose.') {
        losses++;
    } else if (finalAnswer === 'Draw!') {
        draws++;
    }

    document.getElementById('my-img-paper').src = '';
    document.getElementById('my-img-rock').src = '';
    document.getElementById('my-img-scissors').src = '';

    computerChose.textContent = 'Computer chose:';
    if (computerChoice === 'scissors') {
        document.getElementById('my-img-scissors').src = './assets/scissors.jpeg';
    } else if (computerChoice === 'rock') {
        document.getElementById('my-img-rock').src = './assets/rock.jpeg';
    } else if (computerChoice === 'paper') {
        document.getElementById('my-img-paper').src = './assets/paper.jpeg';
    }

    resultsSpan.textContent = `Wins: ${wins}; Losses ${losses}; Draws: ${draws}`;

});
// ***********END OF PLAY BUTTON**************

// ***********START OF RESET BUTTON***********
resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    resets ++;
    resultsSpan.textContent = `Wins: ${wins}; Losses ${losses}; Draws: ${draws}`;
    resetSpan.textContent = resets;
    messageSpan.textContent = '';
    document.getElementById('my-img-paper').src = '';
    document.getElementById('my-img-rock').src = '';
    document.getElementById('my-img-scissors').src = '';
});
// ***********END OF RESET BUTTON***********