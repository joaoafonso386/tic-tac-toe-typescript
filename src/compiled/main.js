"use strict";
const board = document.querySelector(".board");
console.log(board);
const startButton = document.querySelector(".start-game");
const playerOne = "X";
const playerTwo = "O";
let isPlayerOnePlaying = false;
let isPlayerTwoPlaying = false;
let isInGameMode = false;
const ;
//children should have a variable of its own 
for (let row of board.rows) {
    for (let cell of row.children) {
        const typedCell = cell;
        typedCell.style.color = "red";
        typedCell.style.textAlign = "center";
        typedCell.addEventListener("click", () => {
            if (isInGameMode) {
                if (!isPlayerOnePlaying) {
                    isPlayerOnePlaying = true;
                    typedCell.innerText = playerOne;
                }
                else {
                    isPlayerTwoPlaying = true;
                    typedCell.innerText = playerTwo;
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
