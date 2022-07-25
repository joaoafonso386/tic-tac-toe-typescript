"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const playerOne = "X";
const playerTwo = "O";
const isPlayerOnePlaying = false;
const isPlayerTwoPlaying = false;
let isInGameMode = false;
//children should have a variable of its own 
for (let { children } of board.rows) {
    for (let cell of children) {
        cell.addEventListener("click", () => {
            if (isInGameMode) {
            }
        });
    }
}
startButton.onclick = () => {
    const gameStartedParagraph = document.createElement("p");
    if (isInGameMode) {
        const shouldGameEnd = confirm("Do you want to end the game?");
        if (shouldGameEnd) {
            isInGameMode = false;
            startButton.value = "Start";
            startButton.nextElementSibling.remove();
            window.location.reload();
        }
    }
    else {
        isInGameMode = true;
        startButton.value = "Stop";
        gameStartedParagraph.textContent = "You are currently playing!";
        startButton.parentNode.append(gameStartedParagraph);
    }
};
