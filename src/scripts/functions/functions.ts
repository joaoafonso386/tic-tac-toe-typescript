import { Globals } from "../interfaces/Globals";

const determineWinner = ({ DOM, players, winningConditions }: Globals): boolean | void => {

  const { cellArray, whoIsPlayingParagraph, gameStartedParagraph } = DOM;
  const { playerOne, playerTwo } = players;
  
  return winningConditions.some(conditionArray => {

    const playerOneWins: string  = determineWinningPlayerOrTie(cellArray, conditionArray, playerOne);
    const playerTwoWins: string  = determineWinningPlayerOrTie(cellArray, conditionArray, playerTwo);
    const tie: string = determineWinningPlayerOrTie(cellArray,conditionArray);
  
    if(tie || playerTwoWins || playerOneWins) {
      whoIsPlayingParagraph.style.color = "red";
      gameStartedParagraph.remove()
      whoIsPlayingParagraph.innerText = playerOneWins || playerTwoWins || tie
      return true
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