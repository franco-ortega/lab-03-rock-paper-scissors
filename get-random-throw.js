export function getRandomThrow() { 
    const randomThrow = Math.ceil(Math.random() * 3);

    if (randomThrow === 1) {
        return 'rock';
    } else if (randomThrow === 2) {
        return 'paper'; 
    } else if (randomThrow === 3) {
        return 'scissors';
    }
};

export function doesUserWin(player, computer) {

    if (player === 'rock' && computer === 'rock') {
        return 'Draw!'
    } else if  (player === 'rock' && computer === 'paper') {
        return 'You lose.'
    } else if  (player === 'rock' && computer === 'scissors') {
        return 'You win!'
    } else if (player === 'paper' && computer === 'paper') {
        return 'Draw!'
    } else if  (player === 'paper' && computer === 'scissors') {
        return 'You lose.'
    } else if  (player === 'paper' && computer === 'rock') {
        return 'You win!'
    } else if (player === 'scissors' && computer === 'scissors') {
        return 'Draw!'
    } else if  (player === 'scissors' && computer === 'rock') {
        return 'You lose.'
    } else if  (player === 'scissors' && computer === 'paper') {
        return 'You win!'
    }
};