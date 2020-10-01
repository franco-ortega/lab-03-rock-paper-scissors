// IMPORT MODULES under test here:
import { didUserWin } from '../get-random-throw.js';

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
    const guess1A = 'paper'
    const guess2A = 'paper'
    const expectedA = 'Draw!';

    const guess1B = 'rock'
    const guess2B = 'rock'
    const expectedB = 'Draw!';

    const guess1C = 'scissors'
    const guess2C = 'scissors'
    const expectedC = 'Draw!';
    //Act 
    // Call the function you're testing and set the result to a const
    const actualA = didUserWin(guess1A, guess2A);
    const actualB = didUserWin(guess1B, guess2B);
    const actualC = didUserWin(guess1C, guess2C);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualA, expectedA);
    expect.equal(actualB, expectedB);
    expect.equal(actualC, expectedC);

});
