const board: HTMLTableElement = document.querySelector(".board");
const startButton: HTMLInputElement = document.querySelector(".start-game");
const playerOne: string = "X";
const playerTwo: string = "O";
let playerOnePlays: number = 0;
let playerTwoPlays: number = 0;
let isInGameMode: boolean = false;
 



const determineWinner = () => {

  for(let row of board.rows) {
    const rowArray = [...row.children] as HTMLTableCellElement[];

    determineHorizontalWinner(rowArray)
  }

  console.log(board)
  // determineVerticalWinner(rowArray)
  
 
}

const determineHorizontalWinner = (rowArray: HTMLTableCellElement[]): void => {

  if(rowArray.every(el => el.innerText === playerOne)) return console.log(`Player ${playerOne} has won!`)
  if(rowArray.every(el => el.innerText === playerTwo)) return console.log(`Player ${playerTwo} has won!`)



}

const determineVerticalWinner = (rowArray: HTMLTableCellElement[]) => {

  const isVerticalWinner: boolean = rowArray.every(el => {
    console.log(el)

  })


}

for(let row of board.rows) {
  for (let cell of row.children) {

    const typedCell = cell as HTMLTableCellElement;
    typedCell.style.color = "red";
    typedCell.style.textAlign = "center";
    
    
    typedCell.addEventListener("click",() => { 
        if(!isInGameMode) return

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
        determineWinner()
      })

  }
}


startButton.onclick = () => {
  
  const gameStartedParagraph: HTMLParagraphElement = document.createElement("p");
  const infoParagraph: HTMLParagraphElement = document.createElement("p");

  if(isInGameMode) {
    const shouldGameEnd: boolean = confirm("Do you want to end the game?");
    if(shouldGameEnd) return window.location.reload();   
  } else {
    isInGameMode = true;
    startButton.value = "Stop";
    gameStartedParagraph.textContent = "You are currently playing!";
    infoParagraph.style.marginTop = "0px";
    infoParagraph.textContent = "Press stop to end the game and restart";
    startButton.parentNode.append(gameStartedParagraph, infoParagraph);
  }
  
}
  


