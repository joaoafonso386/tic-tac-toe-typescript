const board: HTMLTableElement = document.querySelector(".board");
const startButton: HTMLInputElement = document.querySelector(".start-game");
const playerOne: string = "X";
const playerTwo: string = "O";
const isPlayerOnePlaying: boolean = false;
const isPlayerTwoPlaying: boolean = false;
let isInGameMode: boolean = false;

//children should have a variable of its own 
for(let { children } of board.rows) {

  for (let cell of children) {

      cell.addEventListener("click",() => {
        if(isInGameMode) {

        }
      }) 

    }

  }


startButton.onclick = () => {
  
  const gameStartedParagraph: HTMLParagraphElement = document.createElement("p");

  if(isInGameMode) {
    const shouldGameEnd: boolean = confirm("Do you want to end the game?");
    if(shouldGameEnd) {
      isInGameMode = false;
      startButton.value = "Start";
      startButton.nextElementSibling.remove();
      window.location.reload();   
    } 
  } else {
    isInGameMode = true;
    startButton.value = "Stop";
    gameStartedParagraph.textContent = "You are currently playing!";
    startButton.parentNode.append(gameStartedParagraph);
  }
  
}
  


