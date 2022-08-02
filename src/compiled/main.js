"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const playerOne = "X";
const playerTwo = "O";
let playerOnePlays = 0;
let playerTwoPlays = 0;
let isInGameMode = false;
let winnerIsFound = false;
let cellArr = [];
let customIndex = 0;
const horizontalWinner = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const verticalWinner = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const diagonalWinner = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
const determineWinner = (cellArr) => {
    determineHorizontalWinner(cellArr);
    // determineVerticalWinner(rowArray)
};
const determineHorizontalWinner = (cellArr) => {
    horizontalWinner.some(conditon => {
        if (conditon.every((celNum) => cellArr[celNum].innerHTML === playerOne)) {
            winnerIsFound = true;
            console.log("Player X has won");
        }
    });
    verticalWinner.some(conditon => {
        if (conditon.every((celNum) => cellArr[celNum].innerHTML === playerOne))
            return console.log("Player X has won");
        if (conditon.every((celNum) => cellArr[celNum].innerHTML === playerTwo))
            return console.log("Player O has won");
    });
};
const determineVerticalWinner = (rowArray) => {
    const isVerticalWinner = rowArray.forEach((el) => {
    });
};
for (let row of board.rows) {
    for (let cell of row.children) {
        const typedCell = cell;
        typedCell.style.color = "red";
        typedCell.style.textAlign = "center";
        cellArr.push(typedCell);
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
            determineWinner(cellArr);
        });
    }
}
startButton.onclick = () => {
    const gameStartedParagraph = document.createElement("p");
    const infoParagraph = document.createElement("p");
    if (isInGameMode && winnerIsFound) {
        const shouldGameEnd = confirm("Do you want to end the game?");
        if (shouldGameEnd)
            return window.location.reload();
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
