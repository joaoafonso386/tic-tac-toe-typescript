const board: HTMLTableElement = document.querySelector(".board");
const startButton: HTMLButtonElement = document.querySelector(".start-game");
const playerOne: string = "X";
const isInGameMode: boolean = false;
const isPlayerOnePlaying: boolean = false;
const isPlayerTwoPlaying: boolean = false;
const playerTwo: string = "O";

//children should have a variable of its own 
for(let { children } of board.rows) {

  for (let cell  of children) {

    cell.addEventListener("click",() => {


    }) 

  }

}

startButton.onclick = () => {
  
  //check if the game is being played or not
  //if it is not being played then allow for cells to be clicked and X's or O's being added to the board
  //also change the button text from "start" to "stop"
  //if the game is being played, then the button text should be "stop"
  //if the user clicks the stop button then a "confirm stop game" window should pop up to make clear that the user wants to stop the game no matter at what point the game is 
  
  console.log("game started")
}

