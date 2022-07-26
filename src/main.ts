const board: HTMLTableElement = document.querySelector(".board");
const startButton: HTMLInputElement = document.querySelector(".start-game");
const playerOne: string = "X";
const playerTwo: string = "O";
let playerOnePlays: number = 0;
let playerTwoPlays: number = 0;
let isInGameMode: boolean = false;
 

//children should have a variable of its own 
for(let row of board.rows) {
  for (let cell of row.children) {

    const typedCell = cell as HTMLTableCellElement;
    typedCell.style.color = "red";
    typedCell.style.textAlign = "center";
    
    typedCell.addEventListener("click",() => { 
      if(isInGameMode) {
        if(playerOnePlays < playerTwoPlays || playerOnePlays === playerTwoPlays) {
          if(typedCell.innerHTML.length <= 0) {
            playerOnePlays++;
            typedCell.innerText = playerOne;
          } 
        } else {
          if(typedCell.innerHTML.length <= 0) {
            playerTwoPlays++;
            typedCell.innerText = playerTwo;
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
  


