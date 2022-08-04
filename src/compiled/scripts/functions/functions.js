const determineWinner = ({ DOM, players, controlVariables, winningConditions }) => {
    const { cellArray, whoIsPlayingParagraph, gameStartedParagraph } = DOM;
    const { playerOne, playerTwo } = players;
    let { winnerIsFound } = controlVariables;
    return winningConditions.some(conditionArray => {
        const playerOneWins = determineWinningPlayerOrTie(cellArray, conditionArray, playerOne);
        const playerTwoWins = determineWinningPlayerOrTie(cellArray, conditionArray, playerTwo);
        const tie = determineWinningPlayerOrTie(cellArray, conditionArray, undefined, winnerIsFound);
        if (tie || playerTwoWins || playerOneWins) {
            winnerIsFound = true;
            whoIsPlayingParagraph.style.color = "red";
            gameStartedParagraph.remove();
            whoIsPlayingParagraph.innerText = playerOneWins || playerTwoWins || tie;
            return;
        }
    });
};
const determineWinningPlayerOrTie = (cellArray, arrayOfConditions, player, winnerIsFound) => {
    const findWinningPLayer = arrayOfConditions.every(number => cellArray[number].innerHTML === player);
    const findTie = cellArray.every(cell => cell.innerHTML.length > 0 && !winnerIsFound);
    if (findWinningPLayer) {
        return `Player ${player} has won! The game is now over`;
    }
    if (findTie) {
        return `It's a tie!`;
    }
    return "";
};
export { determineWinner, determineWinningPlayerOrTie };
