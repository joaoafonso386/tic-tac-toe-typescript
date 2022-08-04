import { Globals } from "../interfaces/Globals";

const determineWinner = ({ DOM, players, controlVariables, winningConditions }: Globals): boolean | void => {

  const { cellArray, whoIsPlayingParagraph, gameStartedParagraph } = DOM;
  const { playerOne, playerTwo } = players;
  let { winnerIsFound } = controlVariables

  return winningConditions.some(conditionArray => {
  
    const playerOneWins: string  = determineWinningPlayerOrTie(cellArray, conditionArray, playerOne);
    const playerTwoWins: string  = determineWinningPlayerOrTie(cellArray, conditionArray, playerTwo);
    const tie: string = determineWinningPlayerOrTie(cellArray,conditionArray, undefined, winnerIsFound);
  
    if(tie || playerTwoWins || playerOneWins) {
      winnerIsFound = true;
      whoIsPlayingParagraph.style.color = "red";
      gameStartedParagraph.remove()
      whoIsPlayingParagraph.innerText = playerOneWins || playerTwoWins || tie
      return 
    }

  })

}

const determineWinningPlayerOrTie = (cellArray: HTMLTableCellElement[], arrayOfConditions: number[], player?: string,  winnerIsFound?:boolean): string => {

  const findWinningPLayer: boolean = arrayOfConditions.every(number => cellArray[number].innerHTML === player);
  const findTie: boolean = cellArray.every(cell => cell.innerHTML.length > 0 && !winnerIsFound)

  if(findWinningPLayer){
    return `Player ${player} has won! The game is now over`;
  } 
  
  if(findTie) {
    return `It's a tie!`;
  }
    
  return "";

} 

export { determineWinner, determineWinningPlayerOrTie }