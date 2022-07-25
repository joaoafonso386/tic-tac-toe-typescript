"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const playerOne = "X";
let isInGameMode = false;
const isPlayerOnePlaying = false;
const isPlayerTwoPlaying = false;
const playerTwo = "O";
//children should have a variable of its own 
for (let { children } of board.rows) {
    for (let cell of children) {
        if (isInGameMode) {
            cell.addEventListener("click", () => {
            });
        }
    }
}
startButton.onclick = () => {
    startButton.value = "Stop";
    const gameStartedParagraph = document.createElement("p");
    gameStartedParagraph.className = "currently-playing";
    //check if the game is being played or not
    if (isInGameMode) {
        const shouldGameEnd = confirm("Do you want to end the game?");
        if (shouldGameEnd) {
            isInGameMode = false;
            startButton.value = "Start";
            startButton.nextElementSibling.remove();
        }
    }
    else {
        isInGameMode = true;
        gameStartedParagraph.textContent = "You are currently playing!";
        startButton.parentNode.append(gameStartedParagraph);
    }
    //if it is not being played then allow for cells to be clicked and X's or O's being added to the board
    //also change the button text from "start" to "stop"
    //if the game is being played, then the button text should be "stop"
    //if the user clicks the stop button then a "confirm stop game" window should pop up to make clear that the user wants to stop the game no matter at what point the game is 
};
