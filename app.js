import { getRandomThrow, didUserWin } from './get-random-throw.js';


// import functions and grab DOM elements
/*const gameButton = document.querySelector(':checked');*/
const clickButton = document.querySelector('#click-button');
const winsSpan = document.querySelector('#wins-span');
const lossesSpan = document.querySelector('#losses-span');
const drawsSpan = document.querySelector('#draws-span');
const thrownSpan = document.querySelector('#thrown-span');
const messageSpan = document.querySelector('#message-span');

/*console.log(clickButton, winsSpan, lossesSpan, drawsSpan, thrownSpan, messageSpan)*/


// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

console.log(`initial ${wins} wins, ${losses} losses, ${draws} draws`);
console.log(wins, losses, draws);

// set event listeners to update state and DOM


// ***********START OF BUTTON**************
clickButton.addEventListener('click', () => {

    
//    const getRandomThrow = Math.ceil(Math.random() * 3);
//console.log(getRandomThrow);

const gameButton = document.querySelector(':checked');
const userPicks = gameButton.value;
console.log(userPicks + ' selected by user');





const randomThrow = getRandomThrow();
console.log(randomThrow + ' random throw');

const computerChoices = convertToString();
console.log(computerChoices + ' selected by computer');


//Now to conver getRandomThrow to a 'string'

/*
    function convertToString() {
        if (randomThrow === 1) {
            return 'rock';
        } else if (randomThrow === 2) {
            return 'paper'; 
        } else if (randomThrow === 3) {
            return 'scissors';
        }    
    };
  */



//Now to compare userPick to computerChoice to find out who wins
/*
        - Rock + Rock = DRAW
        - Rock + Scissors = WIN
        - Rock + Paper = LOSS
        - Paper + Paper = DRAW
        - Paper + Rock = WIN
        - Paper + Scissors = LOSS
        - Scissors + Scissors = DRAW
        - Scissors + Paper = WIN
        - Scissors + Rock = LOSS
 */
/*
function didUserWin(userPick, computerChoice) {

    if (userPick === 'rock' && computerChoice === 'rock') {
        console.log('it is a ROCK draw!');
        return 'Draw!'
    } else if  (userPick === 'rock' && computerChoice === 'paper') {
        console.log('You lose!');
        return 'You lose!'
    } else if  (userPick === 'rock' && computerChoice === 'scissors') {
        console.log('You win!');
        return 'You win!'
    } else if (userPick === 'paper' && computerChoice === 'paper') {
        console.log('it is a PAPER draw!');
        return 'Draw!'
    } else if  (userPick === 'paper' && computerChoice === 'scissors') {
        console.log('You lose!');
        return 'You lose!'
    } else if  (userPick === 'paper' && computerChoice === 'rock') {
        console.log('You win!');
        return 'You win!'
    } else if (userPick === 'scissors' && computerChoice === 'scissors') {
        console.log('it is a SCISSORS draw!');
        return 'Draw!'
    } else if  (userPick === 'scissors' && computerChoice === 'rock') {
        console.log('You lose!');
        return 'You lose!'
    } else if  (userPick === 'scissors' && computerChoice === 'paper') {
        console.log('You win!');
        return 'You win!'
    }
*/

function convertToString() {
    if (randomThrow === 1) {
        return 'rock';
    } else if (randomThrow === 2) {
        return 'paper'; 
    } else if (randomThrow === 3) {
        return 'scissors';
    }    
}


const finalAnswer = didUserWin(userPicks, computerChoices);

messageSpan.textContent = finalAnswer;

if (finalAnswer === 'You win!') {
    wins++;
} else if (finalAnswer === 'You lose!') {
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



