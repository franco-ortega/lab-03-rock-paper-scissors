export function getRandomThrow() { 
    const randomThrow = Math.ceil(Math.random() * 3);

    if (randomThrow === 1) {
        return 'rock';
    } else if (randomThrow === 2) {
        return 'paper'; 
    } else if (randomThrow === 3) {
        return 'scissors';
    }
}

export function doesUserWin(player, computer) {

    if (player === 'rock' && computer === 'rock' || player === 'paper' && computer === 'paper' || player === 'scissors' && computer === 'scissors') { 
        return 'Draw!';
    } else if (player === 'rock' && computer === 'paper' || player === 'paper' && computer === 'scissors' || player === 'scissors' && computer === 'rock') {
        return 'You lose.';
    } else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper') {
        return 'You win!';
    }
}