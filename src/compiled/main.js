"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const playerOne = "X";
const playerTwo = "O";
let playerOnePlays = 0;
let playerTwoPlays = 0;
let isInGameMode = false;
// Create a function that checks the board at every play to see winning conditions. Create functions for each winning condition (horizontal, vertical, diagonal, tie)
// Check for a horizontal winner -> Check parent element cells and see if every cell has "X" or "O"
// Check for a vertical winner -> Check if position[1] is filled for that parent element and the other parent elements
// Check for a diagonal winner -> Check if position[0][1][2] are filled with the same content or positions[2][1][0] of each parent element
// Check for a tie -> all cells are filled but no horizontal, diagonal or vertical conditions are met
// Stop the game if a winner has been found
//Add return types to functions
const determineWinner = () => {
    for (let row of board.rows) {
        const rowArray = [...row.children];
        determineHorizontalWinner(rowArray);
        determineVerticalWinner(rowArray);
    }
};
const determineHorizontalWinner = (rowArray) => {
    if (rowArray.every(el => el.innerText === playerOne))
        return console.log(`Player ${playerOne} has won!`);
    if (rowArray.every(el => el.innerText === playerTwo))
        return console.log(`Player ${playerTwo} has won!`);
};
const determineVerticalWinner = (rowArray) => {
};
for (let row of board.rows) {
    for (let cell of row.children) {
        const typedCell = cell;
        typedCell.style.color = "red";
        typedCell.style.textAlign = "center";
        typedCell.addEventListener("click", () => {
            if (!isInGameMode)
                return;
            if ((playerOnePlays < playerTwoPlays || playerOnePlays === playerTwoPlays) &&
                typedCell.innerText.length <= 0) {
                playerOnePlays++;
                typedCell.innerText = playerOne;
            }
            else {
                if (typedCell.innerText.length <= 0) {
                    playerTwoPlays++;
                    typedCell.innerText = playerTwo;
                }
            }
            determineWinner();
        });
    }
}
startButton.onclick = () => {
    const gameStartedParagraph = document.createElement("p");
    if (isInGameMode) {
        const shouldGameEnd = confirm("Do you want to end the game?");
        if (shouldGameEnd)
            return window.location.reload();
    }
    else {
        isInGameMode = true;
        startButton.value = "Stop";
        gameStartedParagraph.textContent = "You are currently playing!";
        startButton.parentNode.append(gameStartedParagraph);
    }
};
