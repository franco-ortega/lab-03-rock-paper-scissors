export function getRandomThrow() { 
    const randomThrow = Math.ceil(Math.random() * 3);
//console.log(getRandomThrow);


if (randomThrow === 1) {
    return 'rock';
} else if (randomThrow === 2) {
    return 'paper'; 
} else if (randomThrow === 3) {
    return 'scissors';
}    



}

export function didUserWin(userPick, computerChoice) {

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

};



//const getRandomThrow = Math.ceil(Math.random() * 3);
//console.log(getRandomThrow);