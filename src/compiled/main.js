import { globals } from "./scripts/globals.js";
import { determineWinner } from "./scripts/functions/functions.js";
const { board, startButton, gameStartedParagraph, infoParagraph, whoIsPlayingParagraph, cellArray, } = globals.DOM;
const { playerOne, playerTwo } = globals.players;
const winningConditions = globals.winningConditions;
let { playerOnePlays, playerTwoPlays } = globals.plays;
let { isInGameMode, winnerIsFound } = globals.controlVariables;
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
            const winningVariables = {
                DOM: {
                    cellArray,
                    whoIsPlayingParagraph,
                    gameStartedParagraph
                },
                players: {
                    playerOne,
                    playerTwo
                },
                plays: {
                    playerOnePlays,
                    playerTwoPlays
                },
                winningConditions
            };
            if (determineWinner(winningVariables)) {
                winnerIsFound = true;
                return;
            }
        });
    }
}
startButton.onclick = () => {
    if (isInGameMode || winnerIsFound) {
        const shouldGameEnd = confirm("Do you want to reset the board?");
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
