// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from '../get-random-throw.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('function should return a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = getRandomThrow();
    const actual2 = getRandomThrow();
    const actual3 = getRandomThrow();
    const actual4 = getRandomThrow();
    const actual5 = getRandomThrow();
    const actual6 = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual1, 'string');
    expect.equal(typeof actual2, 'string');
    expect.equal(typeof actual3, 'string');
    expect.equal(typeof actual4, 'string');
    expect.equal(typeof actual5, 'string');
    expect.equal(typeof actual6, 'string');
});



test('function should return result of user choice vs randomly generated choice as win, loss, or draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userA = 'rock';
    const computerA = 'rock';
    const expectedA = 'Draw!';

    const userB = 'paper';
    const computerB = 'paper';
    const expectedB = 'Draw!';

    const userC = 'scissors';
    const computerC = 'scissors';
    const expectedC = 'Draw!';

    const userD = 'rock';
    const computerD = 'paper';
    const expectedD = 'You lose.';

    const userE = 'rock';
    const computerE = 'scissors';
    const expectedE = 'You win!';

    const userF = 'paper';
    const computerF = 'scissors';
    const expectedF = 'You lose.';

    const userG = 'paper';
    const computerG = 'rock';
    const expectedG = 'You win!';

    const userH = 'scissors';
    const computerH = 'rock';
    const expectedH = 'You lose.';

    const userI = 'scissors';
    const computerI = 'paper';
    const expectedI = 'You win!';

    //Act 
    // Call the function you're testing and set the result to a const
    const actualA = didUserWin(userA, computerA);
    const actualB = didUserWin(userB, computerB);
    const actualC = didUserWin(userC, computerC);
    const actualD = didUserWin(userD, computerD);
    const actualE = didUserWin(userE, computerE);
    const actualF = didUserWin(userF, computerF);
    const actualG = didUserWin(userG, computerG);
    const actualH = didUserWin(userH, computerH);
    const actualI = didUserWin(userI, computerI);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualA, expectedA);
    expect.equal(actualB, expectedB);
    expect.equal(actualC, expectedC);
    expect.equal(actualD, expectedD);
    expect.equal(actualE, expectedE);
    expect.equal(actualF, expectedF);
    expect.equal(actualG, expectedG);
    expect.equal(actualH, expectedH);
    expect.equal(actualI, expectedI);

});
