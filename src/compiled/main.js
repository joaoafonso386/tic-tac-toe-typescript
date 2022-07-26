"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const playerOne = "X";
const playerTwo = "O";
let playerOnePlays = 0;
let playerTwoPlays = 0;
let isInGameMode = false;
//children should have a variable of its own 
for (let row of board.rows) {
    for (let cell of row.children) {
        const typedCell = cell;
        typedCell.style.color = "red";
        typedCell.style.textAlign = "center";
        typedCell.addEventListener("click", () => {
            if (isInGameMode) {
                if (playerOnePlays < playerTwoPlays || playerOnePlays === playerTwoPlays) {
                    if (typedCell.innerHTML.length <= 0) {
                        playerOnePlays++;
                        typedCell.innerText = playerOne;
                    }
                }
                else {
                    if (typedCell.innerHTML.length <= 0) {
                        playerTwoPlays++;
                        typedCell.innerText = playerTwo;
                    }
                }
            }
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
