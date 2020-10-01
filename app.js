import { getRandomThrow, didUserWin } from './get-random-throw.js';

const clickButton = document.querySelector('#click-button');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');
const thrownSpan = document.querySelector('#thrown-span');
const messageSpan = document.querySelector('#message-span');

let wins = 0;
let losses = 0;
let draws = 0;

console.log(`initial ${wins} wins, ${losses} losses, ${draws} draws`);
console.log(wins, losses, draws);

// ***********START OF BUTTON**************
clickButton.addEventListener('click', () => {


const gameButton = document.querySelector(':checked');
const userPicks = gameButton.value;
console.log(userPicks + ' selected by user');

const computerChoices = getRandomThrow();
console.log(computerChoices + ' selected by computer');

const finalAnswer = didUserWin(userPicks, computerChoices);

messageSpan.textContent = finalAnswer;

if (finalAnswer === 'You win!') {
    wins++;
} else if (finalAnswer === 'You lose.') {
    losses++;
} else if (finalAnswer === 'Draw!') {
    draws++;
}

console.log(wins, losses, draws);

thrownSpan.textContent = computerChoices;
winsSpan.textContent = wins;
lossesSpan.textContent = losses;
drawsSpan.textContent = draws;

});
// ***********END OF BUTTON**************



