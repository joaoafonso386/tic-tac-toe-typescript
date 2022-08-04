import { globals } from "./scripts/globals.js";
const { board, startButton, gameStartedParagraph, infoParagraph, whoIsPlayingParagraph, cellArray, } = globals.DOM;
const { playerOne, playerTwo } = globals.players;
const winningConditions = globals.winningConditions;
let { playerOnePlays, playerTwoPlays } = globals.plays;
let { isInGameMode, winnerIsFound } = globals.controlVariables;
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
    controlVariables: {
        winnerIsFound,
        isInGameMode
    },
    winningConditions
};
const determineWinner = ({ DOM, players, winningConditions }) => {
    const { cellArray, whoIsPlayingParagraph, gameStartedParagraph } = DOM;
    const { playerOne, playerTwo } = players;
    return winningConditions.some(conditionArray => {
        const playerOneWins = conditionArray.every(number => cellArray[number].textContent === playerOne);
        const playerTwoWins = conditionArray.every(number => cellArray[number].textContent === playerTwo);
        const tie = playerOnePlays + playerTwoPlays === 9 && !playerOneWins && !playerTwoWins;
        if (playerOneWins) {
            whoIsPlayingParagraph.innerText = `Player ${playerOne} has won! The game is now over`;
        }
        if (playerTwoWins) {
            whoIsPlayingParagraph.innerText = `Player ${playerTwo} has won! The game is now over`;
        }
        if (tie) {
            whoIsPlayingParagraph.innerText = "Its tie!";
            whoIsPlayingParagraph.style.color = "red";
            gameStartedParagraph.remove();
        }
        if (playerTwoWins || playerOneWins) {
            whoIsPlayingParagraph.style.color = "red";
            gameStartedParagraph.remove();
            return true;
        }
    });
};
// const determineWinningPlayerOrTie = (cellArray: HTMLTableCellElement[], conditionArray: number[], player?: string): string => {
//   const findWinningPLayer: boolean = conditionArray.every(number => cellArray[number].textContent === player);
//   const findTie: boolean = cellArray.every(cell => cell.textContent.length > 0);
//   if(findWinningPLayer){
//     return `Player ${player} has won! The game is now over`;
//   } 
//   if(findTie && !findWinningPLayer) {
//     return `It's a tie!`;
//   }
//   return "";
// }
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
