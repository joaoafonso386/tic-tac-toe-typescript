const board: HTMLTableElement | null = document.querySelector(".board");
const boardRows: HTMLCollection | undefined = board?.rows;
const startButton: HTMLButtonElement = document.querySelector(".start-button");
const playerOne: string = "X";
const isPlayerOnePlaying: boolean = false;
const isPlayerTwoPlaying: boolean = false;
const playerTwo: string = "O";

for(let row of boardRows) {

  const cellCollection: HTMLCollection = row.children;

  for(let cell  of cellCollection) {
    // const typedCell: HTMLTableElement = cell; 

    // typedCell.onclick = 

  }

}

