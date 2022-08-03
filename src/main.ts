import { globals } from "./scripts/globals.js";

const { 
  board, 
  startButton, 
  gameStartedParagraph, 
  infoParagraph,
  whoIsPlayingParagraph,
  cellArray,
} = globals.DOM;

const { playerOne, playerTwo } = globals.players;
const winningConditionArray = globals.winningConditions;

let { playerOnePlays, playerTwoPlays } = globals.plays;
let { isInGameMode, winnerIsFound } = globals.controlVariables;



const determineWinner = (winningConditionArray: number[][], cellArray: HTMLTableCellElement[]): boolean => {

  return winningConditionArray.some(conditionArray => {
  
    const playerOneWins: string  = determineWinningPlayerOrTie(cellArray, conditionArray, playerOne);
    const playerTwoWins: string  = determineWinningPlayerOrTie(cellArray, conditionArray, playerTwo);
    const tie: string = determineWinningPlayerOrTie(cellArray, conditionArray);
  
    if(playerOneWins || playerTwoWins || tie) {
      winnerIsFound = true;
      whoIsPlayingParagraph.style.color = "red";
      gameStartedParagraph.remove()
      whoIsPlayingParagraph.innerText = playerOneWins || playerTwoWins || tie
    }

  })

}

const determineWinningPlayerOrTie = (cellArray: HTMLTableCellElement[], arrayOfConditions: number[], player?: string): string => {

  const findWinningPLayer: boolean = arrayOfConditions.every(number => cellArray[number].innerHTML === player);
  const tie: boolean = cellArray.every(cell => cell.innerHTML.length > 0 && !winnerIsFound)

  if(findWinningPLayer) return `Player ${player} has won! The game is now over`;

  if(tie) return `It's a tie!`;

  return "";

} 

for(let row of board.rows) {
  for (let cell of row.children) {

    const typedCell = cell as HTMLTableCellElement;
    typedCell.style.color = "red";
    typedCell.style.textAlign = "center";
    cellArray.push(typedCell)
    
    
    typedCell.addEventListener("click",() => { 
        if(!isInGameMode || winnerIsFound) return

        if((playerOnePlays < playerTwoPlays || playerOnePlays === playerTwoPlays) && 
        typedCell.innerText.length <= 0) {
          whoIsPlayingParagraph.innerText = `Player ${playerTwo} is playing!`;
          playerOnePlays++;
          typedCell.innerText = playerOne;
        } else {
          if(typedCell.innerText.length <= 0) {
            playerTwoPlays++;
            whoIsPlayingParagraph.innerText = `Player ${playerOne} is playing!`;
            typedCell.innerText = playerTwo;
          }
        }
        determineWinner(winningConditionArray, cellArray)
      })
  }
}


startButton.onclick = () => {

  if(isInGameMode || winnerIsFound) {
    const shouldGameEnd: boolean = confirm("Do you want to reset the board?");
    if(shouldGameEnd) window.location.reload();
  } else {
    const rulesList = board.previousElementSibling as HTMLElement;
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
    rulesList.appendChild(whoIsPlayingParagraph)
  }
  
}
