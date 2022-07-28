const board: HTMLTableElement = document.querySelector(".board");
const startButton: HTMLInputElement = document.querySelector(".start-game");
const playerOne: string = "X";
const playerTwo: string = "O";
let playerOnePlays: number = 0;
let playerTwoPlays: number = 0;
let isInGameMode: boolean = false;
 

// Create a function that checks the board at every play to see winning conditions. Create functions for each winning condition (horizontal, vertical, diagonal, tie)
// Check for a horizontal winner -> Check parent element cells and see if every cell has "X" or "O"
// Check for a vertical winner -> Check if positon[1] is filled for that parent element and the other parent elements
// Check for a diagonal winner -> Check if position[0][1][2] are filled with the same content or positions[2][1][0] of each parent element
// Check for a tie -> all cells are filled but no horizontal, diagonal or vertical conditions are met

const determineWinner = (cell: HTMLTableCellElement) => {

  const cellArr: HTMLTableCellElement[] = [];

  cellArr.push(cell)

  console.log (cellArr)
 
}

for(let row of board.rows) {
  for (let cell of row.children) {

    const typedCell = cell as HTMLTableCellElement;
    typedCell.style.color = "red";
    typedCell.style.textAlign = "center";
    // console.log(typedCell)
    
    typedCell.addEventListener("click",() => { 
      if(isInGameMode) {
        if(playerOnePlays < playerTwoPlays || playerOnePlays === playerTwoPlays) {
          if(typedCell.innerText.length <= 0) {
            playerOnePlays++;
            typedCell.innerText = playerOne;
            determineWinner(typedCell)
          } 
        } else {
          if(typedCell.innerText.length <= 0) {
            playerTwoPlays++;
            typedCell.innerText = playerTwo;
            determineWinner(typedCell)
          }
        }
      }
    })

  }
}


startButton.onclick = () => {
  
  const gameStartedParagraph: HTMLParagraphElement = document.createElement("p");

  if(isInGameMode) {
    const shouldGameEnd: boolean = confirm("Do you want to end the game?");
    if(shouldGameEnd) return window.location.reload();   
  } else {
    isInGameMode = true;
    startButton.value = "Stop";
    gameStartedParagraph.textContent = "You are currently playing!";
    startButton.parentNode.append(gameStartedParagraph);
  }
  
}
  


