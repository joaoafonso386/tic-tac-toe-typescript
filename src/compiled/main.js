"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const playerOne = "X";
const playerTwo = "O";
let playerOnePlays = 0;
let playerTwoPlays = 0;
let isInGameMode = false;
let winnerIsFound = false;
let cellArray = [];
const horizontalWinner = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const verticalWinner = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonalWinner = [[0, 4, 8], [2, 4, 6]];
const determineWinner = (winningConditionArray, cellArray) => {
    const winner = winningConditionArray.some(conditon => {
        const matchPLayerOne = conditon.every(number => cellArray[number].innerHTML === playerOne);
        const matchPLayerTwo = conditon.every(number => cellArray[number].innerHTML === playerTwo);
        if (matchPLayerOne) {
            winnerIsFound = true;
            console.log("Player X has won");
        }
        if (matchPLayerTwo) {
            winnerIsFound = true;
            console.log("Player O has won");
        }
    });
};
for (let row of board.rows) {
    for (let cell of row.children) {
        const typedCell = cell;
        typedCell.style.color = "red";
        typedCell.style.textAlign = "center";
        cellArray.push(typedCell);
        typedCell.addEventListener("click", () => {
            if (!isInGameMode || winnerIsFound)
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
            determineWinner(horizontalWinner, cellArray);
            determineWinner(verticalWinner, cellArray);
            determineWinner(diagonalWinner, cellArray);
        });
    }
}
startButton.onclick = () => {
    const gameStartedParagraph = document.createElement("p");
    const infoParagraph = document.createElement("p");
    if (isInGameMode && winnerIsFound) {
        const shouldGameEnd = confirm("Do you want to end the game?");
        if (shouldGameEnd)
            window.location.reload();
    }
    else {
        isInGameMode = true;
        startButton.value = "Stop";
        gameStartedParagraph.textContent = "You are currently playing!";
        infoParagraph.style.marginTop = "0px";
        infoParagraph.textContent = "Press stop to end the game and restart";
        startButton.parentNode.append(gameStartedParagraph, infoParagraph);
    }
};
