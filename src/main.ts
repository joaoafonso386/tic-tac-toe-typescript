const board: HTMLTableElement = document.querySelector(".board");
const startButton: HTMLInputElement = document.querySelector(".start-game");
const gameStartedParagraph: HTMLParagraphElement = document.createElement("p");
const infoParagraph: HTMLParagraphElement = document.createElement("p");
const whoIsPlayingParagraph: HTMLParagraphElement = document.createElement("p");
const playerOne: string = "X";
const playerTwo: string = "O";
let playerOnePlays: number = 0;
let playerTwoPlays: number = 0;
let isInGameMode: boolean = false;
let winnerIsFound: boolean = false;
let cellArray: HTMLTableCellElement[] = [];
const horizontalWinner: number[][] = [[0,1,2],[3,4,5],[6,7,8]];
const verticalWinner: number[][] = [[0,3,6],[1,4,7],[2,5,8]];
const diagonalWinner: number[][] = [[0,4,8],[2,4,6]];

const determineWinner = (winningConditionArray: number[][], cellArray: HTMLTableCellElement[]): boolean => {

  return winningConditionArray.some(conditionArray => {
  
    const playerOneWins: boolean | void = determineWinningPlayer(cellArray, conditionArray, playerOne);
    const playerTwoWins: boolean | void = determineWinningPlayer(cellArray, conditionArray, playerTwo);
  
    if(playerOneWins || playerTwoWins) {
      winnerIsFound = true
    }

  })


}

const determineTie = (cellArray: HTMLTableCellElement[]) => {

  const tie: boolean = cellArray.every(cell => cell.innerHTML.length > 0 && !winnerIsFound)
  
  if(tie) {
    winnerIsFound = true;
    console.log("its a tie")
  }

}

const determineWinningPlayer = (cellArray: HTMLTableCellElement[], arrayOfConditions: number[], player: string): boolean | void => {

  const matchPLayer: boolean = arrayOfConditions.every(number => cellArray[number].innerHTML === player);

  if(matchPLayer) {
    console.log(`Player ${player} has won`)
    return true
  }

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
          playerOnePlays++;
          typedCell.innerText = playerOne;
        } else {
          if(typedCell.innerText.length <= 0) {
            playerTwoPlays++;
            typedCell.innerText = playerTwo;
          }
        }

        determineWinner(horizontalWinner, cellArray)
        determineWinner(verticalWinner, cellArray)
        determineWinner(diagonalWinner, cellArray)
        determineTie(cellArray)
      })
  }
}


startButton.onclick = () => {

  if(isInGameMode || winnerIsFound) {
    const shouldGameEnd: boolean = confirm("Do you want to end the game?");
    if(shouldGameEnd) window.location.reload();
  } else {
    isInGameMode = true;
    startButton.value = "Stop";
    whoIsPlayingParagraph.innerText
    gameStartedParagraph.innerText = "You are currently playing!";
    infoParagraph.style.marginTop = "0px";
    infoParagraph.innerText = "Press stop to end the game and restart";
    startButton.parentNode.append(gameStartedParagraph, infoParagraph);
  }
  
}
  


