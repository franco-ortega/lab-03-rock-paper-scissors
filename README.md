# lab-03-rock-paper-scissors

## Goal
The user will be able to play Rock/Paper/Scissors and keep track of their wins, losses, and draws.

## Summary

- Player chooses 1 of 3 options
- Player clicks BUTTON
    - Computer chooses 1 of 3 options
    - Function compares the choices (Player vs Computer):
        - Rock + Rock = DRAW
        - Rock + Scissors = WIN
        - Rock + Paper = LOSS
        - Paper + Paper = DRAW
        - Paper + Rock = WIN
        - Paper + Scissors = LOSS
        - Scissors + Scissors = DRAW
        - Scissors + Paper = WIN
        - Scissors + Rock = LOSS
    - WIN means that
        - +1 goes into winSpan
        - 'You win!' goes into messageSpan
    - LOSS goes into lossSpan
        - +1 goes into lossSpan
        - 'You lose!' goes into messageSpan
    - DRAW goes into drawSpan
        - +1 goes into drawSpan
        - 'You got a draw!' goes into messageSpan

### HTML
1. Radio Buttons:
    1. Radio Button: Rock
    1. Radio Button: Paper
    1. Radio Button: Scissors
1. Button (regular):
    1. Click to Play!
1. Spans:
    1. WIN tally
    1. LOSS tally
    1. DRAW tally
    1. messageSpan for Win! or Lose! or Draw!
1. Content:
    1. Rules of the game
1. Images:
    1. Rock image for Rock radio button
    1. Paper image for Paper radio button
    1. Scissors image for Scissors radio button

### JavaScript
1. Const:
    1. Radio button
    1. Click button
    1. winSpan
    1. lossSpan
    1. drawSpan
    1. messageSpan
1. Functions:
    1. getRandomThrow
    1. doesUserWin
1. State:
    1. Wins = 0
    2. Losses = 0
    3. Draws = 0


### CSS
1. Use images to cover radio buttons