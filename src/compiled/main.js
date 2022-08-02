"use strict";
const board = document.querySelector(".board");
const startButton = document.querySelector(".start-game");
const gameStartedParagraph = document.createElement("p");
const infoParagraph = document.createElement("p");
const whoIsPlayingParagraph = document.createElement("li");
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
    return winningConditionArray.some(conditionArray => {
        const playerOneWins = determineWinningPlayer(cellArray, conditionArray, playerOne);
        const playerTwoWins = determineWinningPlayer(cellArray, conditionArray, playerTwo);
        if (playerOneWins || playerTwoWins) {
            winnerIsFound = true;
        }
    });
};
const determineTie = (cellArray) => {
    const tie = cellArray.every(cell => cell.innerHTML.length > 0 && !winnerIsFound);
    if (tie) {
        winnerIsFound = true;
        console.log("its a tie");
    }
};
const determineWinningPlayer = (cellArray, arrayOfConditions, player) => {
    const matchPLayer = arrayOfConditions.every(number => cellArray[number].innerHTML === player);
    if (matchPLayer) {
        whoIsPlayingParagraph.style.color = "red";
        whoIsPlayingParagraph.innerText = `Player ${player} has won! The game is now over`;
        gameStartedParagraph.remove();
        return true;
    }
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
                whoIsPlayingParagraph.innerText = `Player ${playerTwo} is playing!`;
                playerOnePlays++;
                typedCell.innerText = playerOne;
            }
            else {
                if (typedCell.innerText.length <= 0) {
                    playerTwoPlays++;
                    whoIsPlayingParagraph.innerText = `Player ${playerOne} is playing!`;
                    typedCell.innerText = playerTwo;
                }
            }
            determineWinner(horizontalWinner, cellArray);
            determineWinner(verticalWinner, cellArray);
            determineWinner(diagonalWinner, cellArray);
            determineTie(cellArray);
        });
    }
}
startButton.onclick = () => {
    if (isInGameMode || winnerIsFound) {
        const shouldGameEnd = confirm("Do you want to end the game?");
        if (shouldGameEnd)
            window.location.reload();
    }
    else {
        const rulesList = board.previousElementSibling;
        isInGameMode = true;
        startButton.value = "Stop";
        whoIsPlayingParagraph.innerText = `Player ${playerOne} is playing!`;
        whoIsPlayingParagraph.style.fontWeight = "bold";
        whoIsPlayingParagraph.style.marginTop = "10px";
        gameStartedParagraph.innerText = "You are currently playing!";
        gameStartedParagraph.style.marginBottom = "0px";
        infoParagraph.innerText = "Press stop to end the game and restart";
        infoParagraph.style.marginTop = "10px";
        startButton.parentNode.append(gameStartedParagraph, infoParagraph);
        rulesList.appendChild(whoIsPlayingParagraph);
    }
};
