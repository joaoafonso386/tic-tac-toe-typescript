const board: HTMLTableElement | null = document.querySelector(".board");
const startButton: HTMLButtonElement | null = document.querySelector(".start-button");
const playerOne: string = "X";
const isPlayerOnePlaying: boolean = false;
const isPlayerTwoPlaying: boolean = false;
const playerTwo: string = "O";


for(let { children } of board.rows) {

  for (let cell  of children) {
    console.log(cell)
    cell.addEventListener("click",() => {
      console.log("clicked")
    }) 

  }

}

