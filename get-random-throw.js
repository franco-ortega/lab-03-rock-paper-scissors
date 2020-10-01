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

export function didUserWin(userPick, computerChoice) {

    if (userPick === 'rock' && computerChoice === 'rock') {
        return 'Draw!'
    } else if  (userPick === 'rock' && computerChoice === 'paper') {
        return 'You lose.'
    } else if  (userPick === 'rock' && computerChoice === 'scissors') {
        return 'You win!'
    } else if (userPick === 'paper' && computerChoice === 'paper') {
        return 'Draw!'
    } else if  (userPick === 'paper' && computerChoice === 'scissors') {
        return 'You lose.'
    } else if  (userPick === 'paper' && computerChoice === 'rock') {
        return 'You win!'
    } else if (userPick === 'scissors' && computerChoice === 'scissors') {
        return 'Draw!'
    } else if  (userPick === 'scissors' && computerChoice === 'rock') {
        return 'You lose.'
    } else if  (userPick === 'scissors' && computerChoice === 'paper') {
        return 'You win!'
    }
};