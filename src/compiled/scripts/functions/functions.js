const determineWinner = ({ DOM, players, plays, winningConditions }) => {
    const { cellArray, whoIsPlayingParagraph, gameStartedParagraph } = DOM;
    const { playerOne, playerTwo } = players;
    const { playerOnePlays, playerTwoPlays } = plays;
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
            whoIsPlayingParagraph.innerText = "Its a tie!";
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
export { determineWinner };
